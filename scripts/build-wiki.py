#!/usr/bin/env python3
"""wiki MD 파일 → 그룹별 site/HTML 변환 빌드 스크립트"""

import markdown, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GROUPS = [
    {
        'file': 'guide-wiki.html',
        'title': '실무 가이드',
        'nav_title': '실무 가이드',
        'docs': [
            {'id': 'figma-git-sync',                'src': 'wiki/guides/30-figma-git-sync.md',                'label': 'Figma-Git Sync'},
            {'id': 'ai-design-review',              'src': 'wiki/guides/40-ai-design-review.md',              'label': 'AI 디자인 리뷰'},
            {'id': 'daily-worklog-to-wiki',         'src': 'wiki/guides/31-daily-worklog-to-wiki.md',         'label': '기록을 위키로 올리기'},
            {'id': 'designer-dev-terms',            'src': 'wiki/guides/80-designer-dev-terms.md',            'label': '개발 협업 용어'},
        ]
    },
    {
        'file': 'guide-playbooks.html',
        'title': '플레이북 / 기록',
        'nav_title': '플레이북 / 기록',
        'docs': [
            {'id': 'screen-design-playbook',    'src': 'wiki/playbooks/32-screen-design-playbook.md',   'label': '화면 디자인'},
            {'id': 'audit-ops-principles',      'src': 'wiki/playbooks/35-audit-ops-principles.md',     'label': '대량 작업·재발 방지'},
            {'id': 'completion-stages',         'src': 'wiki/playbooks/36-completion-stages.md',        'label': '완료 기준 3단계'},
        ]
    },
    {
        'file': 'guide-manual.html',
        'title': 'AX 매뉴얼',
        'nav_title': 'AX 매뉴얼',
        'docs': [
            {'id': 'manual-00', 'src': 'wiki/manual/00-reading-order.md', 'label': '읽는 순서'},
            {'id': 'manual-10', 'src': 'wiki/manual/10-premise.md', 'label': '전제'},
            {'id': 'manual-11', 'src': 'wiki/manual/11-five-channels-publish-gate.md', 'label': '채널 다섯과 게시 게이트'},
            {'id': 'manual-12', 'src': 'wiki/manual/12-visual-baseline.md', 'label': '시각 기준'},
            {'id': 'manual-13', 'src': 'wiki/manual/13-behavior-baseline.md', 'label': '행동 기준'},
            {'id': 'manual-20', 'src': 'wiki/manual/20-harness.md', 'label': '하네스'},
            {'id': 'manual-21', 'src': 'wiki/manual/21-prompt-ds-token-audit.md', 'label': 'DS 토큰 정합 검토'},
            {'id': 'manual-22', 'src': 'wiki/manual/22-prompt-screen-ds-roundtrip.md', 'label': '화면 → DS → 화면 왕복'},
            {'id': 'manual-23', 'src': 'wiki/manual/23-prompt-ds-storybook-contract.md', 'label': 'DS → 스토리북 계약 정리'},
            {'id': 'manual-24', 'src': 'wiki/manual/24-prompt-release.md', 'label': '배포'},
            {'id': 'manual-25', 'src': 'wiki/manual/25-prompt-session.md', 'label': '세션 시작 · 병렬 · 복구 · 마무리'},
            {'id': 'manual-26', 'src': 'wiki/manual/26-prompt-judgement.md', 'label': '판단을 올릴 때'},
            {'id': 'manual-31', 'src': 'wiki/manual/31-principle-costs.md', 'label': '이 방식의 단점'},
            {'id': 'manual-32', 'src': 'wiki/manual/32-principle-ai-vs-human.md', 'label': 'AI가 잘하는 것과 사람이 판단할 것'},
            {'id': 'manual-33', 'src': 'wiki/manual/33-principle-middle-ground.md', 'label': '의사결정자들 사이의 중간안'},
        ]
    },
    {
        'file': 'guide-cases.html',
        'title': '사례',
        'nav_title': '사례',
        'docs': [
            {'id': 'case-publish-not-the-cause', 'src': 'wiki/cases/publish-not-the-cause.md', 'label': '안 바뀌는 건 게시 때문이 아니었다'},
            {'id': 'case-rules-not-read', 'src': 'wiki/cases/rules-not-read.md', 'label': '규칙이 있는데 같은 실수가 난다'},
            {'id': 'case-audit-zero-and-false-defects', 'src': 'wiki/cases/audit-zero-and-false-defects.md', 'label': '0건과 결함 3곳'},
            {'id': 'case-storybook-sketchpad', 'src': 'wiki/cases/storybook-sketchpad.md', 'label': '스토리북이 그림판이 될 때'},
            {'id': 'case-two-builds-compare', 'src': 'wiki/cases/two-builds-compare.md', 'label': '게시본 두 개 직접 대조'},
            {'id': 'case-color-ramp-generations', 'src': 'wiki/cases/color-ramp-generations.md', 'label': '이름은 같은데 값이 다를 때'},
            {'id': 'case-copy-source-of-truth', 'src': 'wiki/cases/copy-source-of-truth.md', 'label': '문구의 정본이 세 군데일 때'},
        ]
    },
]

