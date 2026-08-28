---
title: 반입·반품 작업
description: 회수된 실물을 반품번호·원송장과 연결하고 RETURN Zone에 HOLD 상태로 반입하는 정책
---

# 반입·반품 작업

<div class="page-meta"><span>반품</span><span>RETURN Zone 반입</span><span>9분</span></div>

반입은 회수된 실물이 센터에 도착했음을 확인하고 일반 재고와 분리된 RETURN Zone에 두는 작업이다.

## 반입 흐름

<div class="flow-strip"><span>반품 송장·원송장 스캔</span><i>→</i><span>반품번호 확인·생성</span><i>→</i><span>상품·수량 확인</span><i>→</i><span>RETURN Zone 스캔</span><i>→</i><span>HOLD 반품 Stock 생성</span><i>→</i><span>반품 작업 시작</span></div>

## 재고 상태

```text
RETURN Zone 반입
→ 실물 Stock은 존재
→ 품질 판정 전 HOLD
→ 일반 가용재고에는 포함하지 않음
```

## 정책

1. 반입 실물을 반품번호·원출고·상품과 연결한다.
2. RETURN Zone이 아닌 Location에는 반입하지 않는다.
3. 반입 상품은 품질 판정 전까지 HOLD로 유지한다.
4. 같은 반품·상품을 중복 반입하지 않는다.
5. 반입 수량은 신청 수량과 비교해 차이를 기록한다.
6. 반입 시점에는 정상 Inventory를 증가시키지 않는다.
7. 반입 작업자, 시각, RETURN Location과 수량을 보존한다.
8. 반입 완료 상품의 정상·불량 수량과 클레임 확정 사유를 작업 등록에서 확정한다.
9. 작업 등록을 마친 상품을 Cart·Container 검수 대상으로 전달한다.

## 예외

- 잘못된 원송장·반품번호
- 신청하지 않은 상품 도착
- 반품 수량 초과·부족
- RETURN이 아닌 Zone 스캔
- 동일 상품 중복 반입
- 반품번호 생성 실패
- 반입 상품이 일반 가용재고로 노출됨

## 다음 단계

- [작업 등록·사유](/return/work-registration)
- [반품 Cart·Container](/return/cart-container)
