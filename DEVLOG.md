# socra-ai-workflow-guide - 개발 로그

AI 코딩 도구와 함께 진행한 가이드 문서 개선 작업 기록입니다.

---

## 2026-05-29

### AI Workflow 가이드 정보 구조 및 검색 UX 개선

사용자 요청:

```text
클로드 대화 기록과 Notion 실험 기록을 바탕으로 가이드 문서에 추가할 내용이 있는지 검토하고,
홈/LNB/검색 UX까지 전체적으로 개선해줘.
```

**Codex 작업:**
- Figma 공식 리포트와 디자인팀 Notion 실험 기록을 기준으로 가이드에 반영할 항목 선별
- Figma Make처럼 실제 운영하지 않는 도구 기준 제거
- `ai-workflow-guide.html`
  - Figma MCP 연결 설정 추가
  - 첫 연결 테스트 체크리스트 추가
  - 방향 이탈 감지, QA 운영 구조, 도구/작업 선택 기준 정리
  - AI 모션 제작 워크플로 추가
  - v0.6~v0.10 버전 히스토리 갱신
- `figma-mcp-traps.html`
  - 작업 페이지 지정 누락
  - 로컬 폰트 접근 단정
  - Variables 읽기 실패 단정
  - 환경/연결 함정 섹션 추가
- `index.html`
  - 홈을 목적별 인덱스 페이지로 재구성
  - 처음 세팅, 도구 연결, 문서 구축, 상황별 빠른 참조, 실무 운영 레퍼런스 진입점 추가
- `sidebar.html`
  - LNB를 기본 이해, 연결/환경 설정, 문서 구축 가이드, 실무 운영, 제품 유형별 확장으로 재그룹핑
  - 문서 검색 입력창 추가
- `ai-workflow-guide.js`
  - GitHub Pages에서 동작하는 클라이언트 검색 추가
  - 홈, 전체 가이드, Figma MCP 함정, changelog를 섹션 단위로 검색
  - 검색 결과 이동 시 대상 섹션 하이라이트
- `ai-workflow-guide.css`
  - 검색 UI 스타일
  - 검색 결과 하이라이트 애니메이션

---

## 커밋 히스토리

| 날짜 | 커밋 | 설명 |
|---|---|---|
| 05/29 | `c49ef9e` | Add AI workflow drift and QA guidance |
| 05/29 | `f527cd9` | Refine AI workflow guidance wording |
| 05/29 | `70856dc` | Expand AI motion workflow guidance |
| 05/29 | `9ab8d6c` | Add Figma MCP setup guidance |
| 05/29 | `7f08961` | Remove Figma Make references |
| 05/29 | `ab8cd62` | Bump guide to v0.7 |
| 05/29 | `02f8d2b` | Clean up v0.7 guide organization |
| 05/29 | `9368272` | Fix sidebar navigation cache and active state |
| 05/29 | `b54ccc2` | Improve home index and sidebar information architecture |
| 05/29 | `9f685fd` | Add sidebar document search |
| 05/29 | `0c59b43` | Highlight search result targets |

---

## 검증

- 내부 앵커 링크 검사 통과
- JavaScript 문법 검사 통과
- 공개 GitHub Pages 반영 확인
- 홈/LNB 렌더링 스크린샷 확인
- 검색 UI, 검색 결과 하이라이트 반영 확인

---

## 공개 URL

- 가이드 홈: https://jumijeong-design.github.io/socra-ai-workflow-guide/
- Changelog: https://jumijeong-design.github.io/socra-ai-workflow-guide/changelog.html
