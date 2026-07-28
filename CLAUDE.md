# socra-ai-workflow-wiki

AI 워크플로우·프로세스·시행착오를 정제해 쌓는 위키의 정적 사이트 소스.
공개 URL: https://jumijeong-design.github.io/socra-ai-workflow-wiki/

## 이 레포의 함정

- **캐시 토큰.** 콘텐츠만 고치면 라이브에 안 보인다. 사이드바는 `ai-workflow-guide.js`가
  `fetch('sidebar.html?v=<토큰>')`로 불러오고, 그 js도 전 페이지에서 토큰으로 로드된다.
  버전 bump는 `/bump-version` 스킬로 하고 손으로 하지 않는다.
- **`?v=` 일괄 치환 주의.** `guide-*.html`의 Notion URL에도 `?v=`가 있다. 치환할 때는
  `ai-workflow-guide.js?v=`처럼 자산명을 포함한다.
- **배포 상태.** GitHub Actions(`.github/workflows/deploy.yml`)로 배포한다. Pages API의
  `status`는 옛 "errored"를 계속 보여주니 무시하고 `gh run list`로 확인한다.

## 문서 톤

새 문서는 핵심만 짧게. 섹션·표를 많이 쌓지 않는다.
