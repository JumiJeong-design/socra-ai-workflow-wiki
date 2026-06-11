# Socra AI Workflow Wiki

**🌐 공개 사이트 → https://jumijeong-design.github.io/socra-ai-workflow-wiki/**

AI와 함께 Socra 제품을 설계하고 구현하면서 반복 가능한 협업 방식, 시행착오, 의사결정 흐름을 정제해서 쌓는 위키 채널입니다.

이 repo는 제품·디자인 시스템 작업에서 반복해서 쓸 수 있는 **운영 패턴과 판단 기준**을 정제합니다. 현재 Prism의 실제 컴포넌트/토큰/package 계약과 배포 기준은 `riiid/prism`이 source of truth입니다.

## What Belongs Here

- Figma, Git, Storybook, Worklog의 역할을 헷갈리지 않게 나누는 운영 방식
- AI와 함께 디자인 리뷰, 컴포넌트 업데이트, 화면 설계를 진행하는 플레이북
- `jumi-worklog`의 날짜별 기록에서 검증된 패턴을 정제한 가이드
- Socra 제품 디자인 협업에서 다시 쓸 수 있는 사례와 체크리스트

## What Does Not Belong Here

- 하루 단위의 생생한 작업 로그: `jumi-worklog`에 기록
- 디자인 시스템 원본 스펙, 토큰, 컴포넌트 문서: `riiid/prism`에 관리
- Figma 컴포넌트의 시각적 원본과 자유 실험: `Socra Design system test`에서 관리

## Channel Map

| Channel | Role |
| --- | --- |
| Figma `Socra Design system test` | 디자인 탐색, 시각 판단, visual evidence |
| `riiid/prism` | Prism package, component/token contracts, Storybook, release workflow |
| Code implementation | 실제 구현 source |
| Storybook | 디자이너 QA와 구현 검수 표면 |
| `jumi-worklog` | 날짜별 작업 로그와 AI 세션 기록 |
| `socra-ai-workflow-wiki` | 반복 가능한 협업 지식 베이스 |

## Core Workflow

1. 작업 중 생긴 생각과 시행착오는 `jumi-worklog`에 날짜별로 남긴다.
2. 구체적인 컴포넌트/토큰/package 판단은 먼저 `riiid/prism`의 README, AGENTS, contract 문서, `docs/agent-rules.md`, `design-system/rules.md`를 확인한다.
3. 작업 중 반복되는 판단 기준과 실수 방지 패턴만 이 repo의 `wiki/guides/`, `wiki/playbooks/`, `wiki/cases/`로 승격한다.
4. 하루 단위 맥락과 진행도는 `jumi-worklog`에 남기고, 이 repo에는 재사용 가능한 결론만 남긴다.
5. 과거 Figma-first 모델에서 얻은 교훈은 참고하되, 현재 Prism 운영 모델을 대체하지 않는다.

## Folder Map

| Path | Role |
| --- | --- |
| `wiki/` | 사람이 읽는 위키 문서 |
| `site/` | GitHub Pages용 정적 사이트 소스 |
| `artifacts/` | Storybook 등 배포/검수 산출물 |
| `scripts/` | 문서 검증 스크립트 |
| `AGENTS.md`, `CLAUDE.md` | AI 에이전트 진입점 |

## Read These First

1. [Historical Lesson: Figma / Storybook Role Lessons](wiki/guides/90-figma-first-storybook-verified.md)
2. [Figma / Git Sync Boundary](wiki/guides/30-figma-git-sync.md)
3. [Component Update Playbook](wiki/playbooks/31-component-update-playbook.md)
4. [Screen Design Playbook](wiki/playbooks/32-screen-design-playbook.md)
5. [에이전트 핸드오프 플레이북](wiki/playbooks/30-agent-handoff-playbook.md)
6. [AI Design Review](wiki/guides/40-ai-design-review.md)
7. [Daily Worklog to Wiki](wiki/guides/31-daily-worklog-to-wiki.md)

## Reference Docs

- [Designer Dev Terms](wiki/guides/80-designer-dev-terms.md)
- [Storybook Design System Memo](wiki/notes/storybook-design-system-memo-2026-06-02.md)
- [Weekly Design Meeting Agenda](wiki/notes/weekly-design-meeting-2026-06-02.md)

- [Cases Index](wiki/cases/README.md)

## Source Of Truth

- `jumi-worklog`: 날짜별 원본 기록, 진행 중 plan, 반복 패턴 후보
- `riiid/prism`: Prism의 실제 package/component/token/Storybook 계약
- `socra-ai-workflow-wiki`: 위 두 저장소에서 반복 가능하다고 확인된 운영 지식
