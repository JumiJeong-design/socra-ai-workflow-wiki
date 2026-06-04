# Component Update Playbook

## When To Use

Figma component, product-design contract, code component, or Storybook story 중 하나가 바뀌어 어느 저장소가 판단을 소유하는지 정리해야 할 때 사용한다.

## First Decision

변경을 바로 sync하지 않는다. 먼저 Figma source의 상태를 판단한다.

| Status | Action |
| --- | --- |
| `exploration` | worklog/context만 남기고 product-design contract/code/Storybook은 바꾸지 않는다. |
| `candidate` | 비교와 논의용으로 기록하되 implementation contract로 보지 않는다. |
| `approved component` | `riiid/prism`의 최신 contract와 Storybook 기준을 확인한다. |
| `archived` | rationale로 필요한 경우만 링크한다. |

## Hard Stop

AI must stop before changing code, preview, or Storybook if it has not extracted or cited the visual source.

Required source evidence:

- Figma node id and extracted values, or
- Figma variables, or
- existing product-design contract, or
- sync log / ADR decision.

Do not guess colors, spacing, radius, typography, sizes, labels, or state styling. If the source is incomplete, add an open question and keep implementation status as `pending`.

## Steps

1. 변경이 Figma-origin, Git-spec-origin, code-origin, Storybook-origin 중 무엇인지 표시한다.
2. Figma source가 `exploration`, `candidate`, `approved`, `archived` 중 어디인지 확인한다.
3. approved component가 아니면 product-design contract로 승격하지 않는다.
4. approved component라면 affected component와 Figma node를 확인한다.
5. Figma node/variables에서 variant, state, token, typography, radius, spacing, size 값을 추출한다.
6. 현재 구현 계약 변경이 필요하면 `riiid/prism`의 최신 AGENTS/README, `docs/agent-rules.md`, `design-system/rules.md`, 관련 contract 문서를 먼저 확인한다.
7. 실제 component/token/package contract 수정은 `riiid/prism`에서 수행한다.
8. 이 wiki에는 반복 가능한 판단 기준, 실수 방지 규칙, handoff 요약만 남긴다.
9. 구현이 있다면 `riiid/prism`의 검증 기준에 따라 Storybook 또는 preview에서 확인한다.
10. PR/기록에는 Figma link, `riiid/prism` source-of-truth 문서, worklog/wiki lesson 중 무엇을 연결해야 하는지 구분한다.

## Done Criteria

- Figma source status가 명확하다.
- Exploration/Candidate 작업이 실수로 implementation contract가 되지 않았다.
- 현재 구현 계약의 source-of-truth가 `riiid/prism`인지 확인했다.
- product-design contract를 이 wiki에 중복 작성하지 않았다.
- 구현된 visual value 검증은 `riiid/prism`의 기준을 따른다.
- 이 wiki에는 재사용 가능한 판단 기준만 남았다.
- 디자이너 판단이 필요한 항목은 open question으로 남았다.

## Source Worklog

- Pending first promoted worklog entry.
