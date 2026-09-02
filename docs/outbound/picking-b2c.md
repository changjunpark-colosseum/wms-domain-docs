---
title: B2C 피킹
description: B2C 출고를 개별·클러스터·총량·송장번호 방식으로 처리하는 피킹 구조
---

# B2C 피킹

<div class="page-meta"><span>출고</span><span>B2C 피킹</span><span>8분</span></div>

B2C 피킹은 주문 수와 분류 시점에 따라 개별·클러스터·총량 방식으로 작업을 구성한다.

## 대상 Zone

B2C 피킹지시를 생성할 때는 피킹로케이션(`PICK`)의 가용 Stock만 조회하고 할당한다. 보관로케이션(`STRG`)에 있는 Stock은 B2C 피킹 작업에 직접 포함하지 않는다.

```text
보관로케이션(STRG)에 재고 존재
→ 피킹로케이션(PICK) 가용재고 확인
→ 부족하면 보충 작업
→ 피킹로케이션(PICK)에 Stock 반영
→ B2C 피킹지시 생성
```

출고 신청 화면의 가용재고는 Location 유형 제한 없이 조회될 수 있으므로 신청 화면 수량만으로 B2C 피킹 가능 여부를 확정하지 않는다.

## 방식 비교

| 방식 | 작업 구성 | 운반체 | PDA 흐름 |
|---|---|---|---|
| 개별 | 출고 1건 : 작업 1건 | Cart | Cart → Location → 상품 → PACK Zone |
| 클러스터 | 여러 출고 : 작업 1건 | Cart + 출고별 Con | Cart → Location → 상품 → Con → PACK Zone |
| 총량 | 여러 출고 : 상위 작업 1건 | 슬립별 Con | Con → Location → 상품 → PACK Zone |

송장번호 개별·클러스터는 작업 진입 방식이 다르지만 상품의 물리 스캔 순서는 각각 개별·클러스터와 같다.

## 공통 정책

1. 작업 생성 수량은 사용 가능한 Stock 수량을 초과할 수 없다.
2. 일반 작업은 작업 단위, 총량 작업은 피킹 슬립 단위로 작업자를 지정한다.
3. Cart·Con과 출고·피킹 슬립 관계를 작업 완료까지 보존한다.
4. 모든 방식은 상품 피킹 뒤 PACK Zone을 스캔한다.
5. 재고부족은 STKOUT·예외 피킹으로 분리한다.
6. B2C 피킹 작업에는 피킹로케이션(`PICK`)의 Stock만 할당한다.
7. 보관로케이션(`STRG`)에만 재고가 있으면 보충 완료 전 피킹 가능 재고로 간주하지 않는다.
8. 신청 화면 가용재고와 실제 피킹로케이션(`PICK`) 할당 수량을 별도로 검증한다.


## 하위 문서

- [개별 피킹](/outbound/picking-individual)
- [클러스터 피킹](/outbound/picking-cluster)
- [총량 피킹](/outbound/picking-total)
- [예외 피킹·재고부족](/outbound/picking-exceptions)
- [보충](/inventory/replenishment)
