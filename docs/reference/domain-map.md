---
title: 전체 도메인 맵
description: WMS의 기준정보, 입고, 재고, 출고, 반품과 정산 사이의 객체·사건 연결을 보여줍니다.
---

# 전체 도메인 맵

<div class="page-meta"><span>부록</span><span>도메인 지도</span><span>8분</span></div>

도메인 맵은 메뉴 목록이 아니라 **어떤 도메인이 객체를 소유하고 어떤 사건을 다음 도메인에 전달하는지** 보여줍니다.

<DomainJourney />

## 도메인별 책임

| 도메인 | 소유하는 핵심 객체 | 내보내는 대표 사건 |
|---|---|---|
| 상품 | Product, SKU, Barcode, UOM, Bundle | SKU 활성화·변경 |
| 입고 | Inbound Order, Receipt, Inspection | 입고확정, 적치 대상 생성 |
| 재고 | Inventory, Stock, LPN, Location | 가용성 변경, 이동·조정 |
| 출고 | Outbound Order, Allocation, Work, Box, Shipment | 피킹·패킹·출고확정 |
| 반품 | Return, Return Line, Grade | 재입고, 폐기, 반송 |
| 정산 | Rate, Usage, Charge, Statement | 발행, 결제, 마감 |

## 객체 연결

```text
Product 1 ── N SKU
SKU 1 ── N SKU Instance
SKU Instance 1 ── N Stock·LPN

Inbound Order 1 ── N Receipt Line ── N LPN
Outbound Order 1 ── N Allocation ── N Picking Work
Picking Work N ── N Box ── 1..N Shipment

Shipment 1 ── 0..N Return
Logistics Event N ── N Usage Record ── N Charge Line
```

관계 수는 구현과 정책에 따라 달라질 수 있습니다. 중요한 것은 1:1을 가정하기 전에 분할·합포장·부분 처리 가능성을 확인하는 것입니다.

## 사건의 연결

```text
SKU 활성화
→ 입고 예정 생성
→ 입고확정
→ 적치완료·Available
→ 주문 할당
→ 피킹·패킹
→ 출고확정
→ 반품 반입·품질 판정
→ 재입고 또는 폐기
→ 사용량 집계·정산
```

## 경계에서 확인할 것

### 상품 → 입고

SKU 식별자, UOM, 바코드, LOT·유효기간 관리 기준이 일치해야 합니다.

### 입고 → 재고

입고확정 수량이 한 번만 SOH에 편입되고 미적치 상태를 구분해야 합니다.

### 재고 → 출고

Available 이상을 할당하지 않고 주문 속성에 맞는 재고를 선택해야 합니다.

### 출고 → 반품

원출고·송장·주문 라인과 누적 반품 수량을 연결해야 합니다.

### 모든 물류 도메인 → 정산

업무 사건과 과금 사용량 사이에 재현 가능한 연결이 있어야 합니다.

## 시스템 연동 관점

WMS는 OMS, 쇼핑몰, 택배사, 회계 시스템과 연결됩니다. 시스템 경계에서는 다음 네 가지를 확인합니다.

1. 데이터의 정본과 변경 권한은 어디에 있는가?
2. 전달이 실패하면 누가 언제 재시도하는가?
3. 같은 메시지가 반복돼도 결과가 같은가?
4. 양쪽 상태가 다를 때 어떻게 대사하는가?

## 확인 문제

1. 상품 도메인이 Stock 수량을 직접 소유하면 어떤 책임이 섞일까요?
2. 출고 주문과 송장을 1:1로 고정하면 어떤 업무를 표현하기 어려울까요?
3. 반품 재입고 사건이 정산 사용량으로 두 번 수집되는 것을 어떻게 막을까요?
