---
title: 피킹 개요
description: 작업자가 PICK Location의 상품을 스캔해 Cart·Con으로 옮기고 PACK Zone에 인계하는 공통 정책
---

# 피킹 개요

<div class="page-meta"><span>출고</span><span>피킹</span><span>10분</span></div>

피킹은 생성된 작업의 상품을 PICK Location에서 꺼내 Cart·Con으로 옮기고 PACK Zone에 인계하는 작업이다. B2C와 B2B는 작업 구성과 운반체 스캔 순서가 다르다.

## 공통 흐름

<div class="flow-strip"><span>작업 선택·스캔</span><i>→</i><span>Cart·Con 연결</span><i>→</i><span>Location 스캔</span><i>→</i><span>상품·수량 스캔</span><i>→</i><span>PACK Zone 스캔</span><i>→</i><span>피킹 완료</span></div>

## 공통 상태

| 상태 | 설명 |
|---|---|
| WAIT | 작업자 지정·작업 시작 전 |
| PROCESSING | 상품 스캔과 수량 처리가 진행 중 |
| DONE | 계획 수량을 처리하고 PACK Zone에 인계 |
| EXCEPTION | 재고부족·예외 수량이 존재 |
| CANCEL | 작업 취소·재고 계획 복구 |

## 정책

1. 작업자 본인에게 할당된 작업만 수행한다.
2. 지정된 PICK Location과 상품 바코드를 순서대로 확인한다.
3. 실제 피킹 수량은 남은 계획 수량을 초과할 수 없다.
4. 상품·Location 불일치 시 수량을 변경하지 않는다.
5. 피킹 중단 시 완료 수량과 남은 수량을 보존한다.
6. 모든 상품 처리가 끝난 뒤 PACK Zone으로 인계한다.
7. 피킹 완료는 출고 완료가 아니며 재고 총량을 감소시키지 않는다.
8. 재고부족·스킵·오피킹은 정상 완료와 분리한다.

## 피킹 방식

- [Cart·Con](/outbound/cart-con)
- [B2C 피킹](/outbound/picking-b2c)
- [B2B 피킹](/outbound/picking-b2b)
