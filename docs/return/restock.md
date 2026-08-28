---
title: 양품화·재입고
description: 양품 판정 반품을 Cart·Container에서 정상 Location으로 적치하고 재고로 복귀시키는 정책
---

# 양품화·재입고

<div class="page-meta"><span>반품</span><span>정상 재고 복귀</span><span>10분</span></div>

양품화는 품질 판정이 끝난 정상 상품을 다시 판매 가능한 상태로 만들고 피킹로케이션(`PICK`)·보관로케이션(`STRG`)에 적치하는 작업이다.

## 양품화 흐름

<div class="flow-strip"><span>양품 작업 선택</span><i>→</i><span>반품 Cart·Container 스캔</span><i>→</i><span>상품·양품 수량 확인</span><i>→</i><span>정상 Location 스캔</span><i>→</i><span>Stock 적치</span><i>→</i><span>Inventory·수불 반영</span></div>

## 재고 반영

```text
RETURN Zone Stock 감소
→ 정상 Location Stock 증가
→ Inventory 반품-양품화 증가
→ 가용수량 판정
```

## 정책

1. 양품화 수량은 품질 판정된 양품 수량을 초과할 수 없다.
2. Cart·Container의 상품과 적치할 SKU·수량을 확인한다.
3. 도착 Location의 Center·Zone·상태·용도·용량을 검증한다.
4. RETURN Zone 감소와 정상 Location Stock 증가는 함께 반영한다.
5. Inventory는 같은 반품 상품에 한 번만 증가한다.
6. 원반품·원출고와 새 정상 Stock 관계를 보존한다.
7. LOT·유효기간·시리얼 값을 확인하고 유지한다.
8. 양품화 완료 후 조건을 충족한 수량만 가용재고로 만든다.

## 예외

- 양품 수량보다 큰 재입고 수량
- 잘못된 상품·Container
- 부적합·HOLD·비활성 Location
- RETURN Zone 차감과 정상 Stock 증가 불일치
- 동일 반품 상품 중복 재입고
- Stock은 증가했지만 Inventory·수불 누락
