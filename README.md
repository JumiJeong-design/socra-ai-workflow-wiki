# Socra AI Workflow Guide

AI와 함께 Socra 제품을 설계하고 구현하면서 반복 가능한 협업 방식, 시행착오, 의사결정 흐름을 정제해서 쌓는 위키 채널입니다.

이 repo의 핵심 디자인 협업 원칙은 **Figma-first, Storybook-verified**입니다. Figma는 탐색과 시각 판단의 중심이고, Git spec은 승인된 디자인 계약서이며, Storybook은 구현된 디자인 시스템을 검증하는 표면입니다.

## What Belongs Here

- Figma의 탐색성을 보호하면서 Git/Storybook sync 경계를 정하는 운영 방식
- AI와 함께 디자인 리뷰, 컴포넌트 업데이트, 화면 설계를 진행하는 플레이북
- `jumi-worklog`의 날짜별 기록에서 검증된 패턴을 정제한 가이드
- Socra 제품 디자인 협업에서 다시 쓸 수 있는 사례와 체크리스트

## What Does Not Belong Here

- 하루 단위의 생생한 작업 로그: `jumi-worklog`에 기록
- 디자인 시스템 원본 스펙, 토큰, 컴포넌트 문서: `socra-ai-product-design`에 관리
- Figma 컴포넌트의 시각적 원본과 자유 실험: `Socra Design system test`에서 관리

## Channel Map

| Channel | Role |
| --- | --- |
| Figma `Socra Design system test` | 디자인 탐색, 시각 판단, approved component/screen의 visual source |
| `socra-ai-product-design` | 승인된 디자인 계약서, 토큰, 컴포넌트 스펙, sync 기록 |
| Code implementation | 실제 구현 source |
| Storybook | 구현된 디자인 시스템의 review surface |
| `jumi-worklog` | 날짜별 작업 로그와 AI 세션 기록 |
| `socra-ai-workflow-guide` | 반복 가능한 협업 지식 베이스 |

## Core Workflow

1. 작업 중 생긴 생각과 시행착오는 `jumi-worklog`에 날짜별로 남긴다.
2. Figma 작업은 먼저 `Exploration`, `Candidates`, `Components`, `Screens`, `Archive` 중 어디에 속하는지 판단한다.
3. `Exploration`과 `Candidates`는 자유롭게 실험하고, Git/Storybook sync 대상으로 보지 않는다.
4. approved `Components`와 approved `Screens`만 `socra-ai-product-design`의 Git spec으로 승격한다.
5. 구현된 컴포넌트는 Storybook에서 variant/state가 맞는지 검증한다.
6. 반복 가능한 방식은 이 repo의 `guides/`, `playbooks/`, `cases/`로 승격한다.

## First Stable Docs

- [Figma-First, Storybook-Verified](guides/figma-first-storybook-verified.md)
- [Figma Git Sync](guides/figma-git-sync.md)
- [AI Design Review](guides/ai-design-review.md)
- [Daily Worklog to Wiki](guides/daily-worklog-to-wiki.md)
- [Component Update Playbook](playbooks/component-update-playbook.md)
- [Screen Design Playbook](playbooks/screen-design-playbook.md)
