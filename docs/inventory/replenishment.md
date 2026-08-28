---
title: 보충
description: 보관 Location의 Stock을 피킹 Location으로 공급해 출고 작업 가능 수량을 확보하는 정책
---

# 보충

<div class="page-meta"><span>재고</span><span>피킹 재고 공급</span><span>10분</span></div>

보충은 STORAGE 등 보관 Location의 Stock을 PICK Location으로 옮기는 목적성 이동이다.

```text
STORAGE Location
→ 보충 작업
→ PICK Location
→ 출고 피킹에서 사용
```

## 이동과의 차이

| 이동 | 보충 |
|---|---|
| 재배치 자체가 목적 | 피킹 가능 수량 확보가 목적 |
| 허용된 Location 간 이동 | 보관 Location → 피킹 Location |
| 사용자가 수량 지정 | 현재량·목표량·출고 수요로 권장 수량 산출 가능 |

## 작업 흐름

<div class="flow-strip"><span>보충 필요 상품 조회</span><i>→</i><span>원천 Stock 선택</span><i>→</i><span>작업 생성·할당</span><i>→</i><span>출발 Location·상품 스캔</span><i>→</i><span>PICK Location 스캔</span><i>→</i><span>적재·완료</span></div>

## 권장 수량

```text
권장 보충량
= min(
  PICK 목표수량 - 현재수량,
  PICK Location 여유 용량,
  원천 가용수량,
  출고 필요수량
)
```

## 정책

1. 보충 전후 센터 전체 Stock 수량은 변하지 않는다.
2. 원천은 사용 가능한 보관 Location의 가용 Stock이어야 한다.
3. 도착지는 피킹에 사용할 수 있는 Location이어야 한다.
4. 권장 수량은 원천 가용수량과 도착지 용량을 초과하지 않는다.
5. BOX·EA 단위가 다르면 동일한 UOM 환산 기준을 사용한다.
6. 보충 완료 후 PICK Location의 가용수량을 갱신한다.
7. 긴급 보충은 원래 피킹 작업과 연결한다.

## 예외

- 원천 Stock 부족
- 잘못된 PICK Location
- 도착 Location 용량 초과
- UOM 환산 불일치
- 보충 완료 전 피킹 재개
- 동일 부족 건에 중복 보충 작업 생성
