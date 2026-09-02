---
title: Stock
description: SKU 실물이 특정 Location에 존재하는 수량과 가용·HOLD 상태를 관리하는 정책
---

# Stock

<div class="page-meta"><span>재고</span><span>실물 수량</span><span>10분</span></div>

Stock은 특정 SKU의 실물이 창고 안에 존재하는 수량과 소재를 나타낸다.

```text
Stock
= SKU
+ LOT·유효기간
+ Location
+ 총수량
+ 가용수량·HOLD
```

## Stock이 필요한 이유

SKU가 같더라도 다음 조건이 다르면 하나의 수량으로 합칠 수 없다.

- 보관로케이션(`STRG`)
- LOT·유효기간
- 입고회차
- 가용·HOLD 상태
- 일반·불량·반품 등 취급 상태

## 핵심 값

| 값 | 설명 |
|---|---|
| Stock 수량 | 해당 조건으로 실제 존재하는 총수량 |
| 가용수량 | 신규 작업에 사용할 수 있는 수량 |
| HOLD 수량 | 작업에서 제외된 보류 수량 |
| Location | Stock의 현재 소재 |
| SKU·LOT | Stock의 상품 정체성 |

## 수량 관계

```text
Stock 총수량 = 가용수량 + HOLD 수량 + 이미 작업에 사용 중인 수량
```

화면에서 작업중 수량을 별도 제공하지 않는 경우에도 총수량과 가용수량의 차이를 임의로 삭제하거나 가용으로 간주하지 않는다.

## 정책

1. Stock은 반드시 SKU와 Location을 가진다.
2. LOT·유효기간 관리 상품은 해당 값을 Stock 식별 조건에 포함한다.
3. 이동은 Stock의 Location을 변경하지만 전체 수량을 증가시키지 않는다.
4. `DOHOLD`·`UNHOLD`는 총수량을 바꾸지 않고 가용·HOLD 수량만 서로 이동한다.
5. 관리자 입고·출고는 사유와 함께 Stock 수량을 증감한다.
6. 음수 Stock을 만들 수 없다.
7. 모든 수량 변화는 입고·출고·이동·조정 등 원인 작업으로 추적할 수 있어야 한다.
8. `CHGUSE`·`CHGHLD` 수량 정정은 총수량과 대상 수량을 함께 변경한다.


## Stock과 Location

Stock은 수량 객체이고 Location은 공간 기준정보다. 하나의 Location에 여러 Stock이 존재할 수 있으며, 하나의 SKU가 여러 Location에 분산될 수도 있다.

```text
Location A-01
├─ SKU-A / LOT-1 / 10EA
└─ SKU-B / 5EA

SKU-A
├─ Location A-01 / 10EA
└─ Location B-02 / 20EA
```
