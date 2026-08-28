---
title: 외부 연동
description: 외부 채널·COLO·OMS와 CGKR 사이의 상품·주문·재고·출고 결과 동기화 경계를 설명합니다.
---

# 외부 연동

<div class="page-meta"><span>연동</span><span>시스템 경계</span><span>8분</span></div>

외부 연동은 쇼핑몰·COLO·OMS의 커머스 데이터를 CGKR이 실행할 수 있는 물류 데이터로 바꾸고, 센터 작업 결과를 다시 외부 시스템에 전달하는 영역이다.

## 주문 연동 다이어그램

<div class="integration-pipeline" role="img" aria-label="외부 채널에서 CGKR로 주문이 들어오고 결과가 다시 외부 채널로 돌아가는 흐름">
  <div class="integration-node integration-node-external">
    <span>외부 요청</span><strong>외부 채널·COLO</strong><small>상품·주문·변경·취소</small>
  </div>
  <div class="integration-arrow"><span>상품·주문 Push API</span></div>
  <div class="integration-node integration-node-service">
    <span>수집·검증</span><strong>cgkr_oms</strong><small>인증·검증·외부 형식 정규화</small>
  </div>
  <div class="integration-arrow"><span>원본·이력·WAIT 상태 저장</span></div>
  <div class="integration-node integration-node-data">
    <span>연동 대기</span><strong>ITF 연동 대기 영역</strong><small>상품·주문 원본과 동기화 상태</small>
  </div>
  <div class="integration-arrow integration-arrow-timed"><span>이전 실행 완료 후 1분</span></div>
  <div class="integration-node integration-node-service">
    <span>주기 동기화</span><strong>cgkr_batch</strong><small>상품 매핑 → 신규 주문 → 변경·취소</small>
  </div>
  <div class="integration-arrow"><span>내부 동기화 API</span></div>
  <div class="integration-node integration-node-service">
    <span>업무 객체 생성</span><strong>cgkr_app</strong><small>Product·SKU·CGKR 출고 주문</small>
  </div>
  <div class="integration-arrow"><span>물류 작업 생성·실행</span></div>
  <div class="integration-node integration-node-work">
    <span>센터 실행</span><strong>CGKR 물류 작업</strong><small>입고·재고·출고·반품</small>
  </div>
  <div class="integration-arrow"><span>출고 완료·송장 사건</span></div>
  <div class="integration-node integration-node-result">
    <span>결과 회신</span><strong>cgkr_oms 결과·웹훅 큐</strong><small>대표·추가 송장, 송장 취소, fulfillment</small>
  </div>
  <div class="integration-arrow integration-arrow-timed"><span>이전 실행 완료 후 1분</span></div>
  <div class="integration-node integration-node-external">
    <span>결과 반영</span><strong>외부 채널·COLO</strong><small>배송·fulfillment 상태 갱신</small>
  </div>
</div>

## 전체 구조

![외부 채널·COLO, cgkr_oms, ITF, cgkr_batch와 CGKR 사이의 상품·주문 수집, 주기 동기화와 결과 회신 시퀀스](/diagrams/order-integration-sequence.svg)

## 구성 요소

| 구성 요소 | 책임 |
|---|---|
| 외부 채널·COLO | 상품·주문·변경·취소 요청과 결과 소비 |
| cgkr_oms | 연동 인증, 외부 형식 검증·정규화, ITF 수집과 결과 웹훅 |
| ITF 수집 테이블 | 상품·주문 원본과 동기화 상태·이력 보존 |
| cgkr_batch | 대기 상품·주문을 주기적으로 CGKR에 동기화 |
| cgkr_app | 실제 Product·SKU·출고 주문과 WMS 업무 규칙 실행 |

## 데이터 방향

| 방향 | 데이터 |
|---|---|
| 외부 → CGKR | 상품, 주문, 주문 변경·취소, 반품 요청 |
| CGKR → 외부 | 출고 완료, 대표·추가 송장, 송장 취소, 재고 결과 |

## 화면 연결과 데이터 연동

CGKR 안에서 COLO 화면을 iframe으로 여는 것과 데이터를 API·배치로 동기화하는 것은 다르다.

- 화면 연결 실패: 사용자는 COLO 화면에 접근하지 못함
- 데이터 연동 실패: 상품·주문·결과가 대상 시스템에 생성되지 않음

화면이 정상적으로 보여도 데이터 동기화가 성공했다고 단정하지 않는다.

## 공통 정책

1. 외부 식별자와 내부 식별자의 매핑을 보존한다.
2. 수집 상태, 내부 동기화 상태와 업무 상태를 구분한다.
3. 같은 요청을 다시 받아도 상품·주문을 중복 생성하지 않는다.
4. 오래된 변경이 최신 상태를 덮어쓰지 않게 한다.
5. 연동 실패 사유와 마지막 성공 시각을 조회할 수 있어야 한다.
6. 실패 재전송이 Inventory·Stock과 출고 사건을 중복 실행하지 않게 한다.
7. 화주·센터·채널 연결정보와 접근 권한을 함께 검증한다.
8. 한 방향의 성공만으로 전체 연동 완료를 선언하지 않는다.

## 문서

- [주문 연동](/integration/order-sync)
- [외부 상품·동기화](/product/external-sync)
- [COLO 1.0](/other/colo-1)
- [G마켓 스타배송](/other/gmarket-star-delivery)
- [배송·송장](/shipping/)
