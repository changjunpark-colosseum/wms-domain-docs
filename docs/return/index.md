---
title: 반품 개요
description: 원출고·송장 조회부터 반입·검수·품질 판정·양품화·폐기와 외부 완료까지의 전체 흐름
---

# 반품 개요

<div class="page-meta"><span>반품</span><span>전체 흐름</span><span>10분</span></div>

반품은 출고된 상품이 다시 센터로 돌아왔을 때 원출고와 연결하고, 상품 상태를 확인해 정상 재고로 복귀시키거나 불량·폐기로 종결하는 과정이다.

## 전체 흐름

<div class="flow-strip"><span>반품 신청·원출고 조회</span><i>→</i><span>반입</span><i>→</i><span>작업 등록·사유 입력</span><i>→</i><span>필요 시 화주사 확인</span><i>→</i><span>검수</span><i>→</i><span>양품화 또는 폐기</span><i>→</i><span>완료</span></div>

## 단계별 역할

| 단계 | 확인하는 내용 | 결과 |
|---|---|---|
| 신청·조회 | 어떤 출고·송장의 어떤 상품이 돌아오는가 | 반품번호·대상 SKU·수량 |
| 반입 | 실물이 RETURN Zone에 도착했는가 | HOLD 상태 반품 Stock |
| 작업 등록·사유 | 정상·불량 수량과 클레임·관리자 사유는 무엇인가 | 상품별 처리 수량·확정 사유·메모 |
| 화주사 확인 | 센터 판정에 화주사 확인이 필요한가 | REQR 대기 또는 APRV 승인 |
| Cart·Container | 상품을 어떤 운반체로 구분하는가 | 상품·수량·운반체 관계 |
| 검수 | 원출고 상품·수량과 실물이 일치하는가 | 검수 완료 수량 |
| 품질 판정 | 다시 판매할 수 있는가 | 양품·보류·불량 수량 |
| 양품화 | 정상 재고로 복귀할 수 있는가 | Stock·Inventory 증가 |
| 불량·폐기 | 정상 재고에 넣지 않을 수량은 무엇인가 | DEFECT·폐기 종결 |
| 완료 | 모든 상품이 종결됐는가 | 반품 완료·외부 통보 |

## 입고와의 차이

```text
입고: 새 상품을 재고로 편입
반품: 출고된 상품을 원출고와 연결해 다시 판정
```

반품은 입고와 비슷하게 실물을 반입·적치하지만 원출고·송장·품질·환불 정보가 필요하므로 별도 도메인으로 관리한다.

## 재고 반영

- RETURN Zone 반입은 일반 가용재고 증가가 아니다.
- 품질 판정 전 상품은 HOLD 상태로 분리한다.
- 양품화 완료 수량만 정상 Stock·Inventory로 증가한다.
- 불량·폐기 수량은 양품 재고에 포함하지 않는다.

## 관련 문서

- [반품 신청·원출고 조회](/return/request)
- [반입·반품 작업](/return/receiving)
- [작업 등록·사유](/return/work-registration)
- [화주사 확인](/return/seller-confirmation)
- [반품 Cart·Container](/return/cart-container)
- [반품 검수](/return/inspection)
- [품질 판정](/return/quality)
- [양품화·재입고](/return/restock)
- [불량·폐기·반송](/return/defect-disposal)
- [외부 동기화·완료](/return/completion-sync)
