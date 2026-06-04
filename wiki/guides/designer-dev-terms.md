# 디자이너를 위한 개발 협업 용어 가이드

디자인 시스템이나 제품 UI를 AI/개발자와 함께 다루다 보면 PR, CI, Storybook, Token 같은 개발 용어를 자주 만나게 된다. 이 문서는 디자이너가 작업 흐름을 이해하고, 변경사항을 안전하게 확인하기 위해 필요한 기본 용어를 정리한다.

이 문서는 제품/package 계약 문서가 아니다. 실제 Prism 컴포넌트, 토큰, Storybook, 배포 기준의 source of truth는 `riiid/prism`이다.

## PR

**PR은 변경사항을 바로 반영하기 전에 검토받는 공간이다.**

PR은 Pull Request의 줄임말이다. 내가 또는 AI가 수정한 내용을 바로 최종 코드에 넣지 않고, "이 변경이 괜찮은지 확인해주세요"라고 올리는 검토 요청이다.

PR에서는 보통 다음을 확인한다.

- 무엇을 바꿨는지
- 왜 바꿨는지
- 관련된 Figma, Storybook, Worklog 링크가 있는지
- 자동 검사 결과가 통과했는지
- 리뷰어가 남긴 의견이 있는지

디자이너 입장에서는 PR을 "변경 제안서 + 리뷰 공간 + 검사 결과 모음"으로 보면 된다.

## CI

**CI는 사람이 보기 전에 기계가 먼저 돌리는 자동 안전검사다.**

CI는 Continuous Integration의 줄임말이다. PR이 올라오거나 코드가 업데이트되면 자동으로 실행되는 검사 시스템이다.

CI는 예를 들어 다음을 확인한다.

- 코드가 정상적으로 빌드되는지
- 타입 에러가 없는지
- 테스트가 통과하는지
- Storybook이 정상적으로 만들어지는지
- 문서 구조가 깨지지 않았는지
- 시각적 변경 검사가 실행되는지

디자이너 입장에서는 CI를 "이 변경이 기본적으로 안전한지 확인해주는 자동 체크리스트"로 이해하면 된다.

## GitHub Actions

**GitHub Actions는 GitHub 안에서 CI를 실행해주는 자동화 도구다.**

우리가 PR을 올리면 GitHub Actions가 자동으로 정해진 검사들을 실행한다. 검사 결과는 PR 화면에서 성공, 실패, 진행 중으로 표시된다.

예를 들어 Prism에서는 package 관련 검사를 하나로 묶은 workflow가 실행될 수 있다.

## Workflow

**Workflow는 자동으로 실행되는 작업 순서 묶음이다.**

예를 들어 package workflow는 패키지가 안전한지 확인하기 위해 여러 단계를 순서대로 실행한다.

보통 다음과 같은 단계가 들어간다.

- 코드를 가져오기
- 필요한 도구 설치하기
- 문서 검증하기
- 코드 검사하기
- Storybook 빌드하기
- 시각 변경 검사하기
- 필요한 경우 배포하기

## Check

**Check는 특정 변경이 문제 없는지 확인하는 검사 항목이다.**

PR 화면에서 checks가 모두 통과했다는 말은, 자동 검사들이 실패하지 않았다는 뜻이다.

Prism에서는 `pnpm check`라는 명령이 여러 검사를 한 번에 실행한다. 디자이너는 세부 명령어를 모두 외울 필요는 없고, "변경 전반을 확인하는 종합 검사"라고 이해하면 된다.

## Build

**Build는 작업한 코드를 실제로 실행하거나 배포할 수 있는 형태로 만드는 과정이다.**

디자인 파일을 export하거나, 시안을 공유 가능한 형태로 정리하는 것과 비슷하다. 코드에서는 작성한 파일을 앱, 패키지, Storybook 같은 결과물로 변환하는 과정을 build라고 부른다.

## Storybook

**Storybook은 컴포넌트를 실제 앱과 분리해서 확인하는 디자인 QA 공간이다.**

Button, Text Field, Badge 같은 컴포넌트를 상태별로 볼 수 있다. 예를 들어 버튼 하나를 보더라도 기본 상태, 비활성 상태, 로딩 상태, 긴 텍스트, 다크모드 등을 한 화면에서 비교할 수 있다.

디자이너 입장에서는 Storybook을 "코드로 구현된 디자인 시스템을 검수하는 캔버스"로 보면 된다.

## Visual QA

**Visual QA는 화면이 시각적으로 올바른지 확인하는 과정이다.**

색상, 간격, 크기, 텍스트 줄바꿈, 다크모드, 상태 표현 등이 의도대로 보이는지 확인한다.

Figma에서 디자인을 보는 것과 비슷하지만, Visual QA는 실제 코드로 구현된 결과를 본다는 점이 다르다.

## Chromatic

**Chromatic은 Storybook 화면을 캡처해서 이전 버전과 비교해주는 도구다.**

예전 화면과 현재 화면을 비교해서 어떤 부분이 달라졌는지 보여준다. 버튼 위치가 살짝 밀렸거나, 색상이 바뀌었거나, 의도하지 않은 변화가 생겼을 때 발견하기 쉽다.

디자이너 입장에서는 Chromatic을 "Storybook용 시각 변경 비교 도구"로 이해하면 된다.

## Visual Diff

