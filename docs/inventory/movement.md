---
title: 이동
description: Stock을 출발 Location에서 도착 Location으로 옮기며 수량과 상품 속성을 보존하는 정책
---

# 이동

<div class="page-meta"><span>재고</span><span>Location 변경</span><span>10분</span></div>

재고 이동은 Stock을 한 Location에서 다른 Location으로 재배치하는 작업이다. 입고·출고가 아니므로 센터 전체 수량은 증가하거나 감소하지 않는다.

## 이동 유형

| 유형 | 설명 |
|---|---|
| 지시 이동 | 관리자가 상품·수량·출발·도착 조건을 지정 |
| 단순 이동 | 현장에서 출발 Stock과 도착 Location을 스캔해 즉시 이동 |
| 전량 이동 | 대상 Stock 전체 수량을 이동 |
| 부분 이동 | 일부 수량만 분리해 이동 |

## 작업 흐름

<div class="flow-strip"><span>이동 작업 생성·시작</span><i>→</i><span>출발 Location 스캔</span><i>→</i><span>상품·수량 확인</span><i>→</i><span>도착 Location 스캔</span><i>→</i><span>적재 확정</span><i>→</i><span>이동 완료</span></div>

## 수량 보존

```text
이동 전 수량 = 출발지 잔량 + 도착지 증가 수량
```

## 정책

1. 이동 전후 전체 Stock 수량을 보존한다.
2. SKU, LOT·유효기간과 입고 식별정보를 유지한다.
3. 출발 Location·상품·수량을 다시 검증한다.
4. 도착 Location의 상태·용도·용량·상품 조건을 확인한다.
5. 이미 다른 이동·피킹 작업에 사용 중인 수량은 이동하지 않는다.
6. 작업 중단 시 처리한 수량과 남은 수량을 보존한다.
7. 완료된 이동을 수정하지 않고 반대 방향 신규 이동으로 정정한다.
8. 출발지 감소와 도착지 증가는 함께 성공하거나 함께 실패해야 한다.

## 예외

- 출발 Location·상품 불일치
- 이동 수량이 가용수량보다 큼
- 도착 Location이 HOLD·비활성 상태
- 도착 Location 용량 초과
- 부분 이동 중 수량 불일치
- 이동 완료 전 작업 취소
