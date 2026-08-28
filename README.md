# CGKR Domain Docs

Obsidian Vault에 정리된 CGKR 정책을 근거로 WMS 도메인을 하나씩 구축하는 회사 내부 문서 사이트다. 현재 범위는 상품과 재고다.

## 실행

```bash
npm install
npm run docs:dev
```

- `npm run docs:build`: 정적 빌드
- `npm run docs:preview`: 빌드 후 `http://localhost:4173`에서 미리보기

## 정본과 편집 경계

- 작성 근거: `/Users/changjun/Documents/Obsidian Vault`의 상품 정책
- 웹 프로젝트: `/Users/changjun/Projects/wms-study-docs`
- `docs/product` 안에 설명과 정책을 모두 작성한다.
- Vault 원문과 별도 정책 미러는 웹 프로젝트에 복사하지 않는다.
- 상품·재고 외 도메인은 사용자와 구조·내용을 확정하기 전까지 사이트에 포함하지 않는다.
- 회사 내부 자료이므로 외부 Pages·공개 저장소·외부 호스팅에 배포하지 않는다.
- AS-IS, 목표 정책과 미확정을 합쳐서 현재 운영 사실로 표현하지 않는다.

상품 정책을 검토할 때만 Vault 원문을 확인하고, 사이트 문서는 독립적으로 읽을 수 있게 작성한다.
