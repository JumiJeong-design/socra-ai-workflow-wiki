# 2026-06-03 주간 디자인 미팅 아젠다 초안

## 목적

지난 일주일 동안 진행한 Prism 디자인 시스템 개발 내용을 디자이너 관점에서 공유하고, 다음 주에 이어서 결정해야 할 항목을 정리한다.

## 한 줄 요약

이번 주에는 Prism 디자인 시스템의 운영 흐름을 정리했다. Figma, code prototype, Git, Storybook, Worklog/Notes가 각각 어떤 역할을 맡는지 나누고, Button, Tooltip, Typography를 기준으로 실제 검수 루프를 만들었다.

## 이번 주에 디벨롭한 핵심 내용

### 1. 탐색 도구와 Source of Truth 역할 분리

- 디자인 탐색은 Figma에서만 시작해야 하는 것이 아니라, 문제 성격에 따라 code prototype, Storybook screen, local app 같은 실행 가능한 표면에서도 시작할 수 있다고 정리했다.
- 시각 기준은 Figma, 구현 기준은 Git, 구현 검수는 Storybook, 결정 맥락은 Worklog/Notes에 남기는 구조로 역할을 나눴다.
- Storybook은 예쁜 문서 페이지가 아니라, 확정된 컴포넌트·패턴·대표 화면을 실제 구현 기준으로 검수하는 표면으로 재정의했다.

공유 포인트:
- 탐색은 가장 빠르고 정확한 도구에서 하고, 확정된 기준은 팀이 다시 찾을 수 있는 표면에 남긴다.
- Figma-first는 “모든 탐색을 Figma에서만 한다”가 아니라, 확정된 시각 기준을 Figma에 정리한다는 의미로 보정한다.
- 인터랙션, 데이터 상태, 입력/로딩/에러 흐름은 code prototype이나 Storybook screen에서 먼저 보는 편이 더 빠를 수 있다.

### 2. Button 컴포넌트 기준 정리

- Button의 S/M/L size, radius, spacing, icon 조합을 Figma 기준으로 다시 맞췄다.
- 기본 Button은 icon이 없는 text button으로 두고, icon 포함 버튼은 명시적 조합으로 다루기로 했다.
- loading 상태는 텍스트를 `loading`으로 바꾸지 않고 dots 형태로 표현하는 방향으로 정리했다.
- icon-only 버튼은 접근성 이름이 필요하고, Tooltip과 pairing해 사용 맥락을 보완하는 기준을 잡았다.
- Storybook 구조를 `Playground`, `Overview`, `Matrix`, `Locales`로 나누어 각각의 역할을 정리했다.

공유 포인트:
- Button은 이제 디자이너가 상태, 크기, variant, 다국어 길이를 Storybook에서 검수할 수 있는 구조가 생겼다.
- 다만 다음 컴포넌트로 넘어가기 전 Button 변경분을 어떤 단위로 PR/commit할지 정해야 한다.

### 3. Tooltip 컴포넌트 추가 및 접근성 검수 흐름 보강

- Figma Tooltip component set을 기준으로 Storybook Tooltip을 최신 디자인에 맞췄다.
- Tooltip은 hover, focus, long press에서 보이도록 구현 기준을 잡았다.
- 시각 리뷰를 위해 상시 노출되는 Positions story도 별도로 두었다.
- 영어, 한국어, 일본어 문구 길이를 확인할 수 있도록 Tooltip Locales story를 추가했다.
- 최신 Figma 값에 맞춰 white bubble, neutral/900 text, 8px radius, 34px height, 2px trigger gap을 반영했다.

공유 포인트:
- Tooltip은 icon-only 버튼의 접근성/설명 보조 요소로 같이 검수할 수 있다.
- 실제 제품에서 모든 Tooltip이 필요한 것은 아니므로, 사용 기준과 적용 범위는 다음에 정리해야 한다.

### 4. Typography / Font 검수 기반 정리

- Figma와 Storybook의 폰트 렌더링 차이를 줄이기 위해 Pretendard / Pretendard JP variable font를 repo에 self-hosting했다.
- Storybook preview가 실제 앱 스타일을 읽도록 전역 style import를 추가했다.
- Pretendard weight diagnostic story를 만들어 Figma 메뉴 기준 Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black을 직접 비교할 수 있게 했다.
- Button text style 혼재를 Figma에서 정리했다.
  - `button/s`: 14px, Regular 400
  - `button/m`: 16px, Medium 500
  - `button/l`: 17px, Medium 500

공유 포인트:
- 흰 글씨가 어두운 배경 위에서 더 두껍게 느껴지는 문제를 확인했다.
- 현재는 Figma 기준 text style을 유지하되, 실제 제품 화면에서 과하게 보이면 variant를 나누기보다 먼저 화면 맥락에서 재검토한다.

### 5. 다국어 검수 기준 추가

- 글로벌 앱 기준으로 영어, 한국어, 일본어 문구 길이를 Storybook에서 같이 볼 수 있도록 Button과 Tooltip에 Locales story를 추가했다.
- 일본어에서 버튼/툴팁이 붙거나 넘치는 문제를 확인했고, 컴포넌트 간 gap과 grid layout을 조정했다.
- Pretendard JP 적용 여부와 다국어 렌더링을 Storybook에서 계속 확인할 수 있는 기반을 만들었다.

