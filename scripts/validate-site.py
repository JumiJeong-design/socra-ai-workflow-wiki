#!/usr/bin/env python3
"""Validate built site pages: canonical, unique titles, internal links and anchors."""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
BASE = "https://jumijeong-design.github.io/socra-ai-workflow-wiki/"
# 사이드바 조각과 빌드 원본은 독립 페이지가 아니다
SKIP_PAGES = {"sidebar.html", "wiki.html", "ai-workflow-guide.html"}

CANONICAL_RE = re.compile(r'<link rel="canonical" href="([^"]+)"')
OG_URL_RE = re.compile(r'<meta property="og:url" content="([^"]+)"')
TITLE_RE = re.compile(r"<title>([^<]*)</title>")
HREF_RE = re.compile(r'href="([^"]+)"')


def main() -> int:
    errors = []
    pages = {p.name: p.read_text(encoding="utf-8") for p in SITE.glob("*.html")}
    ids = {name: set(re.findall(r'id="([^"]+)"', html)) for name, html in pages.items()}

    titles = {}
    for name, html in pages.items():
        if name in SKIP_PAGES:
            continue
        for label, pattern in (("canonical", CANONICAL_RE), ("og:url", OG_URL_RE)):
            m = pattern.search(html)
            if m and m.group(1) not in (BASE + name, BASE) :
                errors.append(f"{name}: {label} points to {m.group(1)}")
        m = TITLE_RE.search(html)
        if m:
            titles.setdefault(m.group(1), []).append(name)

    for title, names in titles.items():
        if len(names) > 1:
            errors.append(f"duplicate <title> '{title}': {', '.join(sorted(names))}")

    for name, html in pages.items():
        if name == "ai-workflow-guide.html":
            continue
        for href in HREF_RE.findall(html):
            if href.startswith(("http://", "https://", "mailto:", "javascript:")) or "?" in href.split("#")[0]:
                continue
            path, _, anchor = href.partition("#")
            if path and not path.endswith(".html"):
                continue
            target = path or name
            if target not in pages:
                errors.append(f"{name}: link to missing page {href}")
            elif anchor and anchor not in ids[target]:
                errors.append(f"{name}: link to missing anchor {href}")

    for e in errors:
        print(f"::error::{e}")
    if errors:
        return 1
    print("Site pages validated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
