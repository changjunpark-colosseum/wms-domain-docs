---
title: 입고 완료·재고 반영
description: 입하·검수·적치·예외 완료 조건을 확인하고 Inventory·Stock과 수불부에 입고 수량을 반영하는 정책
---

# 입고 완료·재고 반영

<div class="page-meta"><span>입고</span><span>재고 생성</span><span>9분</span></div>

입고 완료는 입하·검수·적치와 예외 처리 결과를 하나의 입고 사건으로 확정하고 재고 조회와 수불부에 반영하는 단계다.

## 완료 조건

1. 입하 수량과 잔여·회송이 종결됐다.
2. 모든 상품의 검수 수량과 예외가 확정됐다.
3. 정상 검수 수량이 Location에 적치됐다.
4. 미결 TS·예외가 없다.
5. 같은 입고가 이미 완료되지 않았다.

## 반영 흐름

<div class="flow-strip"><span>완료 조건 검증</span><i>→</i><span>입고 완료 확정</span><i>→</i><span>Inventory 증가</span><i>→</i><span>Location별 Stock 생성·증가</span><i>→</i><span>가용·HOLD 판정</span><i>→</i><span>수불부 입고 기록</span></div>

## Inventory와 Stock

```text
Inventory: 입고 완료 수량만큼 장부 증가
Stock: 적치된 Location별 수량 증가
```

두 값은 같은 입고 원본으로 연결돼야 하며 Location별 Stock 합계와 Inventory 입고 수량을 대사할 수 있어야 한다.

## 가용수량

- 정상 상품이 사용 가능한 PICK·STORAGE Location에 적치되면 가용재고가 될 수 있다.
- HOLD·파손·불량·예외 수량은 가용재고에 포함하지 않는다.
- 적치되지 않은 수량은 사용 가능한 재고로 노출하지 않는다.

## 정책

1. 적치 완료만으로 선행 입하·검수·예외를 무시하지 않는다.
2. 같은 입고 완료 요청을 재처리해도 재고를 두 번 증가시키지 않는다.
3. Inventory 증가, Stock 반영과 수불 이력은 하나의 원본 ID로 연결한다.
4. 회송·예외 확정 수량은 정상 재고 증가에서 제외한다.
5. 입고 완료 뒤 신청 원장과 검수 결과를 수정하지 않는다.
6. 재고 반영에 실패하면 완료 상태와 재고 상태가 어긋나지 않게 전체를 롤백하거나 재처리한다.
7. 완료 후 재고 조회에서 SKU·LOT·유효기간·Location·수량을 확인할 수 있어야 한다.

## 예외

- 입고는 완료됐지만 Inventory가 증가하지 않음
- Inventory와 Location별 Stock 합계 불일치
- 같은 입고가 두 번 반영됨
- 예외 수량이 정상 가용재고에 포함됨
- 적치하지 않은 수량이 Location 재고로 생성됨
