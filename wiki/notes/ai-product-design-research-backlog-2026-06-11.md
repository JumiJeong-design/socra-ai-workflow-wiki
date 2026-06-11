# AI Product Design Research Backlog

Date: 2026-06-11

이 문서는 아직 확정된 가이드가 아니라 연구 후보 목록이다. 실제 실험이나 사례가 생기면 `wiki/guides/`, `wiki/playbooks/`, `wiki/cases/`로 승격한다.

원본 정리 위치:

- `/Users/jeongjumi/Desktop/jumi-worklog/writing/_sources/product_research_backlog.md`
- `/Users/jeongjumi/Desktop/jumi-worklog/writing/_sources/notion_source_map.md`

Notion 링크를 추가로 받으면 각 주제 아래에 원본 링크를 붙이고, 공개 글에 쓸 수 있는 내용과 내부에만 남길 내용을 분리한다.

## 1. AI Branding Workflow

Notion sources:

- [쏘냥이 만들기 26년ver](https://app.notion.com/p/35e5bc5f630780f6a1c7e09a6874edc0)
- [쏘냥이 세부 캐릭터 디자인 설정](https://app.notion.com/p/35f5bc5f630780aab915ee19a15f18eb)
- [쏘냥이 프롬프트 공통 요소 분석](https://app.notion.com/p/35f5bc5f63078063a2c0dabb0e772af7)
- [쏘냥이 일관성 유지용 프롬프트](https://app.notion.com/p/3605bc5f630780d2a294c6fa4fe1fcd1)

질문:

- AI가 만든 무드를 어떻게 브랜드 기준으로 승격할까?
- 캐릭터, 컬러, 말투, 모션을 어떤 순서로 판단해야 할까?
- 생성 결과 중 무엇은 exploration으로 남기고, 무엇은 Foundation으로 남길까?

승격 후보:

- `guide`: AI branding workflow
- `case`: PrismSpirit 캐릭터 탐색 사례
- `checklist`: brand fit review checklist

## 2. Character / Motion Generation Workflow

Notion sources:

- [쏘냥이 만들기 26년ver](https://app.notion.com/p/35e5bc5f630780f6a1c7e09a6874edc0)
- [쏘냥이 세부 캐릭터 디자인 설정](https://app.notion.com/p/35f5bc5f630780aab915ee19a15f18eb)
- [쏘냥이 프롬프트 공통 요소 분석](https://app.notion.com/p/35f5bc5f63078063a2c0dabb0e772af7)
- [쏘냥이 일관성 유지용 프롬프트](https://app.notion.com/p/3605bc5f630780d2a294c6fa4fe1fcd1)

질문:

- 캐릭터 생성은 이미지 생성에서 끝나는가, 아니면 제품 상태와 상호작용까지 이어져야 하는가?
- idle, loading, success, error, empty 상태별 모션 기준은 어떻게 나눌까?
- 주관적인 피드백을 리뷰 가능한 기준으로 어떻게 바꿀까?

승격 후보:

- `playbook`: character and motion generation workflow
- `case`: PrismSpirit visual direction log
- `checklist`: motion state QA

## 3. Document-Based Chatbot / Q&A

Notion sources:

- [멀티 모델 UI](https://app.notion.com/p/31e5bc5f6307801c9400ee81c61443f5)

질문:

- worklog, wiki, Notion 문서를 챗봇이 어떻게 읽게 할까?
- FAQ는 사람이 만든 문답이어야 할까, 실제 질문 로그에서 생성해야 할까?
- 챗봇이 답할 수 있는 것과 사람에게 넘겨야 하는 것을 어떻게 구분할까?

승격 후보:

- `guide`: document-to-chatbot source map
- `playbook`: Q&A freshness and citation check
- `checklist`: chatbot answer boundary

## 4. Product Stage Diagnostic

Notion sources:

- [유저 설문 + 콜인터뷰 관련 PD논의](https://app.notion.com/p/3455bc5f630780399f64c9e8fb07154f)

질문:

- 현재 제품이 PoC, beta, live 중 어디에 가까운지 어떻게 판단할까?
- 단계에 따라 디자인 기준, 실험 기준, 데이터 기준은 어떻게 달라져야 할까?
- 간단한 테스트로 "지금 필요한 기준"을 추천할 수 있을까?

승격 후보:

- `tool spec`: product stage diagnostic
- `checklist`: PoC / beta / live criteria
- `guide`: criteria selection by product maturity

## 5. Document Comments / Decision Flow

질문:

- 문서에 남기는 의견은 comment, issue, worklog, wiki 중 어디에 둬야 할까?
- 의견이 많아질 때 무엇을 합의된 기준으로 승격할까?
- AI가 댓글을 읽고 다음 액션으로 정리하려면 어떤 구조가 필요할까?

승격 후보:

- `playbook`: comment to decision workflow
- `checklist`: document review triage
- `case`: design doc feedback loop

## 6. Design Experiments / A/B Tests

Notion sources:

- [멀티 모델 UI](https://app.notion.com/p/31e5bc5f6307801c9400ee81c61443f5)
- [유저 설문 + 콜인터뷰 관련 PD논의](https://app.notion.com/p/3455bc5f630780399f64c9e8fb07154f)

질문:

- as-is/to-be 비교는 어떤 기준으로 해야 설득력이 생길까?
- A/B 테스트가 필요한 문제와 디자이너 판단으로 충분한 문제를 어떻게 나눌까?
- AI가 만든 여러 시안을 어떤 기준으로 먼저 걸러낼까?

승격 후보:

- `guide`: design experiment criteria
- `template`: experiment record
- `checklist`: A/B readiness check

## 7. UT / Data-Informed Design

Notion sources:

- [유저 설문 + 콜인터뷰 관련 PD논의](https://app.notion.com/p/3455bc5f630780399f64c9e8fb07154f)
- [멀티 모델 UI](https://app.notion.com/p/31e5bc5f6307801c9400ee81c61443f5)

질문:

- UT에서 나온 말과 실제 사용 데이터가 다를 때 무엇을 우선할까?
- AI 제품에서는 속도, 정확도, 이해 가능성, 신뢰를 어떤 지표로 봐야 할까?
- 정성 피드백을 다음 디자인 기준으로 바꾸는 최소 단위는 무엇일까?

승격 후보:

- `guide`: AI UX evaluation criteria
- `template`: UT insight to design decision
- `checklist`: data-informed design review

## 8. PoC To Live Data Handoff

질문:

- PoC에서 얻은 신호를 라이브 제품 판단으로 바로 가져와도 될까?
- 실제 유저 데이터가 들어오면 디자인 시스템이나 챗봇 기준은 무엇을 업데이트해야 할까?
- 민감한 데이터와 학습용 데이터를 어떻게 나눌까?

승격 후보:

- `playbook`: PoC to live signal handoff
- `checklist`: user data integration risk check
- `case`: live data feedback loop

## 9. Code <-> Figma Bidirectional Sync

Notion sources:

- [쏘냥이 만들기 26년ver](https://app.notion.com/p/35e5bc5f630780f6a1c7e09a6874edc0)
- [웹사이트 디자인-개발 test](https://app.notion.com/p/3195bc5f6307804782f5c7b1154e83c2)

질문:

- 코드와 피그마가 서로 업데이트될 때 무엇이 source of truth인가?
- 연동 성공/실패 결과를 어디에 남겨야 다음 작업자가 믿을 수 있을까?
- Figma에 이미 있는 디자인과 시스템을 AI가 바로 반영하게 하려면 어떤 evidence가 필요할까?

승격 후보:

- `guide`: code figma bidirectional sync notes
- `checklist`: Figma evidence package
- `case`: sync result comparison

## 10. Image / Text Learning Result Comparison

Notion sources:

- [쏘냥이 만들기 26년ver](https://app.notion.com/p/35e5bc5f630780f6a1c7e09a6874edc0)
- [쏘냥이 세부 캐릭터 디자인 설정](https://app.notion.com/p/35f5bc5f630780aab915ee19a15f18eb)
- [쏘냥이 프롬프트 공통 요소 분석](https://app.notion.com/p/35f5bc5f63078063a2c0dabb0e772af7)
- [쏘냥이 일관성 유지용 프롬프트](https://app.notion.com/p/3605bc5f630780d2a294c6fa4fe1fcd1)

질문:

- AI가 이미지 기준을 더 잘 따르는 경우와 텍스트 규칙을 더 잘 따르는 경우는 언제일까?
- 시각 기준을 screenshot, Figma node, token, rule 중 어떤 형태로 넘겨야 재현성이 높을까?
- 결과 비교를 감상평이 아니라 기록으로 남기려면 어떤 포맷이 필요할까?

승격 후보:

- `case`: image vs text instruction comparison
- `template`: generation result comparison
- `checklist`: visual instruction quality

## 11. Mobile Agent Control Workflow

질문:

- 디자이너가 자리에서 벗어나도 AI 작업 흐름을 끊지 않으려면 무엇이 필요할까?
- 모바일에서는 승인, 리뷰, 우선순위 변경, 중단 지시 중 어디까지 가능해야 할까?
- Claude Code 모바일과 Git 연동이 가능할 때 어떤 작업 흐름을 만들 수 있을까?

승격 후보:

- `playbook`: mobile agent control workflow
- `checklist`: long-running AI task control points
- `case`: Claude Code mobile and Git handoff

## 12. AI Design-Development Tool Selection

Notion sources:

- [웹사이트 디자인-개발 test](https://app.notion.com/p/3195bc5f6307804782f5c7b1154e83c2)
- [소크라 튜터 프로덕트 디자인](https://app.notion.com/p/2345bc5f630780e7adadd523fc4e6141)

질문:

- AI 디자인-개발 툴은 팀 구성에 따라 어떻게 다르게 선택해야 할까?
- Figma Make, Framer, Cursor는 각각 어느 상황에서 유리하고 어디서 한계가 생길까?
- 속도가 빨라지는 것과 유지보수 가능한 결과물이 나오는 것은 어떻게 구분할까?

승격 후보:

- `case`: website design development tool test
- `guide`: AI design-development tool selection
- `checklist`: design-to-web output QA

## 승격 기준

- 실제 작업 로그나 Notion 원본 링크가 있다.
- 한 번의 아이디어가 아니라 반복 가능한 판단 기준으로 바꿀 수 있다.
- 다음 작업자가 그대로 따라 할 수 있는 입력, 절차, 완료 기준이 있다.
- 민감한 제품/유저 데이터가 들어가는 경우 공개 글과 내부 문서 범위를 분리했다.
- `소크라 튜터 프로덕트 디자인` 상위 페이지의 데이터베이스는 전체 본문을 한 번에 읽지 않고, 후속 작업에서 제목/URL/업무 속성/제품 단계만 먼저 스캔해 추가 글감 후보를 뽑는다.
