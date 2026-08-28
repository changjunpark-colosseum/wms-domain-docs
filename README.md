# Warehouse Atlas

상품 등록부터 입고·재고·출고·반품·정산까지 WMS 도메인을 단계별로 설명하는 공개용 학습 문서다.

## 실행

```bash
npm install
npm run docs:dev
```

정적 빌드는 `npm run docs:build`, 배포 결과 미리보기는 `npm run docs:preview`를 사용한다.

## 공개 경계

- 회사명, 내부 제품명, 고객사·센터 식별자, Jira·TC·코드 경로를 포함하지 않는다.
- 내부 정책이나 현재 구현을 그대로 복제하지 않는다.
- 업계 공통 개념, 구현 시 고려사항과 명시적인 학습용 예시만 다룬다.
- 원본 개인 Vault와 자동 동기화하지 않는다.

배포 방법은 [DEPLOY.md](./DEPLOY.md)를 참고한다.
