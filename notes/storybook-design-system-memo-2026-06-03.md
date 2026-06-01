# Storybook을 디자이너 검수 기준으로 쓰는 방향 메모

작성일: 2026-06-03 미팅 준비용

## 한 줄 요약

Storybook은 처음에는 디자이너가 구현 결과물을 검수하는 기준으로 쓰고, 장기적으로는 컴포넌트 상태, 다국어, 접근성, 데이터 변화, 화면 조합까지 함께 보는 디자인 시스템 작업 공간으로 확장한다.

## 내가 하려는 것

Figma에서 디자인 의도와 시각 기준을 잡고, Storybook에서 실제 코드 컴포넌트가 그 기준대로 구현됐는지 확인한다.

이렇게 하면 화면을 매번 처음부터 다 만들지 않아도, Button, Tooltip, Text Field 같은 공통 컴포넌트의 문제를 먼저 잡을 수 있다. 실제 화면 검수에서는 컴포넌트 자체 문제보다 정보 구조, UX 흐름, 화면 조합에 더 집중할 수 있다.

## 역할 구분

| 영역 | 역할 |
|---|---|
| Figma | 디자인 의도, 시각 기준, 컴포넌트 구조, 탐색 |
| Storybook | 실제 구현된 컴포넌트의 상태, 언어, 접근성, 반응형 검수 |
| 실제 제품 화면 | 컴포넌트 조합, UX 흐름, 정보 구조, 실제 사용 맥락 검수 |

## Storybook을 쓰면 줄어드는 일

- 화면마다 같은 버튼, 툴팁, 입력창 문제를 반복해서 보는 일
- 긴 텍스트, 일본어, loading, disabled, empty 같은 케이스를 매번 화면에서 다시 찾는 일
- “Figma랑 뭔가 달라요”를 감으로 설명하는 일
- 프론트나 AI에게 같은 디자인 기준을 계속 다시 설명하는 일
- 화면 QA에서 컴포넌트 문제와 UX 흐름 문제를 한꺼번에 보는 일

## Storybook을 쓰면 새로 생기는 일

- 디자이너가 Storybook을 보는 습관
- 컴포넌트별로 필요한 상태, 언어, 접근성 기준 정의
- Figma와 Storybook이 다를 때 source of truth 판단
- 프론트와 “이 story를 기준으로 맞추자”는 운영 대화
- screen story, pattern story를 어디까지 만들지 정하는 일

## 결론

디자인 일이 무조건 줄어드는 것은 아니다.  
초반에는 일이 늘지만, 반복 검수와 기준 설명 비용은 줄어든다.

중요한 건 Storybook을 “해야 할 일이 하나 더 생기는 곳”으로 쓰지 않고, “반복되는 검수 기준을 저장하고 재사용하는 곳”으로 쓰는 것이다.

## 단계적 운영 방향

### Phase 1. 구현 결과물 검수

우선은 Storybook을 디자이너가 구현 결과물을 확인하는 기준으로 쓴다.

- Figma와 Storybook이 맞는지 확인
- size, variant, state, locale, accessibility 문제 확인
- “이 story에서 기준과 다르다”라고 말할 수 있게 만들기

예시:
- Button Overview
- Button Matrix
- Button Locales
- Tooltip Playground
- Tooltip Positions
- Tooltip Locales

### Phase 2. 컴포넌트 운영 기준

컴포넌트마다 어떤 story가 필요한지 기준을 정한다.

- 모든 컴포넌트에 Matrix가 필요한 것은 아니다.
- 텍스트 길이 리스크가 큰 컴포넌트는 Locales가 필요하다.
- 접근성 리스크가 큰 컴포넌트는 States나 Tooltip pairing 검수가 필요하다.

예시 기준:

| 컴포넌트 성격 | 필요한 Story |
|---|---|
| 상태가 많은 컴포넌트 | States, Matrix |
| 텍스트 길이 영향을 받는 컴포넌트 | Locales |
| 접근성 이름이 중요한 컴포넌트 | A11y, Tooltip Pairing |
| 실제 조합이 중요한 컴포넌트 | Pattern, Screen |

### Phase 3. 패턴 / 화면 조합 검수

Storybook에 컴포넌트만 두지 않고, 조합 단위도 둔다.

- Chat Input Bar
- Message Row
- Empty State
- Toolbar
- Model Selector
- Login Form

이 단계에서는 화면 전체를 만들기 전에 컴포넌트 조합이 깨지는지 확인할 수 있다.

### Phase 4. 디자인 시스템 작업 공간

장기적으로는 Storybook을 디자인 시스템 작업 공간처럼 쓸 수 있다.

- 데이터 상태에 따라 컴포넌트가 어떻게 변하는지 확인
- interaction, motion, loading, empty, error 상태 확인
- responsive behavior 검수
- 프론트와 props/state/API 구조 논의
- AI에게 Storybook story를 기준으로 작업 지시

