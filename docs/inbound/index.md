---
title: 입고
description: 입고 주문부터 입하·검수·입고 작업·적치·예외와 완료까지의 도메인 구조
---

# 입고

<div class="page-meta"><span>입고</span><span>도메인 개요</span><span>8분</span></div>

입고는 창고에 들어올 상품을 주문으로 정의하고, 실제 도착한 상품을 검수해 적합한 Location에 적치한 뒤 재고로 확정하는 과정이다.

## 도메인 구조

```text
입고
├─ 입고 주문
├─ 입하
├─ 검수
├─ 입고 작업
├─ 적치
├─ 입고 예외
└─ 입고 완료
```

## 전체 흐름

<div class="flow-strip"><span>입고 주문</span><i>→</i><span>입하</span><i>→</i><span>검수</span><i>→</i><span>입고 작업</span><i>→</i><span>적치</span><i>→</i><span>입고 완료</span></div>

입고 예외는 독립된 마지막 단계가 아니다. 입하·검수·입고 작업·적치 어디에서든 발생하고, 판정이 끝나야 입고를 완료할 수 있다.

## 하위 도메인

| 하위 도메인 | 책임 | 주요 결과 |
|---|---|---|
| 입고 주문 | 무엇을 어느 센터에 얼마나 입고할지 정의 | 입고번호·예정 상품·수량 |
| 입하 | 센터에 도착한 운송·포장 단위를 인수 | 도착 수량·입하 이력 |
| 검수 | 실물의 상품·수량·재고 속성을 확정 | 정상 검수 수량·LOT·유효기간 |
| 입고 작업 | WRO와 임시 취급 단위로 현장 처리를 추적 | 작업 상태·임시빈·STOW Zone |
| 적치 | 검수된 재고를 최종 Location에 배치 | Location별 Stock |
| 입고 예외 | 부족·초과·파손·정보 불일치를 판정 | 확정·기각·회송·HOLD 결과 |
| 입고 완료 | 모든 수량을 종결하고 재고 사건을 확정 | Inventory·Stock·수불 이력 |

## 객체 관계

```text
Inbound Order
├─ Receiving Result
├─ Inspection Result
│  └─ SKU Instance
├─ Inbound Work
│  ├─ WRO
│  └─ Temporary Handling Unit
├─ Putaway Result
└─ Inbound Exception
```

## 공통 정책

1. 예정 수량과 실제 처리 수량을 구분한다.
2. 입고 주문 원장을 현장 결과로 덮어쓰지 않는다.
3. 상품·수량·작업자·시각과 상태 변경 이력을 보존한다.
4. 같은 수량을 여러 작업에서 중복 처리하지 않는다.
5. 예외 수량은 정상 수량과 분리해 판정한다.
6. 모든 정상 수량의 적치와 예외 종결이 끝난 뒤 입고를 완료한다.
7. 입고 완료 사건은 한 번만 Inventory·Stock에 반영한다.

## 문서

- [입고 주문](/inbound/order)
- [입하](/inbound/receiving)
- [검수](/inbound/inspection)
- [입고 작업](/inbound/work)
- [적치](/inbound/putaway)
- [입고 예외](/inbound/exceptions)
- [입고 완료](/inbound/completion)
