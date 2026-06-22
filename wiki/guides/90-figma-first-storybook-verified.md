# Figma / Storybook 역할 구분 — 시행착오 정리

## 목적

과거 Socra 디자인 시스템 작업에서 겪은 Figma, Git 스펙, 코드, Storybook의 역할 혼선과 시행착오를 정리한다. 이 문서는 현재 운영 원칙이 아니라 반복하지 않기 위한 기록이다.

이 문서는 현재 Prism 패키지 운영 모델을 대체하지 않는다. 현재 컴포넌트/토큰/패키지 계약과 Storybook 기준은 `riiid/prism`의 README, AGENTS, `docs/agent-rules.md`, `design-system/rules.md`, `packages/prism/*`, `apps/storybook/*` 문서를 우선한다.

## 교훈 요약

| 표면 | 역할 |
| --- | --- |
| Figma | 시각 근거, 탐색, 공유 표면 |
| `riiid/prism` | 현재 패키지/컴포넌트/토큰 계약 |
| 코드 | 구현 출처 |
| Storybook | 디자이너 QA 및 구현 검토 표면 |
| 워크로그 / Wiki | 맥락, 결정 이유, 재사용 가능한 운영 교훈 |

## Figma 영역 구분

Figma 전체를 sync 대상으로 보지 않는다는 교훈은 여전히 유효하다. 단, 현재 Prism의 실제 sync/status 판단은 `riiid/prism`의 최신 문서를 우선한다.

| 영역 | 의미 | Sync 규칙 |
| --- | --- | --- |
| 탐색(Exploration) | 자유 실험, 시각 방향 테스트, 버려질 수 있는 아이디어 | Git/Storybook에 sync 금지 |
| 후보(Candidates) | 제품 방향으로 가능성 있는 안 | 맥락 기록, 구현 계약으로 취급 금지 |
| 컴포넌트 | 승인된 디자인 시스템 컴포넌트 | sync 전 현재 `riiid/prism` 계약 확인 |
| 화면 | 승인된 제품 화면 기준 | 구현 전 현재 `riiid/prism` 계약 확인 |
| 아카이브 | 버린 안, 과거 실험, 비교용 히스토리 | 근거로 참조되는 경우만 sync |

## AI 작업 규칙

- Figma 실험을 모두 Git 문서로 변환하지 않는다.
- 스펙을 작성하기 전에 출처가 탐색인지, 후보인지, 승인된 컴포넌트인지, 승인된 화면인지 먼저 확인한다.
- 무언가를 현재 Prism 계약으로 취급하기 전에 `riiid/prism`을 먼저 확인한다.
- Storybook은 QA/검토 표면으로 취급하고, 임의의 시각 기준으로 삼지 않는다.
- Code Connect는 선택 사항이다. 이로 인해 워크플로가 막히면 안 된다.

## Sync 흐름

```text
워크로그 / Figma / 프로토타입 인사이트
-> riiid/prism 출처 확인
-> 필요 시 현재 계약 업데이트
-> 코드 구현
-> Storybook QA
-> 재사용 가능한 교훈을 이 wiki에 승격
```

## 충돌 시 판단 순서

Figma, `riiid/prism` 계약, 코드, Storybook이 서로 다른 기준을 말할 때:

1. `riiid/prism`의 현재 README/AGENTS를 먼저 확인한다.
2. 관련 토큰/컴포넌트/패키지 계약을 확인한다.
3. 이 wiki는 계약이 아니라 맥락으로 취급한다.
4. `riiid/prism` 문서가 요구할 때 Storybook에서 구현을 검증한다.
5. 재사용 가능한 교훈만 이 wiki에 승격한다.

## Source Worklog

- Historical wiki seed; original source worklog was not backfilled.
