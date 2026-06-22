# Storybook QA Harness Playbook

## When To Use

Prism 컴포넌트, 패턴, 대표 화면을 Storybook에서 검수 기준으로 운영할 때 사용한다.

이 플레이북은 Storybook을 새 디자인을 발명하는 공간으로 쓰기 위한 문서가 아니다. 승인된 Figma 근거와 `riiid/prism` 패키지 계약이 코드에 반영된 뒤, 반복 검수 축을 저장하고 다시 실행하는 QA 하네스로 쓰기 위한 절차다.

## Principle

Storybook은 갤러리가 아니라 검증 장치다.

컴포넌트를 예쁘게 전시하는 것만으로는 완료가 아니다. 디자이너와 프론트가 반복해서 확인해야 하는 상태, 언어, 화면 폭, 실패 상태, 긴 콘텐츠를 Storybook story로 고정해야 같은 문제를 매 화면에서 다시 찾지 않는다.

## Review Axes

| Axis | 확인할 것 |
| --- | --- |
| Theme | light/dark 모두에서 토큰과 계층이 맞는가 |
| Viewport | mobile/web 폭에서 page shell과 조합이 깨지지 않는가 |
| Locale | 한국어/영어/일본어 등 문구 길이가 바뀌어도 버티는가 |
| Long Content | 긴 제목, 긴 본문, 긴 리스트가 overflow 없이 처리되는가 |
| Empty | 데이터가 없을 때 구조와 affordance가 유지되는가 |
| Error | 실패 상태가 시각적으로 식별되고 복구 행동이 보이는가 |
| Fallback | 브라우저/기능 제한, 이미지 실패, 토큰 누락 경로가 무너지지 않는가 |
| Interaction / A11y | focus, keyboard, disabled, loading, aria 이름이 확인되는가 |

모든 컴포넌트가 모든 축을 동일한 깊이로 가질 필요는 없다. 텍스트 리스크가 큰 컴포넌트는 Locale/Long Content를, 표면·테마 리스크가 큰 컴포넌트는 Theme/Fallback을 우선한다.

## Story Types

| Type | 역할 |
| --- | --- |
| `Components/*` | 개별 컴포넌트의 Variant, state, content stress 검증 |
| `Pages/*` | 승인된 컴포넌트 조합이 실제 화면 폭과 테마에서 맞물리는지 확인 |
| `QA/*` | Theme, Viewport, Locale 같은 횡단 검증 축 |
| `Flows/*` | 여러 화면이나 깊은 인터랙션이 이어지는 대표 흐름 검증 |

Storybook의 페이지 shell, docs chrome, 배경 설명은 검수 가독성을 위해 Figma와 달라도 된다. 단, 렌더링되는 컴포넌트 내부의 토큰, 치수, variant, 상태, 타이포그래피, spacing, radius, shadow, 아이콘 크기, 접근성 동작은 `riiid/prism` 계약을 따라야 한다.

## Page-First Harness

신규 컴포넌트가 여러 개 필요한 화면은 개별 컴포넌트를 모두 구현하기 전에 page shell story를 먼저 만든다.

1. 승인된 기존 컴포넌트만으로 화면의 뼈대를 만든다.
2. 아직 구현 전인 영역은 명시적인 placeholder로 둔다.
3. mobile/web, light/dark, locale 같은 큰 축에서 조합이 성립하는지 먼저 확인한다.
4. 컴포넌트가 준비되면 placeholder를 실제 컴포넌트로 교체한다.
5. placeholder나 page shell 스타일을 컴포넌트 계약으로 승격하지 않는다.

이 순서를 쓰면 컴포넌트 디테일을 파기 전에 화면 전체의 정보 구조와 레이아웃 충돌을 먼저 볼 수 있다.

## Verification

Storybook 검수 완료는 source 파일 변경만으로 말하지 않는다.

- `riiid/prism`의 컴포넌트/토큰 계약이 갱신되어 있다.
- 필요한 경우 `pnpm token:build` 산출물(`theme.css`, `public.manifest.json` 등)이 단일 owner에 의해 반영되어 있다.
- Storybook 정적 빌드나 Chromatic에서 실제 story가 렌더된다.
- visual approval이 필요한 변경은 승인 대기와 승인 완료를 분리해 기록한다.
- Storybook에서 발견한 문제는 Figma, package contract, code, story 중 어느 층을 고쳐야 하는지 분류한다.

## Do Not

- Storybook에서 먼저 새 컴포넌트 구조를 발명하지 않는다.
- `QA/Viewport`나 `Pages/*`에서 만든 shell 스타일을 컴포넌트 API로 취급하지 않는다.
- Chromatic URL이나 build 번호 같은 일회성 상태를 이 wiki에 장기 기준으로 남기지 않는다.
- 특정 컴포넌트의 세부 prop 계약을 이 wiki에 복사하지 않는다. 그 내용은 `riiid/prism`의 `component-contracts/*.md`가 소유한다.

## Done Criteria

- Storybook story가 어떤 검증 축을 담당하는지 명확하다.
- Figma 근거, `riiid/prism` 계약, Storybook 검수 표면의 역할이 섞이지 않았다.
- source 변경, 생성물 반영, 정적 Storybook/Chromatic 확인이 분리되어 기록됐다.
- 디자이너 시각 승인이 필요한 변경은 승인 전/후 상태가 구분되어 있다.
- 반복 검수에 필요한 축만 위키에 남고, 컴포넌트 스펙 중복은 없다.

## Source Worklog

- `jumi-worklog/logs/2026/06/2026-06-19.md`
- `jumi-worklog/logs/2026/06/2026-06-22.md`
