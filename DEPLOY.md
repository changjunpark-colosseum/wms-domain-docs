# 외부 배포

사이트는 정적 파일로 빌드되며 GitHub Pages, Cloudflare Pages, Netlify 또는 Vercel에 배포할 수 있다.

## GitHub Pages

1. 새 공개 저장소를 만든다.
2. 이 프로젝트를 저장소에 연결한다.
3. 기본 브랜치를 `main`으로 사용한다.
4. 저장소 Settings → Pages → Source에서 `GitHub Actions`를 선택한다.
5. `main`에 push하면 `.github/workflows/deploy.yml`이 자동 배포한다.

프로젝트 사이트의 base path는 워크플로가 저장소 이름으로 자동 설정한다.

## Cloudflare Pages

- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`
- Node version: `22` 이상

루트 도메인이나 커스텀 도메인에서는 별도 base 설정이 필요 없다.

## 배포 전 점검

```bash
npm ci
npm run docs:build
npm run docs:preview
```

외부 공개 전 `npm run docs:build`와 금칙어 검사를 다시 수행한다.
