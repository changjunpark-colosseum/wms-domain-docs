# CGKR Docs

CGKR의 물류 운영 개념을 바탕으로 WMS 도메인을 학습할 수 있게 정리한 VitePress 문서 사이트다.

- 공개 문서: https://changjunpark-colosseum.github.io/wms-domain-docs/
- 문서 범위: 상품, 재고, 입고, 출고, 배송·송장, 반품, 외부 연동

## 문서 구조

```text
docs/
├─ getting-started/  WMS 개요·운영 주체·전체 흐름·핵심 용어
├─ product/          Product·SKU·바코드·UOM·외부 상품
├─ inventory/        Inventory·Stock·Location·이동·보충·조정
├─ inbound/          입고 주문·입하·검수·입고 작업·적치
├─ outbound/         출고 주문·피킹·패킹·상차·출고 완료
├─ shipping/         주소·택배사·송장 발번·출력·추적
├─ return/           반입·검수·품질 판정·양품화·폐기
├─ integration/      외부 상품·주문·결과 연동
└─ other/            채널별 물류 흐름
```

## 실행

```bash
npm ci
npm run docs:dev
```

- 개발 서버: `http://127.0.0.1:4173/docs/`
- `npm run docs:build`: VitePress 정적 빌드
- `npm run docs:preview`: 정적 빌드 후 미리보기

로컬에서는 `/docs/`를 기본 경로로 사용한다. GitHub Pages 빌드에서는 `DOCS_BASE=/wms-domain-docs/`가 적용된다.

## 배포

`main` 브랜치에 푸시하면 [GitHub Actions](.github/workflows/deploy-pages.yml)가 다음 과정을 실행한다.

```text
npm ci
→ VitePress 빌드
→ Pages artifact 업로드
→ GitHub Pages 배포
```

## 작성 원칙

1. 문서는 외부 자료 없이 독립적으로 읽을 수 있게 작성한다.
2. WMS 공용 개념을 중심으로 설명하고 CGKR 용어는 필요한 범위에서 연결한다.
3. 메뉴·화면 이름보다 업무 객체, 상태, 수량과 책임 주체를 먼저 설명한다.
4. 현재 동작, 목표 정책과 미확정 내용을 하나의 운영 사실처럼 합치지 않는다.
5. 계정·인증정보, 개인정보와 공개하면 안 되는 운영 데이터는 포함하지 않는다.
