#!/bin/bash
# PostToolUse: Write 후 인라인 <style> 태그 감지

INPUT=$(cat)
FILE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null)

# HTML 파일만 체크
[[ "$FILE" != *.html ]] && exit 0
[[ ! -f "$FILE" ]] && exit 0

if grep -q "<style" "$FILE"; then
    echo "⚠️  인라인 <style> 태그 감지: $(basename $FILE)"
    echo "→ product-context.md 규칙: 스타일은 ai-workflow-guide.css 에만 작성하세요"
fi
