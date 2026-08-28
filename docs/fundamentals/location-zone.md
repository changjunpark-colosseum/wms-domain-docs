---
title: Zone과 Location
description: 창고, Zone, Location과 도크의 역할을 구분하고 위치 정책을 설명합니다.
---

# Zone과 Location

<div class="page-meta"><span>공간 모델</span><span>기준정보</span><span>9분</span></div>

**Zone은 비슷한 목적과 정책을 가진 공간의 묶음이고, Location은 재고를 식별해 놓을 수 있는 구체적인 주소입니다.**

## 공간 계층

```text
Warehouse
└─ Zone
   └─ Location
      └─ LPN 또는 Stock
```

| 객체 | 역할 | 예시 |
|---|---|---|
| Warehouse | 하나의 운영 창고 | 서울 1센터 |
| Zone | 공정·품질·보관 정책 묶음 | INBOUND, STORAGE, PICK, HOLD |
| Location | 실제 적재 주소 | A-01-02-03 |
| Dock | 차량이 접안하는 입출고 접점 | Inbound Dock 2 |

## 도크는 왜 Location과 다른가?

도크는 차량이 물건을 싣고 내리는 **작업 접점**입니다. 재고가 잠시 머물 수 있지만 장기 보관 주소가 목적은 아닙니다. Location은 수량을 안정적으로 추적하는 주소이고, 도크는 입하·상차 작업과 차량 스케줄을 연결합니다.

## 대표 Zone

| Zone | 주요 목적 | 일반적인 가용성 |
|---|---|---|
| INBOUND | 입하·검수·미적치 | Unavailable |
| STORAGE | 장기 보관 | 조건 충족 시 Available |
| PICK | 빠른 피킹 | Available 또는 Allocated |
| PACK | 검수·포장 | WIP |
| STAGING | 상차 대기 | WIP |
| HOLD | 품질·운영 보류 | Unavailable |
| DEFECT | 불량 격리 | Unavailable |

## Location 정책

- 수용 가능한 상품 유형, 온도, 크기와 중량을 정의합니다.
- 혼적 허용 여부와 최대 SKU·LOT 수를 정합니다.
- 보관용인지 피킹용인지 역할을 명확히 합니다.
- 폐쇄·점검 중인 Location에는 신규 적치를 금지합니다.
- 바닥, 랙, 선반 등 물리 단위와 시스템 주소를 일관되게 매핑합니다.

## 학습용 예시

같은 SKU 100 EA 중 80 EA는 STORAGE에, 20 EA는 PICK Location에 둘 수 있습니다. 총량은 100 EA로 같지만 빠른 출고를 위해 PICK Location의 최소 수량을 유지하는 보충 정책이 필요합니다.

## 확인 문제

1. 반품 Zone에 들어온 상품을 즉시 Available로 만들면 어떤 위험이 있을까요?
2. 도크에 오래 머무는 재고를 추적하려면 어떤 상태나 임시 Location이 필요할까요?
3. PICK Location과 STORAGE Location의 최대 수량 정책은 왜 다를까요?

## 다음 학습

[입고 프로세스](/process/inbound)에서 도크를 통과한 상품이 어떻게 Location에 안착하는지 살펴보세요.
