---
title: Location
description: Stock이 놓이는 창고 주소와 보관·피킹·입하·적치 작업 가능 조건을 관리하는 정책
---

# Location

<div class="page-meta"><span>재고</span><span>창고 주소</span><span>10분</span></div>

Location은 Stock이 놓이거나 작업 중 이동하는 구체적인 창고 주소다. 주소는 단순 문자열이 아니라 센터 안의 공간을 단계별로 좁혀 가는 계층으로 이해해야 한다.

```text
Center
└─ Zone
   └─ Aisle
      └─ Bay
         └─ Tier
            └─ Slot (Location)
               └─ Stock
```

## Location 계층

| 계층 | 의미 | 예시 |
|---|---|---|
| Center | 하나의 물류센터 | 용인 1센터 |
| Zone | 같은 작업 목적과 정책을 공유하는 구역 | PICK·STORAGE·PACK |
| Aisle | 작업자가 이동하는 통로 또는 랙 열 | A01 |
| Bay | Aisle 안에서 가로로 나눈 랙 한 구간 | B03 |
| Tier | Bay를 높이 방향으로 나눈 단 | T02 |
| Slot | Tier 안에서 Stock을 놓는 최소 칸 | S04 |
| Location | 실제 스캔·재고 귀속에 사용하는 최종 주소 | A01-B03-T02-S04 |

```text
PICK / A01 / B03 / T02 / S04
  │      │     │     │     └─ 네 번째 칸
  │      │     │     └────── 두 번째 단
  │      │     └──────────── 세 번째 Bay
  │      └────────────────── 첫 번째 Aisle
  └───────────────────────── 피킹 Zone
```

여기서 `Slot`은 물리 공간의 최소 단위이고, `Location`은 WMS가 그 공간에 부여한 관리 주소다. 센터 운영 방식에 따라 Slot 하나가 Location 하나가 되거나, 바닥 적재처럼 Bay 전체를 하나의 Location으로 사용할 수도 있다. 따라서 모든 Location이 반드시 다섯 단계를 물리적으로 갖는 것은 아니지만, 코드만 보고도 공간을 찾을 수 있도록 같은 센터에서는 주소 규칙을 일관되게 유지한다.

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
- Center·Zone·Aisle·Bay·Tier·Slot
- 보관·피킹 등 용도
- 활성·HOLD 상태
- 바닥·랙·선반 등 물리 유형
- 허용 상품·화주
- 최대 수량·중량·부피

## Location 생성

Location은 센터의 주소 체계와 작업 목적을 먼저 정한 뒤 생성한다.

```text
Center·Zone 선택
→ Aisle·Bay·Tier·Slot 입력
→ Location 코드 중복 확인
→ 물리 유형·용도·Capacity 설정
→ 바코드 발행
→ Active·EMPTY 상태로 사용 시작
```

### 생성 정책

1. 상위 Center와 Zone이 활성 상태여야 한다.
2. Location 코드와 Aisle·Bay·Tier·Slot 조합은 같은 센터 안에서 중복될 수 없다.
3. RACK·SHELF·FLOOR·DOCK 같은 물리 유형과 STORAGE·PICK·PACK 같은 작업 용도를 구분해 등록한다.
4. 최대 수량·중량·부피 등 Capacity를 설정한 뒤 적치에 사용한다.
5. 고정 Location은 허용 화주·SKU를 함께 지정하고, 자유 Location은 비어 있을 때 다른 SKU를 받을 수 있다.
6. 생성 직후에는 Stock이 없는 `EMPTY`이며, 입고·이동·보충이 완료돼야 Stock이 귀속된다.
7. 실제 작업에 사용하기 전 Location 바코드를 출력하고 물리 위치에 부착한다.

## Location 종료·삭제

Location 삭제는 주소 문자열을 지우는 일이 아니다. Stock과 작업을 안전하게 비운 뒤 더 이상 사용하지 못하도록 상태를 종료하는 절차다.

```text
종료 요청
→ Closing Planned 전환
→ 신규 적치·할당 차단
→ 남은 Stock·LPN 이동
→ 진행 중 작업 해제·완료
→ 잔량 0·참조 관계 확인
→ Inactive 전환
```

### 삭제할 수 없는 경우

| 조건 | 삭제를 막는 이유 | 처리 방법 |
|---|---|---|
| Stock 수량이 남아 있음 | 실물 재고의 소재가 사라짐 | 다른 Location으로 전량 이동 |
| LPN·Cart·Con이 연결돼 있음 | 운반체와 내용물의 현재 위치가 끊김 | 연결 해제 또는 이동 완료 |
| 입고·이동·보충·피킹 작업이 진행 중 | 작업의 출발지·도착지가 유실됨 | 작업 완료·취소 후 재확인 |
| 할당·HOLD 수량이 남아 있음 | 가용재고와 작업 예약이 불일치함 | 할당·HOLD 해제 또는 정상 이관 |
| 이동·피킹·수불 이력이 있음 | 과거 작업 기록의 주소 참조가 깨짐 | 물리 삭제 대신 Inactive 전환 |

### 종료 정책

1. Stock이 `0`이 아니면 Location을 삭제하거나 Inactive로 종료할 수 없다.
2. 화면상 수량뿐 아니라 LPN·가용·할당·HOLD·작업중 수량이 모두 `0`인지 확인한다.
3. 종료를 시작하면 먼저 `Closing Planned`로 전환해 신규 적치·할당을 차단한다.
4. 잔존 Stock을 이동하는 동안 기존 재고의 피킹·정리 작업은 허용할 수 있다.
5. Stock과 진행 중 작업이 모두 사라진 뒤 `Inactive`로 전환한다.
6. 한 번이라도 작업에 사용된 Location은 이력 보존을 위해 물리 삭제하지 않는다.
7. 사용 이력이 있는 Location 코드를 다른 물리 위치에 재사용하지 않는다.
8. 잘못 생성됐고 Stock·LPN·작업·이력이 전혀 없는 Location만 권한 있는 관리자가 물리 삭제할 수 있다.
9. 종료·삭제에는 작업자, 처리 시각과 사유를 기록한다.

## Location 상태

| 상태 | 신규 적치 | 할당·피킹 | 의미 |
|---|---:|---:|---|
| Active | 허용 | 허용 | 정상 운영 중 |
| HOLD | 정책에 따라 허용 | 차단 | 일시적인 사용 제한 |
| Closing Planned | 차단 | 잔존 재고 정리만 허용 | 종료 준비 중 |
| Inactive | 차단 | 차단 | 사용 종료, 이력 조회만 가능 |

## 정책

1. Location 코드는 센터 안에서 유일해야 한다.
2. 사용 이력이 있는 코드는 삭제하거나 재사용하지 않고 상태로 종료한다.
3. 비활성 Location에는 신규 Stock을 이동·적치하지 않는다.
4. HOLD Location은 신규 작업 대상에서 제외한다.
5. 도착 Location의 Center·Zone·상품·용량 조건을 검증한다.
6. Stock 이동 후 출발지와 도착지의 점유 상태를 다시 계산한다.
7. 피킹 Location과 보관 Location의 역할을 구분한다.
8. PACK Zone은 출고 작업 중 재고가 머무는 구역이며 장기 보관이나 신규 재고 할당에 사용하지 않는다.
9. Aisle·Bay·Tier·Slot 조합은 같은 센터 안에서 하나의 Location만 가리켜야 한다.
10. 계층 일부를 사용하지 않는 바닥·도크 Location도 센터의 코드 규칙에 따라 식별 가능해야 한다.

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
