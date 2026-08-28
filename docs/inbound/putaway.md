---
title: 적치
description: 검수 완료 상품을 임시빈·STOW Zone에서 피킹·보관 Location으로 이동하는 적치 정책
---

# 적치

<div class="page-meta"><span>입고</span><span>Location 배치</span><span>10분</span></div>

적치는 검수 완료 수량을 임시빈과 STOW Zone을 거쳐 실제 피킹·보관 Location에 배치하는 작업이다. 적치 단계에서 검수 수량을 새로 만들거나 수정하지 않는다.

## 적치 흐름

<div class="flow-strip"><span>임시빈 라벨 스캔</span><i>→</i><span>상품·남은 수량 확인</span><i>→</i><span>피킹·보관 Location 추천</span><i>→</i><span>도착 Location 스캔</span><i>→</i><span>수량·사진·체적 확인</span><i>→</i><span>적치 완료</span></div>

## 공간 흐름

```text
검수 완료
→ 임시빈
→ STOW Zone
→ PICK 또는 STORAGE Location
```

## 수량 관계

```text
적치 잔여 = 검수 완료 수량 - 누적 적치 수량 - 예외 대기 수량
```

## 정책

1. 적치 대상은 정상 검수 완료 수량을 기준으로 한다.
2. 임시빈 라벨로 상품과 남은 수량을 식별한다.
3. 도착 Location의 Center·Zone·상태·용도·용량을 확인한다.
4. 피킹 Location과 보관 Location을 구분한다.
5. 출발 수량 감소와 도착 Location Stock 증가는 함께 반영한다.
6. 여러 회차로 나눠 적치할 수 있으며 누적 수량을 관리한다.
7. 적치 중 파손·분실은 정상 수량과 분리해 예외 처리한다.
8. Location 정책 위반은 다른 Location을 선택하게 하고 재고 수량 예외로 만들지 않는다.
9. 모든 적치 대상과 예외가 종결된 뒤 적치 작업을 완료한다.

## 예외

- 임시빈 라벨 인식 실패
- 적치 수량이 남은 수량보다 큼
- 잘못된 SKU·Location
- HOLD·비활성 Location
- Location 용량 초과
- 피킹·보관 Zone 오선택
- 일부 수량 적치 후 작업 중단
