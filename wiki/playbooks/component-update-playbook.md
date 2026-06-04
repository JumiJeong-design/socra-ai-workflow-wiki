# 컴포넌트 업데이트 플레이북

## 언제 사용하나

Figma 컴포넌트, product-design 계약, 코드 컴포넌트, Storybook 스토리 중 하나가 바뀌어 어느 저장소가 판단을 소유하는지 정리해야 할 때 사용한다.

## 첫 번째 판단

변경을 바로 sync하지 않는다. 먼저 Figma 출처의 상태를 확인한다.

| 상태 | 처리 방법 |
| --- | --- |
| `탐색(exploration)` | 워크로그/맥락만 남기고 product-design 계약/코드/Storybook은 바꾸지 않는다. |
| `후보(candidate)` | 비교·논의용으로 기록하되 구현 계약으로 취급하지 않는다. |
| `승인된 컴포넌트(approved component)` | `riiid/prism`의 최신 계약과 Storybook 기준을 먼저 확인한다. |
| `아카이브(archived)` | 근거로 필요한 경우에만 링크한다. |

## 중단 조건

코드, 프리뷰, Storybook을 수정하기 전에 시각 출처를 추출하거나 인용하지 않았다면 AI는 작업을 멈춰야 한다.

필요한 출처 근거:

- Figma node id와 추출된 값, 또는
- Figma variables, 또는
- 기존 product-design 계약, 또는
- sync 로그 / ADR 결정.

색상, spacing, radius, 타이포그래피, 크기, 레이블, 상태 스타일을 추측하지 않는다. 출처가 불완전하면 미결 질문을 추가하고 구현 상태를 `대기(pending)`로 유지한다.

## 진행 단계

1. 변경이 Figma 기원인지, Git 스펙 기원인지, 코드 기원인지, Storybook 기원인지 표시한다.
2. Figma 출처가 탐색/후보/승인/아카이브 중 어디인지 확인한다.
3. 승인된 컴포넌트가 아니면 product-design 계약으로 승격하지 않는다.
4. 승인된 컴포넌트라면 영향받는 컴포넌트와 Figma node를 확인한다.
5. Figma node/variables에서 variant, state, token, typography, radius, spacing, 크기 값을 추출한다.
6. 현재 구현 계약 변경이 필요하면 `riiid/prism`의 최신 AGENTS/README, `docs/agent-rules.md`, `design-system/rules.md`, 관련 계약 문서를 먼저 확인한다.
7. 실제 컴포넌트/토큰/패키지 계약 수정은 `riiid/prism`에서 수행한다.
8. 이 wiki에는 반복 가능한 판단 기준, 실수 방지 규칙, 핸드오프 요약만 남긴다.
9. 구현이 있다면 `riiid/prism`의 검증 기준에 따라 Storybook 또는 프리뷰에서 확인한다.
10. PR/기록에는 Figma 링크, `riiid/prism` 출처 문서, 워크로그/wiki 교훈 중 무엇을 연결할지 구분한다.

## 완료 기준

- Figma 출처 상태가 명확하다.
- 탐색/후보 작업이 실수로 구현 계약이 되지 않았다.
- 현재 구현 계약의 출처가 `riiid/prism`인지 확인했다.
- product-design 계약을 이 wiki에 중복 작성하지 않았다.
- 구현된 시각 값 검증은 `riiid/prism`의 기준을 따른다.
- 이 wiki에는 재사용 가능한 판단 기준만 남았다.
- 디자이너 판단이 필요한 항목은 미결 질문으로 남았다.
