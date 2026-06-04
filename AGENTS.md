# AGENTS.md

이 파일은 Codex 등 에이전트가 이 폴더에서 시작할 때 자동으로 로드되는 진입점입니다.

이 레포는 `socra-ai-workflow-wiki` 정적 사이트 소스이며, AI 워크플로우·프로세스·시행착오를 정제해서 쌓아두는 **위키 채널**입니다.

## 세션 시작 시

1. `JumiJeong-design/jumi-worklog` 레포에서 최근 `logs/YYYY/MM/` 날짜 파일 1~2개를 읽어 맥락 파악
2. 오늘 날짜 worklog 파일이 없으면 세션 종료 시 생성
3. 이 레포 작업 내용은 jumi-worklog 날짜 파일에 합산 기록

## AI 도구별 진입점

| 도구 | 진입점 |
|------|--------|
| Claude Code | `CLAUDE.md` + SessionStart 훅 (`~/.claude/settings.json`) |
| Codex | 이 파일(`AGENTS.md`) |

## 버전 업데이트

`/bump-version` 스킬 실행 — 상세 절차는 `jumi-worklog/skills/bump-version/SKILL.md` 참고.

## jumi-worklog 연동

`jumi-worklog`는 날짜별 작업 로그, 세션 맥락, 반복 패턴 후보를 관리하는 운영 저장소입니다.

- 날짜별 작업 기록: `jumi-worklog/logs/YYYY/MM/YYYY-MM-DD.md`
- 세션 간 현재 상태: `jumi-worklog/CONTEXT.md`
- 공통 스킬: `jumi-worklog/skills/`

검증되고 정제된 guide/playbook/case만 이 repo의 `wiki/`로 승격합니다. 제품/컴포넌트/package 계약은 `riiid/prism`을 우선합니다.
