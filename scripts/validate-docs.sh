#!/usr/bin/env bash
set -euo pipefail

missing_source=0
bad_role_prefix=0

for file in wiki/guides/*.md wiki/playbooks/*.md wiki/cases/*.md; do
  [ -e "$file" ] || continue
  if [ "$file" = "wiki/cases/README.md" ]; then
    continue
  fi

  case "$file" in
    wiki/guides/*.md|wiki/playbooks/*.md)
      filename="$(basename "$file")"
      if ! [[ "$filename" =~ ^[0-9]{2}-.+\.md$ ]]; then
        echo "::error file=$file::Guide/playbook docs must use a role prefix like 30-name.md"
        bad_role_prefix=1
      fi
      ;;
  esac

  if ! grep -q "Source Worklog" "$file"; then
    echo "::error file=$file::Missing Source Worklog section"
    missing_source=1
  fi

done

if [ "$missing_source" -ne 0 ] || [ "$bad_role_prefix" -ne 0 ]; then
  exit 1
fi

python3 scripts/validate-links.py

echo "Workflow guide docs validated."