공유 포인트:
- 앞으로 컴포넌트는 단일 영문 기준이 아니라 최소 영어/한국어/일본어 기준으로 검수해야 한다.
- 모바일 first 기준에서 hover/clicked 같은 웹 상태를 어떻게 문서화할지도 정리가 필요하다.

### 6. Foundation token / icon / color 기준 정리

- Figma Foundation page와 color chart를 기준으로 material palette와 token 문서를 정리했다.
- neutral palette를 cool gray 방향으로 전환하고 Git token / color foundation 문서에 반영했다.
- black/white alpha material scale을 추가했다.
- Lucide icon stroke 기준을 2px에서 1.5px로 낮췄다.
- dark 값들이 light와 동일해져 있던 문제를 확인했고, dark theme은 light 기준으로 새로 설계해야 하는 항목으로 남겼다.

공유 포인트:
- color, typography, icon 기준은 개별 값보다 “Figma token -> Git spec -> Storybook 렌더링” 루프로 관리해야 한다.
- dark theme은 남은 큰 작업으로 분리해서 다루는 것이 좋다.

### 7. AI 협업 / 업무 기록 운영 방식 정리

- Worklog를 단순 일일 기록이 아니라, 사람과 AI가 다음 업무 맥락을 이어받는 기록 채널로 재정의했다.
- “다시 까먹지 말 것”처럼 반복되는 실수나 원칙은 worklog에만 묻어두지 않고 rules, playbook, checklist로 승격하는 흐름을 추가했다.
- 빠르게 처리하기 위한 하드코딩보다 기존 구조, 재사용성, 값의 출처를 먼저 확인하는 원칙을 workflow guide에 반영했다.
- Worklog 캘린더는 최신 entry 기준으로 시작되도록 고치고, 중복이던 리스트 탭은 제거했다.
- 긴 회의 자료와 운영 메모는 `notes/` 문서로 분리하고, worklog에서 링크로 연결하는 방식으로 정리했다.

공유 포인트:
- AI와 협업할수록 기록은 단순 회고가 아니라 다음 작업의 context source가 된다.
- 개인용 HTML worklog는 하나의 사례일 뿐이고, 팀에서는 Notion, Markdown, issue tracker 등 다른 방식으로도 확장 가능하다.

### 8. Storybook과 코드 프로토타입을 활용한 화면 탐색

- 레이아웃과 인터랙션이 포함된 화면은 AI로 HTML/React prototype을 먼저 만들어 사용감을 확인할 수 있다는 가능성을 정리했다.
- Storybook에는 컴포넌트뿐 아니라 pattern, section, screen story도 들어갈 수 있으므로, 화면을 매번 앱 전체에서만 검수하지 않아도 된다.
- 단, 코드 프로토타입은 탐색 표면이고, 확정된 디자인 기준은 Figma와 Git spec으로 다시 정리해야 한다.

공유 포인트:
- Figma Prototype만 prototype이 아니다. HTML/CSS/JS, React prototype, Storybook screen, local app도 실행 가능한 prototype이다.
- 탐색 코드를 그대로 최종 기준으로 착각하지 않도록, 탐색과 확정 기준을 분리해야 한다.

## 회의에서 논의하면 좋은 아젠다

### Agenda 1. Prism 디자인 시스템의 운영 표면과 source of truth 합의

논의 질문:
- 시각 기준은 Figma, 구현 기준은 Git, 검수 표면은 Storybook으로 나누는 방향에 동의할지?
- code prototype이나 Storybook screen에서 먼저 탐색한 화면을 Figma에 어떻게 다시 정리할지?
- Figma component, md spec, Git spec, Storybook story 중 어디까지를 디자이너가 직접 관리할지?
- Code Connect는 지금 당장 필요한지, 아니면 Figma node id + Git spec + Storybook mapping으로 먼저 운영할지?

결정이 필요한 것:
- Figma-first를 “Figma-only exploration”이 아니라 “Figma as visual/design source”로 정의할지
- 디자이너가 Storybook을 어느 수준까지 검수 기준으로 사용할지

### Agenda 2. Button / Tooltip 기준 리뷰

논의 질문:
- Button 기본형은 text-only로 두고 icon button은 명시 조합으로 관리하는 방향이 괜찮은지?
- icon-only 버튼에 Tooltip pairing을 기본 검수 항목으로 둘지?
- loading 상태를 dots로 표현하는 기준이 제품 톤에 맞는지?
- Tooltip은 어떤 상황에서 필수이고, 어떤 상황에서는 생략해도 되는지?

결정이 필요한 것:
- Button story 구조와 variant 축 확정
- Tooltip 사용 기준 초안 확정

### Agenda 3. 다국어/모바일 first 검수 기준 정리

논의 질문:
- Button과 Tooltip 외에도 모든 컴포넌트에 Locales story를 만들지?
- 영어/한국어/일본어 중 어떤 문구 세트를 기준 샘플로 둘지?
- hover/clicked 상태는 웹 기준인데, 모바일 first 제품에서는 어떤 우선순위로 문서화할지?

