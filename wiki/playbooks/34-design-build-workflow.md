# 디자인 구축·전달 워크플로 (구축단계 파일럿)

> 출시 전 **구축단계**에서, 디자이너가 Figma에서 잡은 의도를 *실제 도는 화면*으로 빠르게 확인하고 넘기기 위한 흐름입니다. 낯선 개발 용어(PR·CI·Storybook·merge 등)는 '개발 협업 용어' 가이드에서 쉬운 말로 풀어 두었습니다.

## When To Use

출시 전 **구축단계**에서 AI·개발자와 함께 화면·기능을 설계하고 코드로 넘길 때, 기능 1~2개를 가볍게 검증하는 파일럿으로 씁니다.

2026-06-25에 채택한 **파일럿 v0.1**이고, 꼭 지켜야 하는 규칙은 아닙니다. 목적은 도구를 늘리는 게 아니라, Figma 시안을 사람이 일일이 코드로 옮기는 수고와 다 만든 뒤 몰아서 고치는 뒷단 QA 재작업을 줄이는 것입니다.

이 문서는 **출시 후 운영 루프와는 다릅니다.** 출시 뒤 반복해서 도는 운영 흐름(Figma 반영·토큰·컴포넌트·릴리즈)은 'Prism 운영 흐름' 시각화와 Storybook QA Harness·Component Update 플레이북이 담당합니다. 이 파일럿은 그 **앞단, 출시 전 구축단계**만 다룹니다.

## Principle

작업은 한 방향으로 흐릅니다.

<figure style="margin:1.25rem 0; padding:0;">
<div style="display:flex; flex-wrap:wrap; gap:6px; align-items:stretch;">
<div style="flex:1 1 132px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; padding:10px 12px;"><div style="font-size:10.5px; font-weight:700; letter-spacing:0.04em; color:var(--accent);">STEP 1 · 디자이너</div><div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:3px;">Figma — 의도 잡기</div><div style="font-size:11.5px; color:var(--text-secondary); margin-top:3px;">IA · 핵심 흐름 · 기준 화면 · 분기</div></div>
<div style="display:flex; align-items:center; color:var(--text-muted); font-weight:700; padding:0 2px;">→</div>
<div style="flex:1 1 132px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; padding:10px 12px;"><div style="font-size:10.5px; font-weight:700; letter-spacing:0.04em; color:var(--accent);">STEP 2 · 디자이너·개발</div><div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:3px;">브랜치 + 초안 PR</div><div style="font-size:11.5px; color:var(--text-secondary); margin-top:3px;">작업 가지에 올려 검토 요청</div></div>
<div style="display:flex; align-items:center; color:var(--text-muted); font-weight:700; padding:0 2px;">→</div>
<div style="flex:1 1 132px; background:var(--accent-dim); border:1px solid var(--accent-border2); border-radius:10px; padding:10px 12px;"><div style="font-size:10.5px; font-weight:700; letter-spacing:0.04em; color:var(--accent);">STEP 3 · 검토</div><div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:3px;">브랜치 Storybook 미리보기</div><div style="font-size:11.5px; color:var(--text-secondary); margin-top:3px;">실제 도는 UI로 상태·인터랙션 확인</div></div>
<div style="display:flex; align-items:center; color:var(--text-muted); font-weight:700; padding:0 2px;">→</div>
<div style="flex:1 1 132px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; padding:10px 12px;"><div style="font-size:10.5px; font-weight:700; letter-spacing:0.04em; color:var(--accent);">STEP 4 · 개발</div><div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:3px;">승인 · 병합(main)</div><div style="font-size:11.5px; color:var(--text-secondary); margin-top:3px;">정리 후 본 줄기에 합치기</div></div>
<div style="display:flex; align-items:center; color:var(--text-muted); font-weight:700; padding:0 2px;">→</div>
<div style="flex:1 1 132px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; padding:10px 12px;"><div style="font-size:10.5px; font-weight:700; letter-spacing:0.04em; color:var(--accent);">STEP 5 · 제품</div><div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:3px;">제품에서 통합 확인</div><div style="font-size:11.5px; color:var(--text-secondary); margin-top:3px;">여정 · 화면 이동 · 데이터</div></div>
</div>
<figcaption style="margin-top:9px; font-size:11.5px; color:var(--text-muted); line-height:1.6;">컴포넌트 <strong>안</strong>에서 끝나는 건 ③ Storybook에서, 화면을 <strong>넘나드는</strong> 건 ⑤ 앱에서 확인합니다.</figcaption>
</figure>

검토를 위해 **따로 실험용 공간이나 두 번째 Storybook을 새로 만들지 않습니다.** 작업 가지(브랜치) 자체가 잠깐 쓰는 실험실이고, 그 브랜치의 Storybook 미리보기가 검토 화면입니다.

## 4단계

