---
title: Bundle·Set
description: 여러 SKU와 구성 수량을 하나의 판매 구성으로 묶고 출고 단위로 전개하는 정책
---

# Bundle·Set

<div class="page-meta"><span>상품</span><span>상품 구성</span><span>10분</span></div>

Bundle은 여러 SKU와 수량으로 만든 판매 구성이다.

```text
Gift Set A
├─ SKU-A × 1
├─ SKU-B × 2
└─ SKU-C × 1
```

## Bundle과 재고

Bundle은 두 가지 방식으로 처리할 수 있다.

### 주문 시 구성품 전개

- Bundle 자체는 Stock을 보유하지 않는다.
- 주문이 들어오면 구성 SKU와 수량으로 전개한다.
- 출고 가능 수량은 구성 SKU 중 가장 부족한 수량을 기준으로 계산한다.

### Kit SKU로 실물화

- 세트 조립 작업을 통해 별도의 Kit SKU 재고를 만든다.
- 조립에 사용한 구성 SKU 재고는 감소한다.
- 해체하면 Kit SKU를 감소시키고 구성 SKU를 복원한다.
- 조립·해체 이력과 수량 보존을 관리한다.

## 등록 흐름

<div class="flow-strip"><span>Bundle 기본정보</span><i>→</i><span>구성 SKU 선택</span><i>→</i><span>구성 수량 입력</span><i>→</i><span>중복·순환 검증</span><i>→</i><span>활성화</span></div>

## 정책

1. Bundle에는 최소 두 개 이상의 구성 라인을 둔다.
2. 구성 SKU와 수량은 명확한 기준 UOM으로 저장한다.
3. 같은 SKU가 여러 라인에 중복되면 하나의 라인으로 합산한다.
4. Bundle이 자기 자신을 포함하거나 순환 참조하지 못하게 한다.
5. 판매·출고 이력이 있는 Bundle 구성 변경은 버전 또는 이력으로 보존한다.
6. 구성 SKU가 비활성화되면 신규 Bundle 주문 가능 여부를 다시 판정한다.
7. 실물화 여부와 Kit SKU 관계를 명확히 표시한다.

## 출고 가능 수량

```text
Bundle Available
= min(Component Available ÷ Component Required Quantity)
```

구성 SKU 중 하나라도 부족하면 완전한 Bundle을 출고할 수 없다.

## 예외

- 구성 SKU 재고 부족
- Bundle 구성 변경 중 진행 주문 존재
- 동일 SKU 중복 구성
- 순환 Bundle 구성
- Kit 조립·해체 수량 불일치
