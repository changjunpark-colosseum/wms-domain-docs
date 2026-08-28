---
title: Location
description: Stock이 놓이는 창고 주소와 보관·피킹·입하·적치 작업 가능 조건을 관리하는 정책
---

# Location

<div class="page-meta"><span>재고</span><span>창고 주소</span><span>10분</span></div>

Location은 Stock이 놓이거나 작업 중 이동하는 구체적인 창고 주소다.

```text
Center
└─ Zone
   └─ Location
      └─ Stock
```

## Location과 Zone

Zone은 같은 업무 목적을 가진 Location의 묶음이다.

| Zone 예시 | 역할 |
|---|---|
| INBOUND | 입하·검수 전후 재고가 머무는 구역 |
| STOW | 적치 작업을 준비하는 구역 |
| STORAGE | 장기 보관 Location |
| PICK | 출고 피킹에 사용하는 Location |
| PACK | 피킹 완료 재고를 인계받아 패킹 검수·Box 구성·송장 작업을 수행하는 구역 |
| RETURN | 반품 검수 전 재고 구역 |
| DEFECT·DISPOSAL | 불량·폐기 대상 격리 구역 |

## Location 정보

- Location 코드
- Center·Zone
- 보관·피킹 등 용도
- 활성·HOLD 상태
- 바닥·랙·선반 등 물리 유형
- 허용 상품·화주
- 최대 수량·중량·부피

## 정책

1. Location 코드는 센터 안에서 유일해야 한다.
2. 사용 이력이 있는 코드는 삭제하거나 재사용하지 않고 상태로 종료한다.
3. 비활성 Location에는 신규 Stock을 이동·적치하지 않는다.
4. HOLD Location은 신규 작업 대상에서 제외한다.
5. 도착 Location의 Center·Zone·상품·용량 조건을 검증한다.
6. Stock 이동 후 출발지와 도착지의 점유 상태를 다시 계산한다.
7. 피킹 Location과 보관 Location의 역할을 구분한다.
8. PACK Zone은 출고 작업 중 재고가 머무는 구역이며 장기 보관이나 신규 재고 할당에 사용하지 않는다.

## Location은 수량이 아니다

Location을 생성했다고 Stock이 생기지 않는다. Location은 주소를 제공하고, 입고·이동·보충 작업이 Stock을 해당 주소에 배치한다.

## 이동 검증

```text
출발 Location 스캔
→ Stock 확인
→ 도착 Location 스캔
→ Location 정책 검증
→ Stock 소재 변경
```
