---
layout: home
title: WMS Domain Docs
titleTemplate: false

hero:
  name: WMS DOMAIN DOCS
  text: 상품과 재고부터 천천히 정리합니다
  tagline: Product·SKU 기준정보와 Stock·Location·LOT·가용재고·이동·보충·조정·수불 흐름을 하나씩 정리합니다.
  actions:
    - theme: brand
      text: 상품 문서 시작
      link: /product/
    - theme: alt
      text: 재고 문서 시작
      link: /inventory/

features:
  - title: 학습형 본문
    details: 처음 보는 사람도 이해하도록 상품 객체와 흐름을 다시 설명합니다.
  - title: 상품 정책
    details: 상품 식별, 상태, 수정 제한과 시스템 전달 규칙을 정리합니다.
  - title: 재고 정책
    details: 현재 수량, 소재, 가용 상태와 재고 작업의 변경 규칙을 정리합니다.
---

<div class="home-content">
  <section class="home-section">
    <span class="section-kicker">Product documents</span>
    <h2>현재 남겨둔 문서</h2>
    <div class="domain-grid">
      <a class="study-card" href="./product/"><span class="card-label">MODEL</span><h3>Product·SKU·SKU Instance</h3><p>상품군, 판매·출고 단위와 실제 재고 식별키를 구분합니다.</p></a>
      <a class="study-card" href="./product/barcode-uom"><span class="card-label">IDENTIFICATION</span><h3>바코드·UOM</h3><p>스캔 식별자와 EA·BOX·PLT 단위 환산을 정리합니다.</p></a>
      <a class="study-card" href="./product/bundle"><span class="card-label">COMPOSITION</span><h3>Bundle·Set</h3><p>여러 SKU를 판매 구성으로 묶고 출고 단위로 전개합니다.</p></a>
      <a class="study-card" href="./product/external-sync"><span class="card-label">INTEGRATION</span><h3>외부 상품·동기화</h3><p>외부 상품 수집, 내부 매핑과 OMS·WMS 전달을 구분합니다.</p></a>
    </div>
  </section>

  <section class="home-section">
    <span class="section-kicker">Inventory documents</span>
    <h2>재고 문서</h2>
    <div class="domain-grid">
      <a class="study-card" href="./inventory/"><span class="card-label">QUERY</span><h3>재고 조회</h3><p>상품·SKU·Location·LOT별 총수량과 가용수량을 확인합니다.</p></a>
      <a class="study-card" href="./inventory/inventory"><span class="card-label">INVENTORY</span><h3>Inventory</h3><p>확정된 재고 증감 사건과 현재 장부 수량을 관리합니다.</p></a>
      <a class="study-card" href="./inventory/stock"><span class="card-label">STOCK</span><h3>Stock</h3><p>특정 Location에 존재하는 실물 수량과 상태를 설명합니다.</p></a>
      <a class="study-card" href="./inventory/location"><span class="card-label">LOCATION</span><h3>Location</h3><p>Stock이 놓이는 창고 주소와 작업 가능 조건을 정리합니다.</p></a>
      <a class="study-card" href="./inventory/lot-expiration"><span class="card-label">TRACEABILITY</span><h3>LOT·유효기간</h3><p>같은 SKU의 실물 그룹과 기간 정보를 구분합니다.</p></a>
      <a class="study-card" href="./inventory/availability-hold"><span class="card-label">AVAILABILITY</span><h3>가용재고·HOLD</h3><p>총수량 안에서 작업 가능한 수량과 보류 수량을 관리합니다.</p></a>
      <a class="study-card" href="./inventory/movement"><span class="card-label">MOVEMENT</span><h3>이동</h3><p>수량을 보존하며 Stock의 Location을 변경합니다.</p></a>
      <a class="study-card" href="./inventory/replenishment"><span class="card-label">REPLENISHMENT</span><h3>보충</h3><p>보관 Stock을 피킹 Location으로 공급합니다.</p></a>
      <a class="study-card" href="./inventory/adjustment"><span class="card-label">ADJUSTMENT</span><h3>재고 조정</h3><p>관리자 입출고·가용변경·HOLD를 이력으로 기록합니다.</p></a>
      <a class="study-card" href="./inventory/ledger"><span class="card-label">LEDGER</span><h3>수불부</h3><p>재고 증가·감소 원인과 일자별 마감 수량을 추적합니다.</p></a>
    </div>
  </section>
</div>