| 단계 | 디자이너 관점에서 하는 일 |
| --- | --- |
| 1. Design Intent — 의도 잡기 | Figma에서 화면의 정보 구조(IA), 핵심 흐름, 기준이 되는 대표 화면, 사용자 분기를 "이렇게 가자"고 의도로 확정합니다. 시각을 바꿀 땐 바로 손대지 않고, 먼저 읽기 전용으로 점검한 뒤 명시적으로 승인받고 반영합니다(`design-system/rules.md` 0-1 규칙). |
| 2. Executable UI Review — 실제 도는 UI로 검토 | 그 화면을 Git 작업 가지에 올리고 초안 PR(검토용 변경 제안)을 엽니다. 그 브랜치에 연결된 Storybook 미리보기에서, 멈춰 있는 시안이 아니라 **실제로 눌리고 입력되는** 컴포넌트로 상태와 마이크로 인터랙션을 확인합니다. 새 실험 공간/두 번째 Storybook은 만들지 않습니다 — 작업 가지가 곧 임시 실험실입니다. |
| 3. Integrate & QA — 반영하고 제품에서 확인 | 검토가 끝나 승인되면 정리해서 본 줄기(main)에 병합합니다. 화면과 화면 사이의 일(여정·화면 이동·데이터)은 Storybook이 아니라 **실제 제품**에서 확인합니다. |
| 4. Reinforce — 남길 것만 남기기 | 두고두고 다시 볼 가치가 있는 검토용 Story만 정식 Story로 남기고 나머지는 정리합니다(정리해도 근거는 PR에 남습니다). 결정과 교훈은 worklog·계약 문서로 회수합니다. |

## Boundary — 컴포넌트 안 vs 화면 밖

검증할 대상이 **한 컴포넌트 안에서 끝나는 일**인지, **화면과 화면 사이에서 일어나는 일**인지에 따라 어디서 확인할지가 갈립니다.

| 구분 | 무엇 | 어디서 가장 정확히 보나 |
| --- | --- | --- |
| **컴포넌트 안 (intrinsic)** | 타이핑·포커스·hover·눌림·상태 전환·로딩·긴 텍스트·다국어 | 실제 코드로 도는 Storybook. (Flows는 가짜 데이터(mock)로 안정적으로 재현되는 짧은 흐름만 남깁니다.) |
| **화면 밖 (extrinsic)** | 화면 이동(라우팅)·로그인·저장·전역 상태·성능 | 의도는 Figma에서, 실제 확인은 앱에서 |

## Surface Roles — 표면별 역할

| 표면 | 역할 |
| --- | --- |
| Figma | 정보 구조(IA)·핵심 흐름·기준 화면·사용자 분기 |
| Storybook (하나만) | 실제 컴포넌트 상태·마이크로 인터랙션·가짜 데이터 기반 짧은 흐름·위험도 높은 화면 상태 |
| 앱(App) | 화면 이동·서버 통신(API)·로그인·저장·전역 상태·성능 |
| Chromatic | 언제든 바꿀 수 있는 게시 수단 |

## Prerequisite

이 방식은 **브랜치 미리보기(Storybook)가 문서 검사 통과 여부와 상관없이 항상 게시**돼야 성립합니다. prism은 CI(자동 검사)를 그렇게 분리해 두어 이 조건을 만족합니다. 자세한 CI 구성은 prism을 따릅니다.

## Do Not

- 검토용으로 새 실험 공간이나 두 번째 Storybook을 만들지 않습니다. 작업 가지가 곧 임시 실험실입니다.
- 시각 변경을 읽기 전용 점검·명시적 승인 없이 Figma나 코드에 바로 반영하지 않습니다.
- 이 구축 파일럿을 출시 후 운영 루프와 섞지 않습니다.
- 다시 볼 가치가 없는 검토용 Story를 정식 Story로 남기지 않습니다(근거는 PR에 보존).
- 화면을 넘나드는 일(여정·라우팅·데이터)을 Storybook만으로 끝내지 않습니다. 실제 제품에서 확인합니다.

## Done Criteria

- 검증 대상이 "컴포넌트 안"인지 "화면 밖"인지 나뉘어 있고, 각각 맞는 곳(Storybook / 앱)에서 확인됐습니다.
- Figma 의도 → 브랜치 초안 PR → 브랜치 Storybook 미리보기 → 병합으로 이어지는 길이 끊기지 않았습니다.
- 시각 변경에 읽기 전용 점검과 명시적 승인 단계가 기록돼 있습니다.
- 정식으로 남길 검토용 Story와 정리할 Story가 구분됐고, 정리한 Story의 근거는 PR에 남아 있습니다.
- 이 파일럿이 다룬 범위(구축단계)와 출시 후 운영 루프가 섞이지 않았습니다.

## Source Worklog

- 출처: `riiid/prism` `docs/workflows.md` — "구축단계 워크플로 (파일럿 v0.1)" 섹션
- 채택: 2026-06-25, 파일럿 v0.1 (출시 전 구축단계 한정, 기능 1~2개 검증용)
- 파일럿 대상: ChatInputBar 전송 피드백, AnswerCard 로딩→스트리밍→완료 전환
- 위키 이관: 2026-06-29
