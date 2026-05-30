# Socra AI Workflow Guide

AI와 함께 Socra 제품을 설계하고 구현하면서 반복 가능한 협업 방식, 시행착오, 의사결정 흐름을 정제해서 쌓는 위키 채널입니다.

## What Belongs Here

- Figma와 Git을 함께 쓰는 디자인 시스템 운영 방식
- AI와 함께 디자인 리뷰, 컴포넌트 업데이트, 화면 설계를 진행하는 플레이북
- `jumi-worklog`의 날짜별 기록에서 검증된 패턴을 정제한 가이드
- Socra 제품 디자인 협업에서 다시 쓸 수 있는 사례와 체크리스트

## What Does Not Belong Here

- 하루 단위의 생생한 작업 로그: `jumi-worklog`에 기록
- 디자인 시스템 원본 스펙, 토큰, 컴포넌트 문서: `socra-ai-product-design`에 관리
- Figma 컴포넌트의 시각적 원본: `Socra Design system test`에서 관리

## Channel Map

| Channel | Role |
| --- | --- |
| Figma `Socra Design system test` | 시각적 source of truth |
| `socra-ai-product-design` | 제품 디자인, 토큰, 컴포넌트 스펙, sync 기록 |
| `jumi-worklog` | 날짜별 작업 로그와 AI 세션 기록 |
| `socra-ai-workflow-guide` | 반복 가능한 협업 지식 베이스 |

## Core Workflow

1. 작업 중 생긴 생각과 시행착오는 `jumi-worklog`에 날짜별로 남긴다.
2. 반복 가능하거나 다음 작업에 재사용할 가치가 생기면 이 repo의 `guides/`, `playbooks/`, `cases/`로 승격한다.
3. Figma와 Git의 sync 규칙은 `guides/figma-git-sync.md`를 기준으로 유지한다.
4. 컴포넌트나 화면 설계 방식은 플레이북으로 정제하고, 실제 사례는 `cases/`에 연결한다.

## First Stable Docs

- [Figma Git Sync](guides/figma-git-sync.md)
- [AI Design Review](guides/ai-design-review.md)
- [Daily Worklog to Wiki](guides/daily-worklog-to-wiki.md)
- [Component Update Playbook](playbooks/component-update-playbook.md)
- [Screen Design Playbook](playbooks/screen-design-playbook.md)
