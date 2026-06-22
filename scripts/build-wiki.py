#!/usr/bin/env python3
"""wiki MD 파일 → 그룹별 site/HTML 변환 빌드 스크립트"""

import markdown, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GROUPS = [
    {
        'file': 'guide-wiki.html',
        'title': '실무 가이드',
        'nav_title': '실무 가이드',
        'docs': [
            {'id': 'figma-git-sync',                'src': 'wiki/guides/30-figma-git-sync.md',                'label': 'Figma-Git Sync'},
            {'id': 'figma-first-storybook-verified', 'src': 'wiki/guides/90-figma-first-storybook-verified.md','label': 'Historical Figma / Storybook 교훈'},
            {'id': 'ai-design-review',              'src': 'wiki/guides/40-ai-design-review.md',              'label': 'AI 디자인 리뷰'},
            {'id': 'daily-worklog-to-wiki',         'src': 'wiki/guides/31-daily-worklog-to-wiki.md',         'label': 'Daily Worklog → Wiki'},
            {'id': 'designer-dev-terms',            'src': 'wiki/guides/80-designer-dev-terms.md',            'label': '개발 협업 용어'},
        ]
    },
    {
        'file': 'guide-playbooks.html',
        'title': '플레이북 / 기록',
        'nav_title': '플레이북 / 기록',
        'docs': [
            {'id': 'component-update-playbook', 'src': 'wiki/playbooks/31-component-update-playbook.md', 'label': '컴포넌트 업데이트'},
            {'id': 'storybook-qa-harness',      'src': 'wiki/playbooks/33-storybook-qa-harness.md',      'label': 'Storybook QA 하네스'},
            {'id': 'screen-design-playbook',    'src': 'wiki/playbooks/32-screen-design-playbook.md',   'label': '화면 디자인'},
            {'id': 'agent-handoff-playbook',    'src': 'wiki/playbooks/30-agent-handoff-playbook.md',   'label': '에이전트 핸드오프'},
        ]
    },
]

ALL_PAGES = [
    {'file': 'guide-basics.html',      'title': '기본 이해'},
    {'file': 'guide-setup.html',       'title': '연결 / 환경 설정'},
    {'file': 'guide-build.html',       'title': '문서 구축 가이드'},
    {'file': 'guide-ops.html',         'title': '실무 운영'},
    {'file': 'guide-extensions.html',  'title': '제품 유형별 확장'},
    {'file': 'guide-wiki.html',        'title': '실무 가이드'},
    {'file': 'guide-playbooks.html',   'title': '플레이북 / 기록'},
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
  <title>{group["title"]} — Socra AI Workflow Wiki</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
  <link rel="stylesheet" href="ai-workflow-guide.css?v=0.28-worklog" />
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

<script src="ai-workflow-guide.js?v=0.19-flow-default"></script>
</body>
</html>
'''

    out_path = os.path.join(ROOT, 'site', group['file'])
    with open(out_path, 'w') as f:
        f.write(html)
    print(f'  ✓ site/{group["file"]}')

print(f'\n{len(GROUPS)}개 wiki 그룹 페이지 빌드 완료')
