# Storybook을 디자이너 검수 기준으로 쓰는 방향 메모

작성일: 2026-06-02 미팅 준비용

## 한 줄 요약

Storybook은 처음에는 디자이너가 구현 결과물을 검수하는 기준으로 쓰고, 장기적으로는 컴포넌트 상태, 다국어, 접근성, 데이터 변화, 화면 조합, 코드 프로토타입 탐색까지 함께 보는 디자인 시스템 작업 공간으로 확장한다.

## 내가 하려는 것

Figma에서 디자인 의도와 시각 기준을 잡고, Storybook에서 실제 코드 컴포넌트가 그 기준대로 구현됐는지 확인한다.

이렇게 하면 화면을 매번 처음부터 다 만들지 않아도, Button, Tooltip, Text Field 같은 공통 컴포넌트의 문제를 먼저 잡을 수 있다. 실제 화면 검수에서는 컴포넌트 자체 문제보다 정보 구조, UX 흐름, 화면 조합에 더 집중할 수 있다.

다만 모든 탐색을 Figma에서만 시작해야 하는 것은 아니다. 인터랙션, 데이터 상태, 입력, 로딩, 에러, 모바일 반응형처럼 실제 동작을 봐야 판단되는 화면은 HTML/React prototype, Storybook screen, local app 같은 실행 가능한 표면에서 먼저 탐색할 수 있다.

## 역할 구분

| 영역 | 역할 |
|---|---|
| Figma | 확정된 디자인 의도, 시각 기준, 컴포넌트 구조 정리 |
| Code Prototype | 인터랙션, 데이터 상태, 입력/로딩/에러 흐름 탐색 |
| Git / md spec | 구현 기준, 토큰, 규칙, ADR, 변경 이력 관리 |
| Storybook | 실제 구현된 컴포넌트, 패턴, 대표 화면의 상태/언어/접근성/반응형 검수 |
| 실제 제품 화면 | 최종 사용자 플로우, 라우팅, 실제 데이터 맥락 검수 |
| Worklog / Notes | 결정 이유, 함정, 다음 작업 맥락 기록 |

## Storybook을 쓰면 줄어드는 일

- 화면마다 같은 버튼, 툴팁, 입력창 문제를 반복해서 보는 일
- 긴 텍스트, 일본어, loading, disabled, empty 같은 케이스를 매번 화면에서 다시 찾는 일
- “Figma랑 뭔가 달라요”를 감으로 설명하는 일
- 프론트나 AI에게 같은 디자인 기준을 계속 다시 설명하는 일
- 화면 QA에서 컴포넌트 문제와 UX 흐름 문제를 한꺼번에 보는 일
- 인터랙션을 설명만으로 전달하다가 서로 다르게 이해하는 일

## Storybook을 쓰면 새로 생기는 일

- 디자이너가 Storybook을 보는 습관
- 컴포넌트별로 필요한 상태, 언어, 접근성 기준 정의
- Figma와 Storybook이 다를 때 source of truth 판단
- 프론트와 “이 story를 기준으로 맞추자”는 운영 대화
- screen story, pattern story를 어디까지 만들지 정하는 일
- code prototype에서 탐색한 내용을 Figma와 md spec에 다시 정리하는 일

## 결론

디자인 일이 무조건 줄어드는 것은 아니다.  
초반에는 일이 늘지만, 반복 검수와 기준 설명 비용은 줄어든다.

중요한 건 Storybook을 “해야 할 일이 하나 더 생기는 곳”으로 쓰지 않고, “반복되는 검수 기준을 저장하고 재사용하는 곳”으로 쓰는 것이다.

또 하나 중요한 것은 탐색 표면과 확정 기준을 분리하는 것이다. 코드로 먼저 탐색한 것이 곧 최종 기준이 되는 것은 아니다. 탐색 결과가 확정되면 시각 기준은 Figma에, 구현 기준은 Git/md spec에, 검수 기준은 Storybook에 다시 정리해야 한다.

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

### Phase 1.5. 코드 프로토타입 기반 탐색

인터랙션이나 데이터 상태가 중요한 화면은 Figma보다 코드 기반 프로토타입이 더 빠를 수 있다.

사용할 수 있는 표면:
- HTML/CSS/JS prototype
- React prototype
- Storybook screen story
- local app
- Figma Prototype
- Framer 같은 인터랙션 툴

적합한 경우:
- 채팅 화면
- 입력 경험
- 드래그, 전환, long press 같은 인터랙션
- loading, empty, error 상태
- 긴 텍스트와 모바일 반응형
- 실제 데이터 상태에 따라 UI가 바뀌는 화면

운영 기준:
- 빠른 판단을 위해 code prototype을 먼저 만들 수 있다.
- 결정된 시각 기준은 Figma에 정리한다.
- 구현 규칙과 컴포넌트 계약은 Git/md spec에 남긴다.
- 검수 기준은 Storybook story로 재사용 가능하게 만든다.

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

이 단계에서는 화면 전체를 만들기 전에 컴포넌트 조합이 깨지는지 확인할 수 있다. 또한 AI로 만든 코드 프로토타입을 대표 screen story로 정리하면, 화면 조합과 인터랙션을 더 빠르게 반복 검수할 수 있다.

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

