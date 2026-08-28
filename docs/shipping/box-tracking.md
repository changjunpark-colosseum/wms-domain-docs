---
title: Box·송장번호 연결
description: 패킹 상세별 내용물과 CGKR Tracking 상세를 연결해 송장·패킹·상차 조건을 검증하는 정책
---

# Box·송장번호 연결

CGKR에서는 택배 운송번호를 `trackingNo`로 관리하고, 송장번호·택배사·대표 여부를 Tracking 상세에 보존한다. 패킹 상세와 출고 배송정보, Tracking 상세의 관계를 연결해 어떤 상품이 어떤 송장번호로 출고되는지 추적한다.

```text
출고 주문
├─ 패킹 상세 A ─ Tracking 상세 1 ─ 송장번호 1 ─ 상품 A·B
└─ 패킹 상세 B ─ Tracking 상세 2 ─ 송장번호 2 ─ 상품 C
```

## CGKR 객체

| 객체·필드 | 의미 |
|---|---|
| `trackingNo` | 택배사가 발급한 송장번호 |
| `OutboundTrackingDetail` | 송장번호·택배사·서비스·대표 여부를 보존하는 Tracking 상세 |
| `OutboundInvoiceTracking` | 패킹 상세·출고 배송정보·Tracking 상세의 연결 관계 |
| `representYn` | 주문의 대표 송장 여부. 추가 송장은 대표가 아닌 Tracking으로 구분 |

## 정책

1. 발급된 송장번호는 Tracking 상세에 택배사와 함께 보존한다.
2. 패킹 상세별 상품·수량과 Tracking 상세의 관계를 유지한다.
3. 분할 포장에서는 각 패킹 상세에 사용할 송장번호를 구분한다.
4. 대표 송장과 추가 송장을 `representYn`으로 구분한다.
5. 송장번호 스캔 시 현재 처리 중인 출고·패킹 상세와 일치하는지 확인한다.
6. 재포장·택배사 변경·재발번 시 기존 Tracking 관계와 새 관계를 구분한다.
7. 상차 시 패킹 상세·송장번호 목록과 실제 화물을 대사한다.
8. `trackingNo`가 없으면 송장 발번 완료로 간주하지 않는다.

## 예외

- 패킹 상품과 송장번호의 출고 주문 불일치
- 동일한 송장번호 중복 연결
- 분할 패킹 일부의 송장번호 누락
- 대표 송장이 여러 건으로 지정됨
- 재포장·재발번 후 기존 Tracking 관계가 유효하게 남음
- 송장번호는 있지만 택배사 정보가 없음

## 관련 문서

- [송장 발번](/shipping/issuance)
- [추가 송장](/shipping/additional)
- [택배사 변경·재발번](/shipping/carrier-change)
- [패킹](/outbound/packing)
- [상차](/outbound/loading)
