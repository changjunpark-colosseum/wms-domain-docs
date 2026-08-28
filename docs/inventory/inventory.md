---
title: Inventory
description: 확정된 입고·출고·반품·폐기·관리자 조정 사건으로 증감하는 위치 없는 재고 장부 정책
---

# Inventory

<div class="page-meta"><span>재고</span><span>장부 수량</span><span>10분</span></div>

Inventory는 확정된 재고 증가·감소 사건을 기록하는 **Location 없는 장부 수량**이다.

```text
Inventory = 상품별 장부 수량
Stock     = Location별 실물 수량
Difference = Inventory - Stock
```

## Inventory가 필요한 이유

Stock은 이동·보충처럼 Location만 바뀌는 작업에서도 계속 변경된다. 이런 물리 이동을 모두 입출고로 계산하면 센터 총수량이 중복 증감한다.

Inventory는 센터 총량을 바꾸는 확정 사건만 기록한다.

## Inventory를 변경하는 사건

| 사건 | Inventory |
|---|---:|
| 입고 완료 | 증가 |
| B2B·B2C 출고 완료 | 감소 |
| 반품 양품화·재입고 | 증가 |
| 실제 폐기 | 감소 |
| 관리자 입고 | 증가 |
| 관리자 출고 | 감소 |
| 가용재고 정정(`CHGUSE`) | 증가·감소 |
| HOLD 수량 정정(`CHGHLD`) | 증가·감소 |

## Inventory를 변경하지 않는 사건

| 사건 | Inventory | Stock 변화 |
|---|---:|---|
| Location 이동 | 유지 | 소재 변경 |
| 보충 | 유지 | 보관로케이션(`STRG`) → 피킹로케이션(`PICK`) 이동 |
| 재고 HOLD·해제(`DOHOLD`·`UNHOLD`) | 유지 | 가용·HOLD 구성 변경 |
| 패킹 Zone 이동 | 유지 | 출고 작업 위치 변경 |

## 장부 구조

```text
업무 사건
→ Inventory History 추가
→ Inventory Balance 증가·감소
```

Inventory History는 어떤 원인으로 수량이 변했는지 기록하고, Inventory Balance는 현재 장부 수량을 제공한다.

## 정책

1. Inventory Balance를 직접 수정하지 않고 업무 사건을 통해 변경한다.
2. History 추가와 Balance 변경은 함께 성공하거나 함께 실패해야 한다.
3. 동일한 원본 사건을 재처리해도 두 번 증감하지 않게 한다.
4. 현재 장부 수량보다 큰 감소를 허용하지 않는다.
5. 입고·출고·반품·폐기·관리자 조정을 서로 다른 사건 유형으로 기록한다.
6. 과거 History를 삭제하거나 현재 값에 맞춰 소급 수정하지 않는다.
7. Inventory와 Stock 차이는 자동으로 오류로 단정하지 않고 원인 조사의 신호로 사용한다.

## Inventory와 Stock 대사

```text
Inventory 100EA
Stock 합계 98EA
Difference 2EA
```

차이가 발생하면 다음을 확인한다.

- 입고·출고 완료 사건 누락 또는 중복
- 이동 중 Stock 소재 누락
- 관리자 조정과 History 불일치
- 폐기·반품 재고 반영 시점
- 수불부 배치 누락

## 관련 문서

- [Stock](/inventory/stock)
- [재고 조정](/inventory/adjustment)
- [수불부](/inventory/ledger)
