# [24] 프롬프트 4. 배포

> 구분: 운영 · 영역: 프론트

## 언제 쓰나

PR을 충돌 없이 올리고 머지하고, 확정된 것을 npm에 내보낼 때.

## 이렇게 시킨다

```text
머지 전에 git diff --name-only origin/main...HEAD -- <패키지 src 경로>와 -- .changeset을 둘 다 찍어서 내 PR이 changeset을 냈는지 보고해줘. 옆 PR 것 때문에 CI는 그냥 통과해. 없으면 만들고 머지해줘.
리베이스는 그 PR의 worktree에서만 해줘. 리베이스 뒤 CI와 같은 플래그로 다시 돌린 결과를 보고에 붙여줘.
머지는 --delete-branch 없이 해줘. 에러가 나면 다시 머지하지 말고 gh pr view --json state,mergeCommit으로 상태부터 재줘.
머지 뒤 origin/main에서 내 변경 문자열을 파일마다 grep해서 살아 있는지 보고해줘. 옆 PR이 되돌리는 일이 있어.
npm 배포는 Version PR 머지로만 해줘. 시작 전에 origin/main의 package.json 버전 · 대기 changeset 수 · 최근 release 워크플로 실행 결과를 보고해줘. 지금 체크아웃한 브랜치의 package.json은 배포 상태가 아니야.
이번 배포에 실리는 changeset 목록(PR · 컴포넌트 · bump 종류)을 먼저 보여줘. 내가 고르면 진행해줘. 「확정」은 내가 명시한 것만이야. plan의 「방향 확정」은 최종이 아니야.
발행 확인은 로그인 상태에서 npm view <패키지 이름> version으로 해줘. 무인증 404는 실패가 아니야.
```

## 왜 이 문장인가

- **changeset을 손으로 잰다.** 게이트는 PR별로 안 본다. `.changeset/`에 옆 PR 파일이 있으면 내 PR이 안 내도 통과한다.
- **`--delete-branch` 없이.** 옆 워크트리가 브랜치를 점유하면 머지하고도 에러로 끝난다. 다시 머지하면 사고다. 상태부터 잰다.
- **머지 뒤 grep.** 머지해도 남의 낡은 base PR이 되돌린다. 머지가 끝이 아니다.
- **브랜치 package.json은 배포 상태가 아니다.** 버전은 origin/main과 release 워크플로에서 잰다.
- **무인증 404는 정상이다.** 패키지가 restricted라 로그인 없이 보면 없는 것처럼 보인다.

## 결과를 이렇게 확인한다

- 보고에 diff 두 줄이 다 있나.
- 머지 뒤 grep 결과가 파일별로 있나.
- 발행 확인이 로그인 상태인가.

## Source Worklog

- 정본: ax-log-records `manual/24-prompt-release.md` (비공개, 2026-09-28 판)
- 관련 경험 기록: 13편 디자이너가 패키지를 배포한다, 14편 통과가 완료는 아니다
