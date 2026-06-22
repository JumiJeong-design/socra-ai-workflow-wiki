#!/usr/bin/env python3
"""ai-workflow-guide.html → 5개 그룹 페이지로 분리하는 빌드 스크립트"""

import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(ROOT, 'site', 'ai-workflow-guide.html'), 'r') as f:
    full = f.read()

# ── 공통 shell 조각 ────────────────────────────────────────────
with open(os.path.join(ROOT, 'site', 'ai-workflow-guide.html'), 'r') as f:
    src = f.read()

SHELL_HEAD = src[:src.index('  <!-- Main -->') + len('  <!-- Main -->\n')]
SHELL_FOOT = '\n<script src="ai-workflow-guide.js?v=0.19-flow-default"></script>\n</body>\n</html>'

# main 내부 전체 추출
main_body = src[src.index('  <main class="main">') + len('  <main class="main">'):
                src.rindex('  </main>')]

# ── 그룹 경계 마커 ─────────────────────────────────────────────
GROUPS = [
    {
        'id': 'basics',
        'file': 'guide-basics.html',
        'title': '기본 이해 — AI Workflow 가이드',
        'nav_title': '기본 이해',
        'start': None,  # 처음부터
        'end': '    <!-- AI Editor Connect -->',
    },
    {
        'id': 'setup',
        'file': 'guide-setup.html',
        'title': '연결 / 환경 설정 — AI Workflow 가이드',
        'nav_title': '연결 / 환경 설정',
        'start': '    <!-- AI Editor Connect -->',
        'end': '    <!-- Step 0 -->',
    },
    {
        'id': 'build',
        'file': 'guide-build.html',
        'title': '문서 구축 가이드 — AI Workflow 가이드',
        'nav_title': '문서 구축 가이드',
        'start': '    <!-- Step 0 -->',
        'end': '    <section class="section" id="priority">',
    },
    {
        'id': 'ops',
        'file': 'guide-ops.html',
        'title': '실무 운영 — AI Workflow 가이드',
        'nav_title': '실무 운영',
        'start': '    <section class="section" id="priority">',
        'end': '    <!-- 제품 유형 자가진단 -->',
    },
    {
        'id': 'extensions',
        'file': 'guide-extensions.html',
        'title': '제품 유형별 확장 — AI Workflow 가이드',
        'nav_title': '제품 유형별 확장',
        'start': '    <!-- 제품 유형 자가진단 -->',
        'end': None,  # 끝까지
    },
]

# ── prev/next 전체 순서 (가이드 5개 + wiki 7개) ───────────────
ALL_PAGES = [
    {'file': 'guide-basics.html',               'title': '기본 이해'},
    {'file': 'guide-setup.html',                'title': '연결 / 환경 설정'},
    {'file': 'guide-build.html',                'title': '문서 구축 가이드'},
    {'file': 'guide-ops.html',                  'title': '실무 운영'},
    {'file': 'guide-extensions.html',           'title': '제품 유형별 확장'},
    {'file': 'figma-git-sync.html',             'title': 'Figma-Git Sync'},
    {'file': 'figma-first-storybook-verified.html', 'title': 'Historical Figma / Storybook 교훈'},
    {'file': 'ai-design-review.html',           'title': 'AI 디자인 리뷰'},
    {'file': 'daily-worklog-to-wiki.html',      'title': 'Daily Worklog → Wiki'},
    {'file': 'designer-dev-terms.html',         'title': '개발 협업 용어'},
    {'file': 'component-update-playbook.html',  'title': '컴포넌트 업데이트 플레이북'},
    {'file': 'screen-design-playbook.html',     'title': '화면 디자인 플레이북'},
]

def make_nav(file):
    idx = next(i for i, p in enumerate(ALL_PAGES) if p['file'] == file)
    prev_p = ALL_PAGES[idx - 1] if idx > 0 else None
    next_p = ALL_PAGES[idx + 1] if idx < len(ALL_PAGES) - 1 else None
    prev_btn = f'<a href="{prev_p["file"]}" class="wiki-nav-btn wiki-nav-prev">← {prev_p["title"]}</a>' if prev_p else '<span></span>'
    next_btn = f'<a href="{next_p["file"]}" class="wiki-nav-btn wiki-nav-next">{next_p["title"]} →</a>' if next_p else '<span></span>'
    return f'\n    <nav class="wiki-page-nav">\n      {prev_btn}\n      {next_btn}\n    </nav>\n'

# ── 각 그룹 HTML 파일 생성 ─────────────────────────────────────
for i, g in enumerate(GROUPS):
    start = main_body.index(g['start']) if g['start'] else 0
    if g['end']:
        end = main_body.index(g['end'], start) if g['start'] else main_body.index(g['end'])
    else:
        end = len(main_body)

    content = main_body[start:end].rstrip()

    # title 교체
    head = SHELL_HEAD.replace(
        '<title>AI 운영 문서 구축 가이드 — Socra AI Workflow Wiki</title>',
        f'<title>{g["title"]}</title>'
    ).replace(
        '<span class="mobile-topbar-title">AI 운영 문서 구축 가이드</span>',
        f'<span class="mobile-topbar-title">{g["nav_title"]}</span>'
    )

    nav = make_nav(g['file'])

    html = (
        head
        + '  <main class="main">\n'
        + content + '\n'
        + nav
        + '  </main>\n</div>\n'
        + SHELL_FOOT
    )

    out_path = os.path.join(ROOT, 'site', g['file'])
    with open(out_path, 'w') as f:
        f.write(html)
    print(f'  ✓ site/{g["file"]}')

print(f'\n5개 가이드 페이지 빌드 완료')