ALL_PAGES = [
    {'file': 'guide-basics.html',      'title': '기본 이해'},
    {'file': 'guide-setup.html',       'title': '연결 / 환경 설정'},
    {'file': 'guide-build.html',       'title': '탐색 단계'},
    {'file': 'guide-ops.html',         'title': '실무 운영'},
    {'file': 'guide-extensions.html',  'title': '제품 유형별 확장'},
    {'file': 'guide-wiki.html',        'title': '실무 가이드'},
    {'file': 'guide-playbooks.html',   'title': '플레이북 / 기록'},
    {'file': 'guide-manual.html',      'title': 'AX 매뉴얼'},
    {'file': 'guide-cases.html',       'title': '사례'},
]

def make_nav(file):
    idx = next(i for i, p in enumerate(ALL_PAGES) if p['file'] == file)
    prev_p = ALL_PAGES[idx - 1] if idx > 0 else None
    next_p = ALL_PAGES[idx + 1] if idx < len(ALL_PAGES) - 1 else None
    prev_btn = f'<a href="{prev_p["file"]}" class="wiki-nav-btn wiki-nav-prev">← {prev_p["title"]}</a>' if prev_p else '<span></span>'
    next_btn = f'<a href="{next_p["file"]}" class="wiki-nav-btn wiki-nav-next">{next_p["title"]} →</a>' if next_p else '<span></span>'
    return f'\n    <nav class="wiki-page-nav">\n      {prev_btn}\n      {next_btn}\n    </nav>\n'

md_parser = markdown.Markdown(extensions=['tables', 'fenced_code'])

for group in GROUPS:
    sections = []
    for doc in group['docs']:
        src_path = os.path.join(ROOT, doc['src'])
        with open(src_path, 'r') as f:
            raw = f.read()
        # Source Worklog 절은 원본 추적용이라 사이트에는 싣지 않는다 (검증 스크립트는 md 원본을 본다)
        raw = re.split(r'\n## [^\n]*Source Worklog', raw, maxsplit=1)[0].rstrip() + '\n'
        md_parser.reset()
        body_html = md_parser.convert(raw)
        sections.append(
            f'    <section class="wiki-doc" id="{doc["id"]}">\n'
            f'      {body_html.replace(chr(10), chr(10) + "      ")}\n'
            f'    </section>'
        )

    body = '\n\n    <hr class="divider" />\n\n'.join(sections)
    nav = make_nav(group['file'])

    html = f'''<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>{group["title"]} · Socra AI Workflow Wiki</title>
  <meta name="description" content="프로덕트 디자이너를 위한 AI 워크플로우 위키. 한 번 읽는 원칙, 하면서 따라가는 절차, 막혔을 때 찾아보는 함정을 소크라 제품 디자인 운영 경험에서 정제해 쌓는다." />
  <meta property="og:title" content="{group["title"]} · Socra AI Workflow Wiki" />
  <meta property="og:description" content="프로덕트 디자이너를 위한 AI 워크플로우 위키. 한 번 읽는 원칙, 하면서 따라가는 절차, 막혔을 때 찾아보는 함정을 소크라 제품 디자인 운영 경험에서 정제해 쌓는다." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jumijeong-design.github.io/socra-ai-workflow-wiki/{group["file"]}" />
  <link rel="canonical" href="https://jumijeong-design.github.io/socra-ai-workflow-wiki/{group["file"]}" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
  <link rel="stylesheet" href="ai-workflow-guide.css?v=0.35-surface" />
  <script>(function(){{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}})();</script>
</head>
<body>

<header class="mobile-topbar">
  <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
    <span></span><span></span><span></span>
  </button>
  <span class="mobile-topbar-title">{group["nav_title"]}</span>
</header>

<div class="sidebar-overlay" id="sidebar-overlay"></div>

<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>

  <main class="main">
{body}
{nav}
  </main>
</div>

<script src="ai-workflow-guide.js?v=0.36-entry-file"></script>
</body>
</html>
'''

    out_path = os.path.join(ROOT, 'site', group['file'])
    with open(out_path, 'w') as f:
        f.write(html)
    print(f'  ✓ site/{group["file"]}')

print(f'\n{len(GROUPS)}개 wiki 그룹 페이지 빌드 완료')