**Visual Diff는 이전 화면과 현재 화면 사이의 시각적 차이다.**

차이가 의도한 변경이라면 승인할 수 있고, 의도하지 않은 변경이라면 수정해야 한다.

예를 들어 버튼 색상을 바꾸는 작업을 했는데 Text Field 간격까지 바뀌었다면, 그 Text Field diff는 의도하지 않은 변경일 수 있다.

## Approve

**Approve는 변경사항을 확인했고 괜찮다고 승인하는 것이다.**

PR에서도 approve가 있고, Chromatic에서도 approve가 있다.

- PR approve: 코드/문서 변경을 리뷰하고 괜찮다고 승인
- Chromatic approve: 시각적 변경을 확인하고 의도한 변경이라고 승인

## Changeset

**Changeset은 패키지를 배포할 때 변경 내용과 버전 변경 수준을 기록하는 문서다.**

디자인 시스템 패키지에서는 어떤 변경이 있었는지, 버전을 얼마나 올려야 하는지 기록해야 한다.

보통 다음 세 가지로 나뉜다.

- patch: 작은 수정
- minor: 새 기능이나 새 variant 추가
- major: 기존 사용 방식이 깨질 수 있는 큰 변경

## Breaking Change

**Breaking Change는 기존에 쓰던 방식이 깨질 수 있는 변경이다.**

예를 들어 컴포넌트의 prop 이름이 바뀌거나, 기존 token 이름이 삭제되면 기존 코드를 쓰던 사람이 영향을 받을 수 있다.

디자이너 입장에서는 "기존 화면이나 사용 방식에 영향을 줄 수 있는 큰 변경"으로 이해하면 된다.

## Canary

**Canary는 정식 배포 전에 먼저 확인해보는 미리보기 버전이다.**

정식 최신 버전으로 배포하기 전에, 먼저 설치해서 문제가 없는지 확인하는 용도다.

## Latest

**Latest는 정식 최신 버전이다.**

패키지를 설치할 때 기본으로 받아가는 안정된 최신 버전이라고 보면 된다.

## Token

**Token은 디자인 값을 이름으로 관리하는 방식이다.**

색상, 간격, 둥근 정도, 글자 크기 같은 값을 직접 숫자나 색상 코드로 쓰지 않고, 의미 있는 이름으로 관리한다.

예를 들어 `#4338CA`를 직접 쓰는 대신, `color.action.primary.bg`처럼 역할을 나타내는 이름으로 쓴다.

Token을 쓰면 색상이나 간격이 바뀌어도 여러 곳을 한 번에 안정적으로 관리할 수 있다.

## Contract

**Contract는 컴포넌트나 token이 지켜야 할 약속 문서다.**

컴포넌트가 어떤 상태를 가져야 하는지, 어떤 props를 쓰는지, 접근성 기준은 무엇인지, Storybook에서 어떤 상태를 확인해야 하는지 정리한다.

Prism에서는 다음 문서가 중요하다.

- `component-contracts/*.md`
- `token-contract.md`

디자이너 입장에서는 contract를 "구현 기준을 정리한 약속 문서"로 보면 된다.

## Source of Truth

**Source of Truth는 여러 문서가 다르게 말할 때 최종으로 믿어야 하는 기준이다.**

지금 구조에서는 실제 제품/package 계약의 Source of Truth는 `riiid/prism`이다.

즉, Figma나 Worklog에 다른 내용이 있더라도 실제 컴포넌트, token, Storybook, 배포 기준은 `riiid/prism`의 문서를 우선한다.

## Figma Evidence

**Figma Evidence는 Figma에서 확인한 시각적 근거다.**

Figma는 중요한 디자인 근거를 제공하지만, 현재 구조에서는 package 계약 그 자체는 아니다. Figma에서 확인한 값이나 상태는 `riiid/prism`의 contract, token, Storybook 기준으로 정리되어야 실제 구현 기준이 된다.

## Sync

**Sync는 서로 다른 작업 표면을 다시 맞추는 과정이다.**

예를 들어 다음과 같은 일이 sync에 해당한다.

- Figma에서 바뀐 디자인 기준을 Git 문서에 반영
- Git의 component contract 변경을 Storybook story에 반영
- Storybook에서 발견한 문제를 다시 token이나 contract에 반영
- 하루 작업 기록을 Worklog에 남기고, 반복 가능한 규칙은 Workflow Guide로 승격

즉 sync는 "Figma, Git, Storybook, Worklog가 서로 다른 말을 하지 않게 맞추는 과정"이다.

## 디자이너가 기억하면 좋은 한 줄 정리

- **PR**은 변경 제안서다.
- **CI**는 자동 안전검사다.
- **Storybook**은 구현된 컴포넌트를 보는 디자인 QA 공간이다.
- **Chromatic**은 Storybook 화면의 시각적 차이를 비교하는 도구다.
- **Token**은 디자인 값을 이름으로 관리하는 방식이다.
- **Contract**는 구현 기준을 정리한 약속 문서다.
- **Source of Truth**는 최종으로 믿어야 하는 기준이다.
- **Sync**는 Figma, Git, Storybook, Worklog를 다시 맞추는 과정이다.


- Side conversation: 디자이너가 PR, CI, Storybook, Token, Contract 같은 개발 협업 용어를 Notion/Worklog에 정리할 수 있도록 가이드 문구로 변환한 내용.
