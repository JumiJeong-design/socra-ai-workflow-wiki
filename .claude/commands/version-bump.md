# Version Bump

현재 버전을 올리고 changelog를 업데이트한다.

## 절차

1. `git log --oneline` 으로 마지막 버전 커밋 이후 변경 내용을 파악한다
2. `sidebar.html` 에서 현재 버전 번호를 확인한다
3. 다음 버전(v0.X → v0.X+1)을 결정한다
4. 변경 내용을 요약해 changelog 항목 문구를 작성한다
5. CLAUDE.md 버전 업데이트 체크리스트에 따라 4개 파일을 모두 수정한다:
   - `sidebar.html` — 버전 텍스트 (`v0.X Changelog`)
   - `ai-workflow-guide.html` — 히어로 배지 버전 + 인라인 changelog 항목 맨 위에 추가
   - `changelog.html` — 새 버전 섹션을 기존 최상단 섹션 위에 추가
   - `ai-workflow-guide.js` — `sidebar.html?v=0.X` 캐시 버전
6. 변경 내용을 확인하고 커밋한다

## 규칙

- 인라인 `<style>` 추가 금지 — 스타일은 `ai-workflow-guide.css` 에만
- 하드코딩 컬러값 금지 — 반드시 CSS 변수 사용
- 커밋 메시지: `chore: v0.X → v0.X+1 — [핵심 변경 한 줄 요약]`
