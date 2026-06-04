# Historical Lesson: Figma / Storybook Role Lessons

## Purpose

과거 Socra 디자인 시스템 작업에서 정리한 Figma, Git spec, Code, Storybook의 역할 분리 교훈을 남긴다. 이 문서는 현재 운영 원칙이 아니라 historical lesson이다.

이 문서는 현재 Prism package 운영 모델을 대체하지 않는다. 현재 컴포넌트/토큰/package 계약과 Storybook 기준은 `riiid/prism`의 README, AGENTS, `docs/agent-rules.md`, `design-system/rules.md`, `packages/prism/*`, `apps/storybook/*` 문서를 우선한다.

## Lesson

| Surface | Role |
| --- | --- |
| Figma | Visual evidence, exploration, sharing surface |
| `riiid/prism` | Current package/component/token contract |
| Code | Implementation source |
| Storybook | Designer QA and implementation review surface |
| Worklog / Wiki | Context, decisions, reusable operating lessons |

## Figma Zones

Figma 전체를 sync 대상으로 보지 않는다는 교훈은 여전히 유효하다. 단, 현재 Prism의 실제 sync/status 판단은 `riiid/prism`의 최신 문서를 우선한다.

| Zone | Meaning | Sync Rule |
| --- | --- | --- |
| Exploration | 자유 실험, 시각 방향 테스트, 버려질 수 있는 아이디어 | Do not sync to Git/Storybook |
| Candidates | 제품 방향으로 가능성 있는 안 | Record context, but do not treat as implementation contract |
| Components | 승인된 디자인 시스템 컴포넌트 | Check current product-design contract before sync |
| Screens | 승인된 제품 화면 기준 | Check current product-design contract before implementation |
| Archive | 버린 안, 과거 실험, 비교용 히스토리 | Do not sync unless referenced as rationale |

## AI Rules

- Do not convert every Figma experiment into Git documentation.
- Before writing a spec, identify whether the source is exploration, candidate, approved component, or approved screen.
- Check `riiid/prism` before treating anything as a current Prism contract.
- Treat Storybook as QA/review surface, not as arbitrary visual source of truth.
- Treat Code Connect as optional; do not block workflow on it.

## Sync Flow

```text
Worklog / Figma / Prototype insight
-> Check `riiid/prism` source of truth
-> Update current contract when needed
-> Code implementation
-> Storybook QA
-> Promote reusable lesson back to this wiki
```

## Decision Rule

If Figma, product-design contract, Code, and Storybook disagree:

1. Check the current `riiid/prism` README/AGENTS first.
2. Check relevant token/component/package contracts.
3. Treat this wiki as context, not contract.
4. Verify implementation in Storybook when product-design docs require it.
5. Promote only the reusable lesson back to this wiki.

## Source Worklog

- Pending first promoted worklog entry.
