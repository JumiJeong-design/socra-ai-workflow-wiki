#!/usr/bin/env bash
set -euo pipefail

missing_source=0

for file in wiki/guides/*.md wiki/playbooks/*.md wiki/cases/*.md; do
  [ -e "$file" ] || continue
  if [ "$file" = "wiki/cases/README.md" ]; then
    continue
  fi

  if ! grep -q "Source Worklog" "$file"; then
    echo "::error file=$file::Missing Source Worklog section"
    missing_source=1
  fi

done

if [ "$missing_source" -ne 0 ]; then
  exit 1
fi

echo "Workflow guide docs validated."
