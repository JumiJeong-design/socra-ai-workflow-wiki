#!/bin/bash
# PostToolUse: Write 후 버전 번호 일치 확인

INPUT=$(cat)
FILE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null)

BASENAME=$(basename "$FILE")

# 버전 관련 파일에서만 실행
[[ "$BASENAME" != "sidebar.html" && \
   "$BASENAME" != "ai-workflow-guide.html" && \
   "$BASENAME" != "changelog.html" && \
   "$BASENAME" != "ai-workflow-guide.js" ]] && exit 0

DIR=$(dirname "$FILE")

V_SIDEBAR=$(grep -o 'v0\.[0-9]*' "$DIR/sidebar.html" 2>/dev/null | head -1)
V_GUIDE=$(grep -o 'v0\.[0-9]*' "$DIR/ai-workflow-guide.html" 2>/dev/null | head -1)
V_JS=$(grep -o 'v=0\.[0-9]*' "$DIR/ai-workflow-guide.js" 2>/dev/null | sed 's/v=/v/' | head -1)

[[ -z "$V_SIDEBAR" ]] && exit 0

if [[ "$V_SIDEBAR" != "$V_GUIDE" || "$V_SIDEBAR" != "$V_JS" ]]; then
    echo "⚠️  버전 불일치 감지:"
    echo "  sidebar.html        : $V_SIDEBAR"
    echo "  ai-workflow-guide   : $V_GUIDE"
    echo "  ai-workflow-guide.js: $V_JS"
    echo "→ CLAUDE.md 체크리스트: 4개 파일을 동시에 업데이트하세요"
fi
