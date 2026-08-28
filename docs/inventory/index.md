---
title: 재고 조회
description: 상품·SKU·Location·LOT·유효기간별 현재 재고와 가용 수량을 조회하는 정책
---

# 재고 조회

<div class="page-meta"><span>재고</span><span>조회</span><span>10분</span></div>

재고 조회는 **어떤 상품이 어느 Location에 몇 개 있고, 지금 사용할 수 있는 수량이 얼마인지** 확인하는 기능이다.

## 조회 단위

```text
화주
└─ Product
   └─ SKU
      └─ LOT·유효기간
         └─ LPN
            └─ Location별 Stock
```

같은 SKU라도 LOT·유효기간·Location이 다르면 별도 재고 행으로 조회한다.

## 검색 조건

- 화주사
- 상품명·추가 상품명
- 상품코드·SKU
- 바코드
- 일반상품·부자재상품
- Center·Zone·Location
- LOT·유효기간
- LPN
- 가용·HOLD 여부

## 조회 결과

| 정보 | 설명 |
|---|---|
| 총수량 | 해당 조건에 존재하는 Stock 수량 |
| 가용수량 | 출고·이동 등에 사용할 수 있는 수량 |
| HOLD 수량 | 작업에서 제외된 보류 수량 |
| Location | 실물이 놓인 현재 주소 |
| LOT·유효기간 | 같은 SKU의 실물 그룹을 구분하는 값 |
| LPN | 이동·적치·추적하는 재고 묶음 식별자 |
| 입고 정보 | 재고가 생성된 입고번호·입고일 |

## 정책

1. 조회 결과는 사용자가 접근할 수 있는 화주와 센터 범위로 제한한다.
2. Product 합계는 하위 SKU와 Location별 Stock 합계와 일치해야 한다.
3. 총수량과 가용수량을 같은 값으로 표시하지 않는다.
4. HOLD 수량은 총수량에는 포함하지만 가용수량에서는 제외한다.
5. 검색 조건과 정렬 조건을 다운로드 결과에도 동일하게 적용한다.
6. 수량이 0인 행의 표시 여부는 조회 목적에 따라 구분한다.

## 조회 흐름

<div class="flow-strip"><span>화주·상품 검색</span><i>→</i><span>SKU 선택</span><i>→</i><span>Location·LOT 확인</span><i>→</i><span>총수량·가용수량 확인</span><i>→</i><span>상세 또는 수불부 이동</span></div>

## 관련 문서

- [Inventory](/inventory/inventory)
- [Stock](/inventory/stock)
- [Location](/inventory/location)
- [LPN](/inventory/lpn)
- [LOT·유효기간](/inventory/lot-expiration)
- [가용재고·HOLD](/inventory/availability-hold)
- [수불부](/inventory/ledger)
