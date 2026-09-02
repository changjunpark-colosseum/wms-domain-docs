---
title: 입고
description: 입고 주문부터 입하·검수·입고 작업·적치·예외와 완료까지의 도메인 구조
---

# 입고

<div class="page-meta"><span>입고</span><span>도메인 개요</span><span>8분</span></div>

입고는 창고에 들어올 상품을 주문으로 정의하고, 실제 도착한 상품을 검수해 적합한 Location에 적치한 뒤 전체 입고 상태를 종결하는 과정이다. 현재 CGKR에서는 재고가 마지막 입고완료 시점에 한꺼번에 생성되지 않고 각 적치 스캔에서 Location별로 반영된다.

::: info 현재 CGKR AS-IS
적치할 때마다 도착 Location의 재고·가용수량이 증가하고 STOW Zone 재고가 감소한다. 마지막 입고완료 처리는 재고 생성보다 상품·WRO·입고 작업의 상태를 집계하는 역할에 가깝다. Confluence 공식 정책과 목표 Inventory 모델은 별도로 확인한다.
:::

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
| 입고 완료 | 상품 상태를 집계해 입고 전체와 WRO를 종결 | 입고 전체 상태·완료일·작업 종결 표시 |

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
6. 정상 수량의 재고 반영은 각 적치 스캔에서 이루어진다.
7. 마지막 입고완료 처리에서 같은 재고 수량을 다시 증가시키지 않는다.
8. 입고 전체 상태는 상품의 `ZERO`·`STOW`·`DONE` 조합을 집계해 결정한다.
9. `EXCP`가 섞인 완료 판정은 프론트와 백엔드가 다르므로 현재 구현 검증 대상으로 남긴다.

## 문서

- [입고 주문](/inbound/order)
- [입하](/inbound/receiving)
- [검수](/inbound/inspection)
- [입고 작업](/inbound/work)
- [적치](/inbound/putaway)
- [입고 예외](/inbound/exceptions)
- [입고 완료](/inbound/completion)
