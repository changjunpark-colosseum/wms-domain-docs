# 내부 실행 정책

이 프로젝트는 CGKR 회사 내부 정책을 포함하므로 외부 정적 호스팅 대상으로 사용하지 않는다.

## 허용된 실행

```bash
npm ci
npm run docs:preview
```

기본 미리보기 주소는 `http://localhost:4173`이다.

## 금지된 실행

- GitHub Pages 공개 배포
- Cloudflare Pages, Netlify, Vercel 등 외부 호스팅
- Public 저장소 전환
- Vault 전체 또는 허용 목록 밖의 파일 동기화

사내 인증이 적용된 별도 호스팅이 필요하면 정확한 대상과 접근정책을 먼저 승인받아야 한다.
