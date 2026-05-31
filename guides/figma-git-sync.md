# Figma Git Sync

## Purpose

`Socra Design system test`, `socra-ai-product-design`, code implementation, and Storybook이 서로 다른 기준을 말하지 않도록 sync 경계를 정의한다.

이 문서는 Figma 전체를 Git으로 옮기기 위한 문서가 아니다. Figma의 탐색성은 보호하고, approved `Components`와 approved `Screens`만 Git spec과 Storybook 검증 대상으로 삼는다.

## Source of Truth

| Area | Primary Source | Verification / Mirror |
| --- | --- | --- |
| Design exploration | Figma Exploration / Candidates | Worklog notes when useful |
| Approved visual component shape | Figma Components | Git component spec |
| Approved design contract | Git spec | Storybook and code review |
| Implementation behavior | Code | Storybook |
| Implemented UI review | Storybook | Figma/Git comparison |
| Design decisions | Git ADR | Figma annotations when useful |

## Non-Negotiable Rule

AI must not invent visual values inside code, preview, or Storybook and call that sync.

- If Figma read/write access exists, synced component visual changes start in Figma first.
- Do not create a Git/Storybook-first component candidate for color, size, spacing, radius, typography, state styling, icon size, or variant naming when the Figma source can be edited.
- Every visual implementation value must come from a Figma node extraction, Figma variable, Git spec, sync log, or ADR.
- If a value is missing and Figma is editable, update Figma or ask for designer approval before changing Git/code.
- If Figma access is blocked, mark the work `blocked-by-figma-permission` or `prototype-only`; do not call it verified sync.
- Prototype-only experiments must be labeled as `exploration` or `prototype-only` and must not update approved specs or verified Storybook status.
- Preview/Storybook is a verification surface, not a replacement design surface.

## Storybook Boundary

Storybook does not need to visually copy the Figma design file as a page.

- Storybook chrome, docs page layout, panels, headings, examples, and explanatory surfaces may be designed for developer/designer readability.
- The rendered component internals must match Figma: tokens, dimensions, variants, states, typography, spacing, radius, shadows, icon sizing, and interaction state visuals.
- Storybook page-shell styling must not leak into component CSS or become component source-of-truth.

## Figma Zones

| Zone | Sync Rule |
| --- | --- |
| Exploration | Do not sync to Git/Storybook |
| Candidates | Capture context only; not an implementation contract |
| Components | Sync when approved |
| Screens | Sync only when marked approved |
| Archive | Do not sync unless referenced as rationale |

## Sync Rule

- Figma component name과 Git 문서 slug는 approved sync target에만 1:1로 맞춘다.
- Figma node id는 Git component spec의 `Figma Node` 섹션에 기록한다.
- Git spec은 approved design contract다.
- Storybook은 구현된 컴포넌트가 Git spec과 Figma approved state를 따르는지 확인하는 review surface다.
- Code Connect는 optional bridge이며, 권한이나 코드 경로가 없다고 sync 운영을 멈추지 않는다.

## Sync Flow

```text
Figma Exploration
-> Figma Candidates
-> Approved Component / Screen
-> Figma extraction audit
-> Git spec
-> Code implementation
-> Storybook review
-> Verified sync
```

If Figma is editable and a component visual contract changes, the flow must not start at Git spec or Storybook.

## AI Checklist

Before updating Git spec, code, preview, or Storybook, AI must answer:

- Is this Figma work exploration, candidate, approved component, approved screen, or archive?
- Is this a sync target?
- Do I have Figma read/write access? If yes, has the component source been updated or verified there first?
- Which Figma node/variable or Git decision is the source for every visual value?
- Am I changing the component internals, or only the Storybook/preview page shell?
- Does it need a Git spec update, or only worklog/context capture?
- Is there a Storybook story or should the story status remain `pending`?
- Is Code Connect relevant now, or optional later?

## Acceptance Criteria

- Every sync-target component links a Figma node or explains why none exists.
- Every approved component has a Git spec.
- Every implemented component has a Figma extraction audit or equivalent source mapping.
- Every implemented component has or plans a Storybook story.
- Exploration and candidate work are not forced into implementation contracts.
- PRs explain whether the change affects Figma, Git spec, code, Storybook, or only exploration context.
- No preview or Storybook visual value is introduced without a source.
- Storybook shell may differ from Figma, but synced component internals must match Figma.

## Source Worklog

- Pending first promoted worklog entry.
