# CGKR Docs

Obsidian Vault와 실제 구현을 바탕으로 WMS 공용 개념을 설명하는 회사 내부 문서 사이트다. 현재 범위는 상품·재고·입고·출고·배송·송장·반품과 채널별 물류 흐름이다.

## 실행

```bash
npm install
npm run docs:dev
```

- `npm run docs:build`: 정적 빌드
- `npm run docs:preview`: 빌드 후 `http://localhost:4173/docs/`에서 미리보기

문서는 `/docs/getting-started/`, `/docs/product/`, `/docs/inventory/`처럼 `/docs/` 아래에서 제공한다. `/docs/`는 별도 메인페이지를 표시하지 않고 시작하기 문서로 이동한다.

## 정본과 편집 경계

- 작성 근거: `/Users/changjun/Documents/Obsidian Vault`의 상품 정책
- 웹 프로젝트: `/Users/changjun/Projects/wms-study-docs`
- `docs/product` 안에 설명과 정책을 모두 작성한다.
- Vault 원문과 별도 정책 미러는 웹 프로젝트에 복사하지 않는다.
- 새로운 도메인과 채널별 물류 문서는 사용자와 구조·내용을 확정한 뒤 사이트에 포함한다.
- 회사 내부 자료이므로 외부 Pages·공개 저장소·외부 호스팅에 배포하지 않는다.
- AS-IS, 목표 정책과 미확정을 합쳐서 현재 운영 사실로 표현하지 않는다.

상품 정책을 검토할 때만 Vault 원문을 확인하고, 사이트 문서는 독립적으로 읽을 수 있게 작성한다.