결정이 필요한 것:
- Storybook 다국어 검수 story를 기본 구성으로 넣을지
- 모바일 first 상태 기준을 문서화할지

### Agenda 4. 다음 컴포넌트 우선순위

후보:
- Text Field
- Chat Input Bar
- Badge
- Toast
- Modal/Dialog

논의 질문:
- 실제 제품 화면 조합에 가장 먼저 필요한 컴포넌트는 무엇인지?
- Button / Tooltip처럼 Figma -> Git -> Storybook 루프를 바로 적용할 컴포넌트는 무엇인지?

결정이 필요한 것:
- 다음 주 첫 sync 대상 컴포넌트 1~2개 선정

### Agenda 5. 화면 / 프로토타입 탐색 방식

논의 질문:
- AI로 만든 HTML/React prototype을 어떤 상황에서 먼저 써볼지?
- Storybook screen story를 대표 화면 검수 표면으로 둘지?
- code prototype에서 결정된 내용을 Figma와 md spec에 어떻게 다시 반영할지?

결정이 필요한 것:
- code-prototype-first exploration을 허용할 화면 유형
- 대표 screen story를 만들 우선순위

### Agenda 6. Dark theme 재설계 범위

논의 질문:
- dark theme은 기존 값을 복구할지, light 기준으로 새로 설계할지?
- alpha token은 primitive로 유지하고, dim/overlay 같은 semantic token을 따로 만들지?
- dark theme 작업을 foundation 단계에서 먼저 할지, 컴포넌트 검수와 병행할지?

결정이 필요한 것:
- dark theme 작업 방식과 우선순위

## 미팅에서 내가 말할 수 있는 요약 스크립트

이번 주에는 Prism 디자인 시스템의 운영 흐름을 정리했습니다. 처음에는 Figma, Git, Storybook이 각각 어떤 기준을 가져야 하는지 조금 섞여 있었고, 그래서 시각 기준은 Figma, 구현 기준은 Git, 구현 검수는 Storybook, 결정 맥락은 Worklog/Notes에 남기는 구조로 정리했습니다.

다만 Figma-first가 모든 탐색을 Figma에서만 해야 한다는 뜻은 아니라고 보정했습니다. 인터랙션이나 데이터 상태가 중요한 화면은 AI로 HTML/React prototype을 먼저 만들거나 Storybook screen, local app에서 먼저 확인하는 편이 더 빠를 수 있습니다. 중요한 것은 탐색을 어디서 했든, 확정된 기준을 Figma와 Git spec에 다시 정리하는 것입니다.

구체적으로는 Button과 Tooltip을 먼저 대상으로 삼아서 Figma 값, Storybook story, 다국어 검수, 접근성 기준을 맞췄습니다. Button은 기본 text-only 기준으로 정리했고, icon-only 버튼은 Tooltip과 접근성 라벨을 함께 봐야 한다는 기준을 추가했습니다. Tooltip은 hover, focus, long press에서 보이는 동작과 상시 리뷰용 story를 분리했습니다.

또 Storybook이 Figma와 다르게 보이는 문제를 줄이기 위해 Pretendard와 Pretendard JP를 self-hosting했고, weight 비교용 story를 만들어 폰트 두께를 확인할 수 있게 했습니다. 다국어 앱이기 때문에 Button과 Tooltip에는 영어, 한국어, 일본어 길이 검수 story도 추가했습니다.

운영 측면에서는 worklog를 단순 기록이 아니라 다음 작업에서 사람과 AI가 맥락을 회수하는 채널로 정리했습니다. 반복되는 실수나 규칙은 worklog에만 남기지 않고 rules나 playbook으로 승격하는 방식도 workflow guide에 반영했습니다.

다음으로는 Button / Tooltip 변경 범위를 확정하고, Text Field나 Chat Input Bar 같은 실제 화면 조합에 필요한 컴포넌트에 같은 sync loop를 적용하려고 합니다.

## 내일 미팅 전 체크리스트

- [ ] Storybook에서 Button Overview / Matrix / Locales 다시 열어보기
- [ ] Tooltip Playground / Positions / Locales 다시 열어보기
- [ ] Figma Button component set과 Tooltip component set 최신 상태 확인
- [ ] 다음 컴포넌트 우선순위 후보 1~2개 마음속으로 정해두기
- [ ] code prototype이나 Storybook screen으로 먼저 탐색해볼 화면 후보 생각해두기
- [ ] dark theme을 이번 주 바로 할지, 다음 foundation 작업으로 뺄지 입장 정리
- [ ] “Storybook을 디자이너 검수 기준으로 쓸 것인지” 팀에 물어볼 질문 준비

## 참고 링크

- Worklog: https://jumijeong-design.github.io/socra-ai-workflow-guide/worklog.html
- AI Workflow Guide v0.13: https://jumijeong-design.github.io/socra-ai-workflow-guide/ai-workflow-guide.html
- Changelog v0.13: https://jumijeong-design.github.io/socra-ai-workflow-guide/changelog.html
