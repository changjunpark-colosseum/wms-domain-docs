---
title: 입고 개요
description: 입고 신청부터 입하·검수·예외·적치와 재고 반영까지의 전체 흐름
---

# 입고 개요

<div class="page-meta"><span>입고</span><span>전체 흐름</span><span>10분</span></div>

입고는 화주가 등록한 입고 예정과 실제 도착한 상품을 비교하고, 검수한 수량을 창고 Location에 적치해 재고로 반영하는 과정이다.

## 전체 흐름

<div class="flow-strip"><span>입고 신청</span><i>→</i><span>입하</span><i>→</i><span>검수</span><i>→</i><span>입고 예외·TS</span><i>→</i><span>적치</span><i>→</i><span>입고 완료·재고 반영</span></div>

## 단계별 역할

| 단계 | 확인하는 내용 | 결과 |
|---|---|---|
| 입고 신청 | 어떤 상품이 언제 얼마나 올 예정인가 | 입고 신청번호·작업 대상 |
| 입하 | BOX·PALLET 등 물량이 실제 도착했는가 | 입하 수량·입하 Zone |
| 검수 | SKU·수량·LOT·유효기간이 맞는가 | 정상 검수 수량 |
| 예외·TS | 초과·파손·불일치를 어떻게 처리할 것인가 | 예외 수량·판정 결과 |
| 적치 | 상품을 어느 Location에 둘 것인가 | Stock Location 확정 |
| 완료 | 처리 수량과 예외가 모두 종결됐는가 | Inventory·Stock 증가 |

## 공통 정책

1. 신청 수량과 실제 처리 수량을 덮어쓰지 않고 따로 보존한다.
2. 누적 수량과 남은 수량을 기준으로 중복 처리를 막는다.
3. 정상 처리와 예외 수량을 구분한다.
4. 작업자, 처리시각과 수량 이력을 남긴다.
5. 모든 입하·검수·적치·예외가 끝난 뒤 입고를 완료한다.
6. 같은 입고 완료 요청을 반복해도 재고를 두 번 증가시키지 않는다.

## 관련 문서

- [입고 신청](/inbound/request)
- [입하](/inbound/receiving)
- [검수](/inbound/inspection)
- [입고 예외·TS](/inbound/exceptions)
- [적치](/inbound/putaway)
- [입고 완료·재고 반영](/inbound/completion)
