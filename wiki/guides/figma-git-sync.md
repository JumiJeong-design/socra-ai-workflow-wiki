# Figma / Git Sync Boundary

## Purpose

Figma, `riiid/prism`, code implementation, Storybook이 서로 다른 기준을 말하지 않도록 역할 경계를 정리한다.

이 문서는 현재 Prism의 실제 계약 문서가 아니다. Prism의 component/token/package/source-of-truth 판단은 `riiid/prism`의 README, AGENTS, `docs/agent-rules.md`, `design-system/rules.md`, `packages/prism/*`, `apps/storybook/*` 문서를 우선한다.

## Source of Truth

| Area | Current Source | This Wiki Role |
| --- | --- | --- |
| Daily work context | `jumi-worklog` | Promote reusable lessons only |
| Prism component/token/package contract | `riiid/prism` | Link and explain boundaries |
| Design exploration / visual evidence | Figma / product-design evidence docs | Preserve lessons, not contracts |
| Implementation behavior | Code / package contract | Do not duplicate specs |
| Implemented UI review | Storybook in `riiid/prism` | Explain QA pattern only |

## Non-Negotiable Rule

AI must not invent visual values inside code, preview, or Storybook and call that sync.

- Before applying this guide, check `riiid/prism`'s current operating model.
- If product-design docs define a package or component contract, do not restate it here.
- If this wiki and product-design docs disagree, product-design docs win for implementation.
- This wiki may record why a boundary exists and how to avoid repeating a mistake.

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

- This wiki does not own component specs, token contracts, package API, or release rules.
- `riiid/prism` owns current implementation contracts.
- This wiki owns cross-session patterns: what to check first, what not to duplicate, and when to promote a worklog lesson.
- Code Connect is optional; do not block workflow on it.

## Sync Flow

```text
Worklog / Figma / Prototype signal
-> Check `riiid/prism` source of truth
-> Update product-design contract if needed
-> Implement / verify in code and Storybook
-> Record reusable lesson in workflow wiki
```

If a component visual contract changes, the flow must start from the current `riiid/prism` source-of-truth documents, not from this wiki.

## AI Checklist

Before updating product-design contract docs, code, preview, or Storybook, AI must answer:

- Which repo owns this decision: `jumi-worklog`, `riiid/prism`, or this workflow wiki?
- Is this a current Prism contract or only a reusable operating lesson?
- Have I checked product-design README/AGENTS and relevant contract docs?
- Am I duplicating component/token/package details that should live in product-design?
- Does this belong in worklog first and wiki only after repetition?

## Acceptance Criteria

- Current implementation rules link to `riiid/prism` source-of-truth docs instead of duplicating them.
- Workflow wiki docs explain reusable boundaries and lessons.
- Worklog entries remain source records; wiki docs contain only promoted patterns.
- No component/token/package contract is treated as current unless product-design confirms it.

## Source Worklog

- Pending first promoted worklog entry.
