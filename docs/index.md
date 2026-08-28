---
layout: home
title: Warehouse Atlas
titleTemplate: false

hero:
  name: WMS DOMAIN HANDBOOK
  text: 창고의 모든 흐름을 하나의 지도로
  tagline: 상품이 등록되고, 입고되어 재고가 되고, 피킹과 패킹을 거쳐 출고되기까지. WMS의 객체·상태·정책을 순서대로 배웁니다.
  image:
    src: /hero-warehouse.svg
    alt: 상품에서 정산까지 이어지는 WMS 도메인 흐름
  actions:
    - theme: brand
      text: 처음부터 학습하기
      link: /guide/overview
    - theme: alt
      text: 전체 도메인 맵 보기
      link: /reference/domain-map

features:
  - title: 흐름으로 이해
    details: 화면 메뉴가 아니라 상품과 재고가 어떤 사건을 거쳐 상태를 바꾸는지 추적합니다.
  - title: 개념을 분리
    details: Product와 SKU, Inventory와 Stock, Zone과 Location처럼 자주 섞이는 개념을 구분합니다.
  - title: 정책으로 검증
    details: 수량 보존, 멱등성, 추적 가능성 등 구현이 달라도 유지되어야 할 원칙을 정리합니다.
---

<div class="home-content">
  <section class="home-section">
    <span class="section-kicker">End-to-end flow</span>
    <h2>5분 만에 보는 전체 흐름</h2>
    <p class="section-lead">각 도메인은 독립된 메뉴가 아니라 같은 상품과 재고를 서로 다른 책임으로 이어받는 과정입니다.</p>
    <DomainJourney />
  </section>

  <section class="home-section">
    <span class="section-kicker">Choose your path</span>
    <h2>어떤 관점으로 공부할까요?</h2>
    <p class="section-lead">역할에 따라 먼저 확인해야 할 질문이 다릅니다. 원하는 카드에서 시작해도 전체 학습 경로로 다시 합류합니다.</p>
    <div class="role-grid">
      <a class="study-card" href="./guide/learning-path#입문자">
        <span class="card-label">BEGINNER · 60 MIN</span>
        <h3>입문자</h3>
        <p>용어와 전체 물류 흐름을 먼저 잡고 각 단계가 왜 필요한지 이해합니다.</p>
      </a>
      <a class="study-card" href="./guide/learning-path#기획자">
        <span class="card-label">PRODUCT · 90 MIN</span>
        <h3>기획자</h3>
        <p>업무 경계, 상태 전이, 정책과 예외를 중심으로 요구사항을 구조화합니다.</p>
      </a>
      <a class="study-card" href="./guide/learning-path#개발자">
        <span class="card-label">ENGINEERING · 120 MIN</span>
        <h3>개발자</h3>
        <p>식별자, 재고 항등식, 이벤트와 멱등성을 중심으로 시스템 모델을 읽습니다.</p>
      </a>
      <a class="study-card" href="./guide/learning-path#qa">
        <span class="card-label">QUALITY · 90 MIN</span>
        <h3>QA</h3>
        <p>시작 조건, 완료 조건, 수량 보존과 보상 흐름을 검증 시나리오로 바꿉니다.</p>
      </a>
    </div>
  </section>

  <section class="home-section">
    <span class="section-kicker">Core domains</span>
    <h2>핵심 도메인</h2>
    <p class="section-lead">도메인마다 소유하는 객체와 사건이 다릅니다. 먼저 책임의 경계를 확인하세요.</p>
    <div class="domain-grid">
      <a class="study-card" href="./fundamentals/product-sku"><span class="card-label">MASTER DATA</span><h3>상품</h3><p>Product, SKU, 바코드와 포장 단위를 정의합니다.</p></a>
      <a class="study-card" href="./process/inbound"><span class="card-label">RECEIVING</span><h3>입고</h3><p>도착한 실물을 확인하고 재고 총량에 편입합니다.</p></a>
      <a class="study-card" href="./fundamentals/inventory-stock"><span class="card-label">INVENTORY</span><h3>재고</h3><p>수량, 위치, 품질과 사용 가능성을 추적합니다.</p></a>
      <a class="study-card" href="./process/outbound"><span class="card-label">FULFILLMENT</span><h3>출고</h3><p>주문에 재고를 할당하고 집품·포장·발송합니다.</p></a>
      <a class="study-card" href="./process/returns"><span class="card-label">REVERSE FLOW</span><h3>반품</h3><p>돌아온 상품의 품질을 판정해 재입고하거나 종결합니다.</p></a>
      <a class="study-card" href="./operations/settlement"><span class="card-label">BILLING</span><h3>정산</h3><p>물류 활동을 사용량과 비용으로 환산해 대사합니다.</p></a>
    </div>
  </section>

  <section class="home-section">
    <span class="section-kicker">Common questions</span>
    <h2>자주 헷갈리는 개념</h2>
    <p class="section-lead">이 네 가지를 구분하면 WMS 화면과 정책을 훨씬 빠르게 읽을 수 있습니다.</p>
    <div class="question-grid">
      <div class="question-card"><strong>상품 등록과 재고 추가는 왜 다른가?</strong><span>상품은 기준정보, 재고는 특정 장소에 존재하는 수량입니다.</span></div>
      <div class="question-card"><strong>도크와 로케이션은 어떻게 다른가?</strong><span>도크는 차량 접점, 로케이션은 재고를 식별해 두는 주소입니다.</span></div>
      <div class="question-card"><strong>이동과 보충은 같은 작업인가?</strong><span>둘 다 위치를 바꾸지만 보충은 피킹 가용성을 회복한다는 목적이 있습니다.</span></div>
      <div class="question-card"><strong>반품은 다시 입고하면 끝인가?</strong><span>품질 판정 전에는 정상 재고와 격리하고 경로별로 종결해야 합니다.</span></div>
    </div>
  </section>
</div>
