---
title: LPN
description: SKU Instance 재고 묶음을 적치·이동·추적하기 위한 물류 식별 단위와 계보 정책
---

# LPN

<div class="page-meta"><span>재고</span><span>취급 단위</span><span>9분</span></div>

LPN은 SKU Instance 재고 수량을 하나의 물리 묶음으로 식별해 적치·이동·보충·피킹 과정에서 추적하기 위한 물류 번호다.

```text
SKU Instance
├─ LPN-A · 40EA · Location A
└─ LPN-B · 60EA · Location B
```

## LPN 정보

- LPN 코드
- SKU Instance
- 현재 수량
- 품질·가용 상태
- 현재 Location 또는 운반체
- 부모·자식 LPN
- 생성·분할·병합·종료 이력
- 외부 PLT·SSCC 참조

## 정책

1. 한 LPN에는 하나의 SKU Instance만 담는다.
2. LPN 코드·SKU Instance·최초 수량은 생성 뒤 임의 변경하지 않는다.
3. 이동 전후 LPN 수량을 보존한다.
4. 분할된 Child LPN의 수량 합은 원본 수량과 같아야 한다.
5. 병합은 SKU Instance·품질·상태가 호환되는 LPN끼리만 허용한다.
6. 작업 중인 LPN은 다른 물리 작업에서 동시에 점유하지 않는다.
7. 외부 PLT·SSCC는 내부 LPN을 대체하지 않고 참조로 연결한다.
8. 잔량·진행 작업·반환 예정이 모두 없을 때만 LPN을 종료한다.
9. 종료한 LPN 코드를 새로운 재고에 재사용하지 않는다.

## LPN과 Location

LPN은 재고 묶음이고 Location은 공간 주소다. LPN이 이동하면 현재 Location이 바뀌지만 SKU Instance와 전체 수량은 유지된다.

## 임시빈 라벨과의 차이

CGKR의 STOWBIN 임시빈 라벨은 입고 검수 수량을 `ZN-STOW-1` 같은 STOW Zone과 연결하는 작업 식별자다. 분할·병합·계보를 관리하는 LPN과 같은 객체로 단정하지 않는다.

## 예외

- 여러 SKU Instance 혼합
- 분할·병합 수량 불일치
- 같은 LPN 동시 작업
- Location 없는 활성 LPN
- 종료 LPN 재사용
- 임시빈 라벨을 LPN으로 오인

## 관련 문서

- [Stock](/inventory/stock)
- [Location](/inventory/location)
- [LOT·유효기간](/inventory/lot-expiration)
- [이동](/inventory/movement)
