# Figma / Git Sync 경계

## 목적

Figma, `riiid/prism`, 코드 구현, Storybook이 서로 다른 기준을 말하지 않도록 역할 경계를 정리한다.

이 문서는 현재 Prism의 실제 계약 문서가 아니다. Prism의 component/token/package/source-of-truth 판단은 `riiid/prism`의 README, AGENTS, `docs/agent-rules.md`, `design-system/rules.md`, `packages/prism/*`, `apps/storybook/*` 문서를 우선한다.

## 출처 기준 (Source of Truth)

| 영역 | 현재 출처 | 이 Wiki의 역할 |
| --- | --- | --- |
| 일상 작업 기록 | `jumi-worklog` | 반복 가능한 교훈만 승격 |
| Prism 컴포넌트/토큰/패키지 계약 | `riiid/prism` | 경계 설명 및 링크 |
| 디자인 탐색 / 시각 근거 | Figma / product-design 근거 문서 | 교훈 보존 (계약 아님) |
| 구현 동작 기준 | 코드 / 패키지 계약 | 스펙 중복 금지 |
| 구현 UI 검토 | `riiid/prism`의 Storybook | QA 패턴 설명만 |

## 절대 원칙

코드, 프리뷰, Storybook에서 시각 값을 AI가 임의로 만들어 sync라고 부르면 안 된다.

- 이 가이드를 적용하기 전에 `riiid/prism`의 현재 운영 모델을 확인한다.
- product-design 문서가 패키지/컴포넌트 계약을 정의한다면 여기서 반복하지 않는다.
- 이 wiki와 product-design 문서가 충돌하면 구현 기준은 product-design 문서가 우선한다.
- 이 wiki에는 경계가 생긴 이유와 실수를 반복하지 않는 방법만 기록한다.

## Storybook 경계

Storybook이 Figma 디자인 파일을 페이지 단위로 시각적으로 복사할 필요는 없다.

- Storybook의 docs 페이지 레이아웃, 패널, 제목, 설명 영역은 개발자/디자이너 가독성을 위해 자유롭게 설계해도 된다.
- 렌더링된 컴포넌트 내부는 Figma와 일치해야 한다: 토큰, 치수, variant, 상태, 타이포그래피, spacing, radius, shadow, 아이콘 크기, 인터랙션 상태 시각.
- Storybook 페이지 shell 스타일이 컴포넌트 CSS로 유입되거나 컴포넌트 기준이 되어선 안 된다.

## Figma 영역 구분

| 영역 | Sync 규칙 |
| --- | --- |
| 탐색(Exploration) | Git/Storybook에 sync 금지 |
| 후보(Candidates) | 맥락만 기록, 구현 계약 아님 |
| 컴포넌트 | 승인 후 sync |
| 화면 | 승인 표시 후에만 sync |
| 아카이브 | 근거로 참조되는 경우만 sync |

## Sync 원칙

- 이 wiki는 컴포넌트 스펙, 토큰 계약, 패키지 API, 릴리즈 규칙을 소유하지 않는다.
- `riiid/prism`이 현재 구현 계약을 소유한다.
- 이 wiki는 세션 간 반복 패턴(무엇을 먼저 확인할지, 무엇을 중복하면 안 되는지, 언제 워크로그 교훈을 승격할지)을 소유한다.
- Code Connect는 선택 사항이다. 이로 인해 워크플로가 막히면 안 된다.

## Sync 흐름

```text
워크로그 / Figma / 프로토타입 신호
-> riiid/prism 출처 확인
-> 필요 시 product-design 계약 업데이트
-> 코드 구현 / Storybook 검증
-> 재사용 가능한 교훈을 이 wiki에 기록
```

컴포넌트 시각 계약이 변경될 경우, 흐름은 이 wiki가 아니라 `riiid/prism`의 최신 문서에서 시작해야 한다.

## AI 체크리스트

product-design 계약 문서, 코드, 프리뷰, Storybook을 수정하기 전 AI는 다음을 확인해야 한다.

- 이 결정을 소유하는 저장소는 `jumi-worklog`, `riiid/prism`, 이 wiki 중 어디인가?
- 이것은 현재 Prism 계약인가, 아니면 재사용 가능한 운영 교훈인가?
- product-design README/AGENTS와 관련 계약 문서를 확인했는가?
- product-design에 있어야 할 컴포넌트/토큰/패키지 내용을 중복하고 있지 않은가?
- 이 내용은 먼저 워크로그에 기록하고, 반복된 이후에 wiki로 승격해야 하는가?

## 검수 기준

- 현재 구현 규칙은 직접 기술하지 않고 `riiid/prism` 출처 문서를 링크한다.
- 이 wiki 문서는 재사용 가능한 경계와 교훈을 설명한다.
- 워크로그 항목은 원본 기록으로 남기고, wiki 문서에는 승격된 패턴만 담는다.
- product-design이 확인하지 않은 컴포넌트/토큰/패키지 계약을 현행 기준으로 취급하지 않는다.

## Source Worklog

- Historical wiki seed; original source worklog was not backfilled.