## Prototype은 Figma Prototype만 뜻하나?

아니다.

여기서 prototype은 실제 사용감, 인터랙션, 데이터 상태, 반응형, 입력/로딩/에러 같은 동작을 확인할 수 있는 실행 가능한 표면 전체를 뜻한다.

포함되는 것:
- Figma Prototype
- HTML/CSS/JS prototype
- React prototype
- Storybook screen story
- local app의 임시 화면
- Framer 같은 인터랙션 툴

정리하면:

> 탐색은 가장 빠르고 정확한 도구에서 한다. 시각 기준은 Figma에 정리하고, 구현 기준은 Git에 남기고, 실제 동작은 Storybook, code prototype, local app, Figma Prototype 같은 실행 가능한 표면에서 검수한다.

## 제품 QA는 루프에 어떻게 들어가나?

지금은 디자인 시스템 구축 단계라 Storybook 기준을 먼저 만드는 것이 우선이다. 하지만 제품에 반영된 이후에는 실제 QA 결과가 다시 디자인 시스템 기준으로 돌아오는 루프가 필요하다.

운영 흐름:

```txt
Storybook에서 컴포넌트 / 패턴 / 대표 화면 검수
→ 실제 제품에 반영
→ App / Product QA에서 실제 데이터와 사용자 플로우 확인
→ Issue / Worklog / Notes에 문제와 재현 조건 기록
→ Figma, Git spec, Storybook story 중 필요한 기준 보강
```

예시:
- 실제 제품 QA에서 일본어 버튼 overflow 발견
- Button Locales story에 해당 케이스 추가
- Figma text rule 또는 component constraint 수정
- Git spec에 locale QA 기준 보강
- Worklog/Issue에 발견 경로와 결정 이유 기록

지금 당장 모든 QA 운영 채널을 확정할 필요는 없다. 다만 Storybook이 제품 QA와 끊긴 문서가 아니라, 제품에서 발견된 문제를 다시 story와 spec으로 승격하는 루프 안에 있어야 한다.

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

또 인터랙션이나 데이터 상태가 중요한 화면은 Figma에서만 탐색하지 않고, AI로 빠른 code prototype이나 Storybook screen을 먼저 만들어 사용감을 볼 수도 있을 것 같습니다. 다만 그 결과가 확정되면 Figma에는 시각 기준을, Git에는 구현 기준을, Storybook에는 검수 기준을 다시 남겨야 합니다.

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

### 6. Figma 또는 code prototype에서 탐색 중인 디자인은 언제 Storybook에 올릴까?

너무 빨리 올리면 구현 부담이 커지고, 너무 늦게 올리면 sync가 밀린다.

기준 예시:

> 컴포넌트 구조, token, state, 사용 기준이 어느 정도 확정된 뒤 Storybook에 반영한다.

### 7. Code prototype에서 결정된 내용을 어떻게 Figma와 Git으로 되돌릴까?

코드 프로토타입에서 사용감이 좋아도, 그 자체가 최종 기준은 아니다.

정해야 할 것:
- 어떤 수준이 되면 Figma에 정리할지
- prototype 코드를 버릴지 실제 구현으로 이어갈지
- md spec에는 어떤 결정만 남길지
- Storybook screen story로 남길 대표 상태는 무엇인지

### 8. 제품 QA 결과를 어디로 회수할까?

제품 반영 후 QA에서 발견된 문제는 다시 디자인 시스템 기준으로 돌아와야 한다.

정해야 할 것:
- QA 기록 채널을 GitHub Issue, Worklog, Notion, Linear/Jira 중 어디로 둘지
- 어떤 QA finding을 Storybook story로 승격할지
- Figma 수정인지 Git spec 수정인지 Storybook story 추가인지 구분하는 기준은 무엇인지

### 9. AI에게 Storybook을 기준으로 줄 때 어떤 문장으로 지시할까?

예시:

> Figma source를 먼저 확인하고, Storybook의 `Components/Button/Locales`와 `Matrix`가 깨지지 않게 반영해.

> 이 변경은 Storybook에서 Button Overview, Matrix, Locales를 기준으로 검수해.

## 지금의 결론

Storybook은 당장 디자이너 검수 기준으로 시작한다.  
그 다음에는 컴포넌트 운영 기준, 패턴 조합, 대표 화면 검수로 확장한다.  
장기적으로는 프론트와 함께 디자인 시스템의 실제 동작과 데이터 상태까지 다루는 작업 공간이 될 수 있다.

이 방향은 디자인 일을 단순히 늘리는 것이 아니라, 반복 검수와 기준 설명을 줄이고, 디자인 시스템 운영의 품질을 높이는 방식이다.

추가로, 탐색은 Figma에만 묶이지 않는다. 문제에 따라 code prototype이나 Storybook screen이 더 빠를 수 있다. 중요한 것은 탐색 결과를 확정 기준으로 승격할 때 Figma, Git, Storybook, Worklog/Notes에 각각 맞는 형태로 남기는 것이다.
