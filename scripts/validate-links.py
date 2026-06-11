#!/usr/bin/env python3
"""Validate local Markdown links in wiki source docs."""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
SKIP_PREFIXES = (
    "http://",
    "https://",
    "mailto:",
    "#",
    "app://",
    "collection://",
)


def strip_target(raw: str) -> str:
    target = raw.strip()
    if " " in target and not target.startswith("<"):
        target = target.split(" ", 1)[0]
    target = target.strip("<>")
    target = target.split("#", 1)[0].split("?", 1)[0]
    return target


def main() -> int:
    files = [ROOT / "README.md"]
    files.extend(sorted((ROOT / "wiki").glob("**/*.md")))

    failed = False
    for file in files:
        if not file.exists():
            continue
        text = file.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(text):
            target = strip_target(match.group(1))
            if not target or target.startswith(SKIP_PREFIXES):
                continue
            resolved = (file.parent / target).resolve()
            try:
                resolved.relative_to(ROOT)
            except ValueError:
                continue
            if not resolved.exists():
                rel_file = file.relative_to(ROOT)
                print(f"::error file={rel_file}::Broken local link: {target}")
                failed = True

    if failed:
        return 1
    print("Wiki local links validated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
