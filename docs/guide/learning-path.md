---
title: 추천 학습 경로
description: 입문자, 기획자, 개발자와 QA가 WMS를 공부하는 순서와 완료 기준을 제시합니다.
---

# 추천 학습 경로

<div class="page-meta"><span>가이드</span><span>역할별</span><span>5분</span></div>

모든 문서를 순서대로 읽을 필요는 없습니다. 자신의 역할에서 자주 내리는 결정을 기준으로 시작하세요.

## 공통 핵심 경로

```text
WMS 개요
→ 상품·SKU
→ Zone·Location
→ 입고·적치
→ Inventory·Stock·LPN
→ 이동·보충·실사·폐기
→ 출고·피킹·패킹·송장
→ 반품
→ 정산
→ 전체 도메인 맵
```

## 입문자

**목표:** 용어를 외우기보다 물건이 창고를 통과하는 순서를 설명합니다.

1. [WMS 한눈에 보기](/guide/overview)
2. [상품과 SKU](/fundamentals/product-sku)
3. [입고 프로세스](/process/inbound)
4. [출고 프로세스](/process/outbound)
5. [용어 사전](/reference/glossary)

완료 조건은 “상품 등록과 재고 추가가 왜 다른지”를 자신의 말로 설명하는 것입니다.

## 기획자

**목표:** 요구사항을 객체·상태·정책·예외로 분리합니다.

1. [전체 도메인 맵](/reference/domain-map)
2. [Inventory와 Stock](/fundamentals/inventory-stock)
3. [입고](/process/inbound)와 [출고](/process/outbound)
4. [반품](/process/returns)
5. [핵심 불변식](/reference/invariants)

완료 조건은 정상 흐름뿐 아니라 취소·부분 처리·재시도 시의 보상 흐름을 함께 정의하는 것입니다.

## 개발자

**목표:** 수량과 상태를 이벤트 기반으로 모델링하고 중복 반영을 막습니다.

1. [Inventory와 Stock](/fundamentals/inventory-stock)
2. [LPN과 재고 계보](/fundamentals/lpn)
3. [핵심 불변식](/reference/invariants)
4. [피킹](/process/picking)과 [패킹·송장·출고확정](/process/packing-shipping)
5. [조정·실사·폐기](/operations/adjustment-counting-disposal)

완료 조건은 출고 취소와 부분 이동을 총량 보존식으로 설명하고 멱등키가 필요한 사건을 식별하는 것입니다.

## QA

**목표:** 업무 흐름을 검증 가능한 시작 조건·행동·기대 결과로 바꿉니다.

1. [핵심 불변식](/reference/invariants)
2. [입고](/process/inbound)와 [적치](/process/putaway)
3. [피킹](/process/picking)과 [패킹](/process/packing-shipping)
4. [반품](/process/returns)
5. [이동과 보충](/operations/movement-replenishment)

완료 조건은 각 공정에서 수량·상태·위치·이력을 함께 검증하는 시나리오를 작성하는 것입니다.

## 공부하면서 남길 질문

- 이 상태는 업무 사실인가, 화면 표시값인가?
- 이 사건은 총량을 바꾸는가, 위치만 바꾸는가?
- 부분 처리 후 나머지 수량은 누가 소유하는가?
- 같은 요청이 두 번 오면 결과가 달라지는가?
- 실패 후 반대 이벤트나 재처리 경로가 있는가?
