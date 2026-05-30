# Figma Git Sync

## Purpose

`Socra Design system test`와 `socra-ai-product-design`가 서로 다른 기준을 말하지 않도록, Figma의 시각적 기준과 Git의 텍스트/버전 기준을 연결한다.

## Source of Truth

| Area | Primary Source | Mirror |
| --- | --- | --- |
| Visual component shape | Figma | Git component spec |
| Token names and values | Git token files | Figma variables |
| Variant/state inventory | Figma component set | Git component spec |
| Design decisions | Git ADR | Figma annotations when useful |

## Sync Rule

- Figma component name과 Git 문서 slug는 1:1로 맞춘다.
- Figma node id는 Git component spec의 `Figma Node` 섹션에 기록한다.
- Git에서 스펙이 바뀌면 Figma 반영 여부를 sync checklist로 확인한다.
- Figma에서 시각적 변경이 생기면 sync log에 먼저 기록한 뒤 Git 스펙과 토큰에 반영한다.

## First Components

| Figma Component | Git Spec | Status |
| --- | --- | --- |
| Button | `socra-ai-product-design/design-system/components/button.md` | Initial sync target |
| Chat Input Bar | `socra-ai-product-design/design-system/components/chat-input-bar.md` | Initial sync target |
| Message Bubble | `socra-ai-product-design/design-system/components/message-bubble.md` | Initial sync target |

## Semi-Automated Sync Loop

1. Designer updates Figma or Git spec.
2. AI reads changed side and drafts diff/checklist.
3. Designer approves visual/product judgment.
4. AI updates mirrored docs or checklist.
5. PR links Figma node, sync log entry, and affected component specs.

## Acceptance Criteria

- Every component PR links a Figma node or explains why none exists.
- Every component spec change includes a sync checklist update.
- Every Figma-originated change has a sync log entry before spec updates.

## Source Worklog

- Pending first promoted worklog entry.
