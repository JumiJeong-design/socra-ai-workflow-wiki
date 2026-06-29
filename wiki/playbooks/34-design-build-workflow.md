# 디자인 구축·전달 워크플로 (구축단계 파일럿)

## When To Use

출시 전 **구축단계**에서 AI와 함께 화면·기능을 설계하고 코드로 전달할 때, 기능 1~2개를 검증하는 파일럿으로 사용한다.

2026-06-25에 채택한 **파일럿 v0.1**이며 절대 규칙이 아니다. 목적은 도구를 늘리는 것이 아니라, 피그마 → 코드 수동 번역과 후반 QA 재작업을 줄이는 것이다.

이 문서는 **출시 후 운영 루프와 분리한다.** 피그마 write·토큰·컴포넌트·Variant·스토리·시각 QA·릴리즈로 도는 운영단계 반복 루프는 `riiid/prism`의 `docs/workflows.md` 운영 섹션과 Storybook QA Harness·Component Update 플레이북이 소유한다. 이 파일럿은 그 앞단, 출시 전 구축단계만 다룬다.

## Principle

작업은 한 방향으로 흐른다.

```text
피그마(의도)
-> Git feature 브랜치 + Draft PR
-> 같은 Storybook의 브랜치 프리뷰 (실행형 검토)
-> Approve · Clean · Merge
-> main Storybook + 제품 통합 QA
```

별도 Lab이나 두 번째 Storybook을 만들지 않는다. **기능 브랜치 자체가 임시 Lab**이고, 브랜치 Storybook 프리뷰가 실행형 검토 표면이다.

## 4단계

| 단계 | 하는 일 |
| --- | --- |
| 1. Design Intent | 피그마에서 IA·핵심 플로우·canonical 화면·UX 분기를 의도로 확정한다. 시각 변경은 `design-system/rules.md`의 0-1 규칙대로 read-only 감사와 명시 승인 후에만 write한다. |
| 2. Executable UI Review | Git feature 브랜치 + Draft PR로 올리고, 같은 Storybook의 브랜치 프리뷰에서 실제 컴포넌트 상태와 마이크로 인터랙션을 실행형으로 검토한다. 별도 Lab/2nd Storybook을 만들지 않는다 — 기능 브랜치 자체가 임시 Lab이다. |
| 3. Integrate & QA | Approve·정리 후 main에 merge하고, 화면 간 여정·라우팅·데이터처럼 컴포넌트 밖(extrinsic) 검증은 실제 제품에서 한다. |
| 4. Reinforce | 채택·반복 QA 가치가 있는 Review Story만 정식 Story로 유지하고, 나머지는 정리하되 근거는 PR에 보존한다. 결정·교훈은 worklog/계약 문서로 회수한다. |

## Boundary — intrinsic vs extrinsic

검증 대상이 컴포넌트 안인지 밖인지가 어디서 검토할지를 결정한다.

| 구분 | 대상 | 최고 충실도 표면 |
| --- | --- | --- |
| **intrinsic (컴포넌트 내재)** | 타이핑·focus·hover·press·상태 전환·loading·긴 콘텐츠·로케일 | 실제 코드로 도는 Storybook. Flows는 mock으로 안정 재현되는 짧은 UI 흐름만 유지 |
| **extrinsic (컴포넌트 밖)** | 화면 간 여정·라우팅·인증·저장·전역 상태·성능 | 의도는 피그마, 실제 검증은 앱 |

## Surface Roles

| 표면 | 역할 |
| --- | --- |
| 피그마 | IA·핵심 플로우·canonical 화면·UX 분기 |
| 단일 Storybook | 실제 컴포넌트 상태·마이크로 인터랙션·mock 짧은 플로우·고위험 페이지 상태 |
| App | 라우팅·API·인증·저장·전역 상태·성능 |
| Chromatic | 교체 가능한 게시 수단 |

## Prerequisite

이 파일럿은 브랜치 Storybook 프리뷰가 **문서 게이트와 무관하게 항상 게시**돼야 성립한다. `riiid/prism`은 `release.yml`을 `validate`(문서 게이트) / `storybook`(Chromatic; 게이트·release 무관 항상 게시) / `check`(needs validate) 3-job으로 분리해 이 조건을 충족했다. CI 세부는 `riiid/prism`을 따른다.

## Do Not

- 별도 Lab이나 두 번째 Storybook을 만들지 않는다. 기능 브랜치가 임시 Lab이다.
- 시각 변경을 read-only 감사·명시 승인 없이 피그마나 코드에 write하지 않는다.
- 이 구축 파일럿을 출시 후 운영 루프와 섞지 않는다.
- 채택·반복 QA 가치가 없는 Review Story를 정식 Story로 남기지 않는다(근거는 PR에 보존).
- extrinsic(여정·라우팅·데이터)을 Storybook만으로 끝내지 않는다. 실제 제품에서 검증한다.

## Done Criteria

- 검토 대상이 intrinsic인지 extrinsic인지 분류돼 있고, 각자 맞는 표면(Storybook / 앱)에서 검증됐다.
- 피그마 의도 → 브랜치 Draft PR → 브랜치 Storybook 프리뷰 → merge 경로가 끊기지 않았다.
- 시각 변경에 read-only 감사와 명시 승인 단계가 기록돼 있다.
- 정식 유지할 Review Story와 정리할 Story가 구분됐고, 정리한 Story의 근거는 PR에 남아 있다.
- 이 파일럿이 다룬 범위(구축단계)와 출시 후 운영 루프가 섞이지 않았다.

## Source Worklog

- 출처: `riiid/prism` `docs/workflows.md` — "구축단계 워크플로 (파일럿 v0.1)" 섹션
- 채택: 2026-06-25, 파일럿 v0.1 (출시 전 구축단계 한정, 기능 1~2개 검증용)
- 파일럿 대상: ChatInputBar 전송 피드백, AnswerCard loading→streaming→완료 전환
- 위키 이관: 2026-06-29
