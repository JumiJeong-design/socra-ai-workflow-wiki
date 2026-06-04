# AGENTS.md

이 파일은 Codex 등 에이전트가 이 폴더에서 시작할 때 자동으로 로드되는 진입점입니다.

이 레포는 `socra-ai-workflow-guide` 정적 사이트 소스이며, AI 워크플로우·프로세스·시행착오를 정제해서 쌓아두는 **위키 채널**입니다.

## 세션 시작 시

1. `JumiJeong-design/jumi-worklog` 레포에서 최근 날짜 파일 1~2개를 읽어 맥락 파악
2. 오늘 날짜 worklog 파일이 없으면 세션 종료 시 생성
3. 이 레포 작업 내용은 jumi-worklog 날짜 파일에 합산 기록

## AI 도구별 진입점

| 도구 | 진입점 |
|------|--------|
| Claude Code | `CLAUDE.md` + SessionStart 훅 (`~/.claude/settings.json`) |
| Codex | 이 파일(`AGENTS.md`) |

## 버전 업데이트 시 체크리스트

버전을 올릴 때 아래 4개 파일을 모두 수정한다:

1. `site/sidebar.html` — 버전 텍스트 (`v0.X`)
2. `site/ai-workflow-guide.html` — 상단 버전 배지 + 인라인 changelog 항목
3. `site/changelog.html` — 버전 섹션 신규 추가
4. 필요 시 `site/index.html` — 신규 카드 추가

## jumi-worklog 연동

`jumi-worklog`는 날짜별 작업 로그, 작업별 plan, 반복 패턴 후보를 관리하는 운영 저장소입니다.

- 날짜별 작업 기록: `jumi-worklog/YYYY-MM-DD.md`
- 진행 중 작업 계획: `jumi-worklog/plans/YYYY-MM-DD-topic-plan.md`
- 승격 전 반복 패턴 후보: `jumi-worklog/patterns/`

검증되고 정제된 guide/playbook/case만 이 repo의 `wiki/`로 승격합니다. `jumi-worklog/patterns/`는 최종 가이드가 아니라 승격 전 후보 저장소입니다.
