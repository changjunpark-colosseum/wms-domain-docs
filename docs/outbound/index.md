---
title: 출고 개요
description: 출고 신청부터 작업 생성·피킹·패킹·상차와 출고 완료까지의 전체 흐름
---

# 출고 개요

<div class="page-meta"><span>출고</span><span>전체 흐름</span><span>10분</span></div>

출고는 주문한 상품을 센터 재고에서 찾아 작업으로 만들고, 피킹·패킹·상차를 거쳐 창고 밖으로 보내는 과정이다. 택배 배송에 필요한 주소 정제와 송장 처리는 별도의 배송·송장 도메인이 담당한다.

## 전체 흐름

<div class="flow-strip"><span>출고 신청·주문</span><i>→</i><span>작업 생성·할당</span><i>→</i><span>피킹</span><i>→</i><span>PACK Zone 인계</span><i>→</i><span>패킹</span><i>→</i><span>배송·송장 연계</span><i>→</i><span>상차·출고 완료</span></div>

## 단계별 역할

| 단계 | 처리 내용 | 결과 |
|---|---|---|
| 출고 신청·주문 | 출고 상품·수량·수취·배송 정보 등록 | 출고번호·출고 대상 |
| 작업 생성 | 출고를 피킹 방식으로 묶고 Stock 수량 예약 | 피킹 작업번호·계획 수량 |
| 작업자 할당 | 미배정 작업을 지정하거나 작업자가 가져감 | 작업자·WAIT 상태 |
| 피킹 | 피킹로케이션(`PICK`)에서 상품을 Cart·Con으로 이동 | 피킹 수량·PACK Zone Stock |
| 패킹 | 주문·내용물·Box·송장을 검수 | 패킹 완료·NG |
| 배송·송장 연계 | B2C 택배 출고의 주소 정제·발번·출력 결과 사용 | Box에 연결된 유효 송장 |
| 상차·완료 | 차량·택배사 인계와 재고 차감 | 출고 완료·실제 발송일 |

## B2C·B2B 피킹

| 구분 | 방식 | PDA 흐름 |
|---|---|---|
| B2C | 개별 | Cart → Location → 상품 → PACK Zone |
| B2C | 클러스터 | Cart → Location → 상품 → 주문별 Con → PACK Zone |
| B2C | 총량 | Con → Location → 상품 → PACK Zone |
| B2B | B2B 피킹 | 작업번호 → Con → Location → 상품 → PACK Zone |

## 공통 정책

1. 출고 주문·피킹 작업·패킹·송장·출고 완료 상태를 구분한다.
2. 작업 생성 수량은 현재 사용할 수 있는 Stock 수량을 초과할 수 없다.
3. 한 작업 또는 총량 피킹 슬립에는 한 명의 작업자만 지정한다.
4. 피킹 수량은 PACK Zone 인계 전후에도 주문·SKU와 연결돼야 한다.
5. 패킹 완료와 송장 발번만으로 출고 완료 처리하지 않는다.
6. 출고 완료에서 Inventory·Stock과 수불부를 한 번만 감소시킨다.
7. 취소·재고부족·NG는 정상 완료와 별도 이력으로 남긴다.

## 관련 문서

- [출고 신청·주문](/outbound/order)
- [엑셀 출고 신청](/outbound/excel-application)
- [작업 생성·할당](/outbound/work-assignment)
- [피킹 개요](/outbound/picking)
- [Cart·Con](/outbound/cart-con)
- [B2C 피킹](/outbound/picking-b2c)
- [B2B 피킹](/outbound/picking-b2b)
- [개별 피킹](/outbound/picking-individual)
- [클러스터 피킹](/outbound/picking-cluster)
- [총량 피킹](/outbound/picking-total)
- [예외 피킹·재고부족](/outbound/picking-exceptions)
- [패킹](/outbound/packing)
- [배송·송장](/shipping/)
- [상차](/outbound/loading)
- [출고 완료](/outbound/completion)
- [취소·재고 복구](/outbound/cancellation)