이 단계부터는 프론트 개발 지식이 일부 들어온다. 다만 디자이너가 프론트 역할을 전부 가져가는 것이 아니라, 디자인 시스템 품질과 구현 기준을 함께 운영하는 쪽에 가깝다.

## Storybook에 화면 단위도 들어갈 수 있나?

들어갈 수 있다.

Storybook은 컴포넌트만 올리는 도구가 아니라 다음 레벨로 운영할 수 있다.

| 레벨 | 예시 |
|---|---|
| Foundation | color, typography, spacing, radius |
| Components | Button, Tooltip, Text Field, Badge |
| Patterns / Sections | Chat Input, Message Row, Empty State, Toolbar |
| Screens / Pages | Chat Home, Chat Thread, Login, Settings |

단, 모든 화면을 다 Storybook에 올리면 일이 커진다.  
대표 화면과 대표 상태부터 두는 것이 좋다.

예시:
- default
- empty
- loading
- error
- long text
- mobile
- Japanese long text

## 내가 프론트 운영을 보조할 수 있는 지점

Storybook을 보면 디자이너가 프론트 코드 전체를 직접 운영하지 않아도, 구현된 디자인 시스템의 품질을 확인하고 기준을 제안할 수 있다.

가능한 역할:

- 구현된 컴포넌트가 Figma와 어긋나는지 발견
- 다국어, 긴 텍스트, 상태값, 모바일에서 깨지는 케이스 확인
- 화면 만들기 전 컴포넌트 조합 리스크 확인
- 프론트와 대화할 때 구체적인 story 기준으로 피드백
- AI에게 “이 Storybook story 기준으로 맞춰”라고 지시

정리하면:

> 디자이너가 Figma만 관리하는 것이 아니라, Storybook을 통해 구현된 디자인 시스템의 품질 기준과 화면 조합 기준까지 함께 검수하는 운영자 역할.

## 미팅에서 말할 수 있는 문장

처음부터 Storybook을 디자이너가 모두 운영하는 공간으로 가져가려는 것은 아니고, 우선은 구현된 컴포넌트가 Figma와 맞는지 검수하는 기준으로 써보려고 합니다.

다만 장기적으로는 상태, 다국어, 접근성, 데이터 변화, 화면 조합까지 확인하는 디자인 시스템 작업 공간으로 확장할 수 있을 것 같습니다.

이렇게 하면 매번 실제 화면을 다 만들기 전에 Button, Tooltip, Text Field 같은 컴포넌트의 품질 문제를 먼저 잡을 수 있고, 실제 화면에서는 조합과 UX 흐름에 더 집중할 수 있습니다.

## 내게 남은 질문

### 1. Storybook을 누가 최종 승인할까?

Figma와 Storybook이 다르면 디자이너가 불일치로 판단하고 수정 요청하는 구조인가?  
아니면 프론트 구현 제약에 따라 Figma 기준 자체를 조정할 수도 있는가?

### 2. Screen story는 몇 개까지 만들까?

모든 화면을 Storybook에 올리면 일이 커진다.  
대표 화면만 둘지, 핵심 플로우 전체를 둘지 정해야 한다.

### 3. 디자이너가 직접 보는 범위는 어디까지인가?

가능한 범위:

- Components까지만
- Components + Patterns
- Components + Patterns + 대표 Screens

현재 방향은 Components + Patterns + 대표 Screens가 적절해 보인다.

### 4. 다국어 검수는 필수 기준인가?

글로벌 앱이라면 Button, Tooltip, Text Field, Chat Input처럼 텍스트가 들어가는 컴포넌트는 영어/한국어/일본어 story가 기본으로 있는 편이 좋다.

### 5. 모바일 first viewport 기준을 정할까?

기본 검수 viewport를 정하면 “대충 줄여보기”가 아니라 기준이 생긴다.

예시:
- mobile 390
- tablet
- desktop

### 6. Figma에서 탐색 중인 디자인은 언제 Storybook에 올릴까?

너무 빨리 올리면 구현 부담이 커지고, 너무 늦게 올리면 sync가 밀린다.

기준 예시:

> 컴포넌트 구조, token, state, 사용 기준이 어느 정도 확정된 뒤 Storybook에 반영한다.

### 7. AI에게 Storybook을 기준으로 줄 때 어떤 문장으로 지시할까?

예시:

> Figma source를 먼저 확인하고, Storybook의 `Components/Button/Locales`와 `Matrix`가 깨지지 않게 반영해.

> 이 변경은 Storybook에서 Button Overview, Matrix, Locales를 기준으로 검수해.

## 지금의 결론

Storybook은 당장 디자이너 검수 기준으로 시작한다.  
그 다음에는 컴포넌트 운영 기준, 패턴 조합, 대표 화면 검수로 확장한다.  
장기적으로는 프론트와 함께 디자인 시스템의 실제 동작과 데이터 상태까지 다루는 작업 공간이 될 수 있다.

이 방향은 디자인 일을 단순히 늘리는 것이 아니라, 반복 검수와 기준 설명을 줄이고, 디자인 시스템 운영의 품질을 높이는 방식이다.
