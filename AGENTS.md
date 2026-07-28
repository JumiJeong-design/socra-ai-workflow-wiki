# AGENTS.md

이 파일은 `AGENTS.md` 규약을 따르는 에이전트가 이 폴더에서 시작할 때 자동으로 로드되는 진입점입니다.

이 레포는 `socra-ai-workflow-wiki` 정적 사이트 소스이며, AI 워크플로우·프로세스·시행착오를 정제해서 쌓아두는 **위키 채널**입니다.

## 세션 시작 시

1. `JumiJeong-design/jumi-worklog` 레포에서 최근 `logs/YYYY/MM/` 날짜 파일 1~2개를 읽어 맥락 파악
2. 오늘 날짜 worklog 파일이 없으면 세션 종료 시 생성
3. 이 레포 작업 내용은 jumi-worklog 날짜 파일에 합산 기록

## AI 도구별 진입점

현재 운영 모드는 **Claude Code 단일 에이전트**입니다(Codex 병행 중단, 2026-07-13~).

| 도구 | 진입점 |
|------|--------|
| Claude Code | `CLAUDE.md` + SessionStart 훅 (`~/.claude/settings.json`) |
| Codex | 이 파일(`AGENTS.md`) — (휴면) 병행 중단, 재개 시 진입점 |

## 버전 업데이트

`jumi-worklog/skills/bump-version/SKILL.md` 절차를 따릅니다.
콘텐츠 4파일만 고치면 캐시 때문에 라이브에 반영되지 않습니다.

## 승격 규칙

검증되고 정제된 guide/playbook/case만 이 레포의 `wiki/`로 승격합니다.
제품·컴포넌트·package 계약은 `riiid/prism`을 우선합니다.
