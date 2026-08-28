---
title: 전체 도메인 흐름
description: 상품 등록부터 입고·재고·출고·배송과 반품까지 WMS 도메인의 연결 관계를 설명합니다.
---

# 전체 도메인 흐름

<div class="page-meta"><span>시작하기</span><span>도메인 지도</span><span>7분</span></div>

WMS 도메인은 독립된 메뉴의 모음이 아니다. 앞 단계가 만든 객체와 수량을 다음 단계가 이어받는 하나의 생명주기다.

## 정상 물류 흐름

<div class="flow-strip"><span>상품 등록</span><i>→</i><span>입고</span><i>→</i><span>Inventory·Stock</span><i>→</i><span>출고</span><i>→</i><span>배송·송장</span><i>→</i><span>반품</span></div>

| 단계 | 입력 | 주요 처리 | 결과 |
|---|---|---|---|
| 상품 | 판매·취급할 상품 정보 | Product·SKU·바코드·UOM 정의 | 재고와 작업이 참조할 기준정보 |
| 입고 | 입고 주문과 도착한 실물 | 입하·검수·작업·적치·예외 | 입고 완료 수량과 Location |
| 재고 | 확정된 재고 사건과 실물 | Inventory·Stock·Location·가용성 관리 | 현재 수량과 소재 |
| 출고 | 출고 주문 | 작업 생성·피킹·패킹·상차 | 발송 가능한 Box와 출고 결과 |
| 배송·송장 | 수취 정보와 Box | 주소 정제·택배사 선택·발번·출력 | Box에 연결된 운송번호 |
| 반품 | 원출고·송장과 회수 실물 | 반입·검수·품질 판정·양품화 | 재입고·폐기·반송 결과 |

## 객체 연결

```text
Product
└─ SKU
   └─ SKU Instance
      ├─ Inventory ── 재고 증감 사건
      └─ Stock ───── Location·수량·상태

Inbound ── Stock 생성·적치
Outbound ─ Stock 예약·피킹·출고
Box ────── Waybill 연결
Return ─── 원출고·Waybill 조회 후 품질 판정
```

## 재고 관점에서 보기

```text
입고 완료       Inventory 증가
적치·이동       Stock의 Location 변경
할당·피킹       Stock의 가용·작업 상태 변경
출고 완료       Inventory 감소
반품 양품화     Inventory 증가
실제 폐기       Inventory 감소
```

이동·보충은 실물의 위치를 바꾸지만 전체 Inventory 총량을 바꾸지 않는다. 반대로 입고 완료·출고 완료·양품화·실제 폐기처럼 창고 총량이 변하는 사건은 Inventory와 수불부에 남아야 한다.

## 도메인 간 인계 원칙

1. 앞 단계의 식별자를 다음 단계에서도 유지한다.
2. 계획 수량과 실제 처리 수량을 구분한다.
3. 상태 변경과 수량 변경의 시점을 명확히 한다.
4. 실패한 작업을 정상 완료로 덮지 않고 예외로 남긴다.
5. 같은 재고 사건을 여러 도메인에서 중복 반영하지 않는다.

## 이어서 보기

- [핵심 용어](/getting-started/glossary)
- [상품](/product/)
- [재고](/inventory/)
- [입고](/inbound/)
- [출고](/outbound/)
- [배송·송장](/shipping/)
- [반품](/return/)
