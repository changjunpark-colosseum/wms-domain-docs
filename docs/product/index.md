---
title: Product·SKU·SKU Instance
description: WMS 상품 도메인의 Product, SKU Master와 실제 재고 식별 단위를 구분하고 전체 정책을 설명
---

# Product·SKU·SKU Instance

<div class="page-meta"><span>상품</span><span>핵심 모델</span><span>12분</span></div>

상품 도메인은 창고가 **무엇을 입고하고, 어떤 단위로 재고를 세며, 무엇을 출고하는지** 정의한다. 상품을 등록하는 것과 실제 재고 수량을 만드는 것은 다른 일이다.

## 객체 구조

```text
Product
└─ SKU Master
   └─ SKU Instance
      └─ Inventory·Stock
```

| 객체 | 설명 | 예시 |
|---|---|---|
| Product | 같은 상품 정체성을 공유하는 상품군 | 러닝화 |
| SKU Master | 판매·입출고·재고를 구분하는 구체적인 단위 | 검정색 / 270mm |
| SKU Instance | LOT·유효기간·입고회차 등으로 나눈 실제 재고 식별키 | LOT-A / 2027-12-31 |
| Inventory·Stock | SKU Instance에 속하는 장부·실물 수량 | A센터 A-01 Location 10EA |

## Product

Product는 여러 옵션과 SKU를 하나의 상품군으로 묶는다.

- 상품명, 브랜드, 카테고리와 상품 유형을 관리한다.
- 색상·사이즈 등 옵션 속성과 값을 정의한다.
- 하나의 SKU는 동시에 하나의 Product에만 연결한다.
- SKU 연결을 변경하더라도 과거 입출고·재고 이력은 유지한다.
- 운영 이력이 있는 Product는 삭제보다 운영종료 상태로 전환한다.

## SKU Master

SKU Master는 WMS가 실제로 식별하고 수량을 처리하는 기준 단위다.

- SKU 코드는 테넌트 범위에서 유일해야 한다.
- 바코드, UOM, 상품 유형과 재고관리 여부를 가진다.
- LOT·유효기간·제조일·시리얼 관리 기준을 정의한다.
- 입고·출고·재고 이력에 사용된 식별 속성은 변경을 제한한다.
- 사용을 중단할 때는 삭제하지 않고 비활성화 또는 운영종료한다.

## SKU Instance

같은 SKU라도 다음 값이 다르면 별도의 SKU Instance로 관리한다.

- LOT
- 제조일·유효기간
- 입고번호·입고회차
- 시리얼 또는 별도 재고 관리 속성

SKU Instance는 상품 등록 시점이 아니라 입고 검수에서 실물값을 확정할 때 생성된다.

## 상태

| 상태 | 의미 | 허용 행위 |
|---|---|---|
| ACTIVE | 정상 운영 중 | 입고·재고·출고에서 사용 |
| INACTIVE | 일시 사용 중지 | 신규 업무 진입 제한 |
| DISCONTINUED | 운영 종료 | 과거 이력 조회만 허용 |

상태 전환은 과거 주문과 재고의 식별 관계를 삭제하지 않는다.

## 상품 생성·전달 흐름

<div class="flow-strip"><span>COLO·OMS 상품 등록</span><i>→</i><span>Product·SKU 저장</span><i>→</i><span>상품정보 전달</span><i>→</i><span>CGKR·WMS 반영</span><i>→</i><span>입고·재고·출고 기준정보로 사용</span><i>→</i><span>입고 시 SKU Instance 생성</span></div>

## 등록 주체

| 구분 | 등록·처리 주체 | WMS에서의 역할 |
|---|---|---|
| 일반 Product·SKU | COLO·OMS | 전달된 상품정보를 조회하고 입고·재고·출고 기준으로 사용 |
| Bundle 상품 | CGKR에도 구성 상품·수량을 선택하는 생성 기능이 존재 | Bundle 정의와 출고 구성 전개 |
| 부자재 상품 | CGKR에서 기존 상품을 부자재로 변경하는 기능이 존재 | 센터 운영 부자재의 조회·재고관리 여부 처리 |
| Product만 지정된 입고 | 센터 작업자가 실제 SKU를 대행 생성할 수 있음 | 검수에서 variant를 확정하고 Product에 연결 |

일반 상품의 정본 등록은 COLO·OMS에서 시작한다. CGKR·WMS는 전달받은 상품정보를 물류 기준정보로 사용하며, 번들·부자재·센터 대행 SKU는 별도 운영 흐름으로 구분한다.

## 상품 등록과 재고 추가

| 상품 등록 | 재고 추가 |
|---|---|
| 무엇을 취급할지 정의 | 실제 수량을 창고에 편입 |
| Location 불필요 | Location·수량·상태 필요 |
| Inventory·Stock 변화 없음 | Inventory·Stock과 수불 이력 변화 |
| SKU Master 생성 | SKU Instance와 재고 수량 생성 |

## 기본 정책

1. Product, SKU Master와 SKU Instance를 서로 다른 객체로 관리한다.
2. 코드와 과거 이력은 소급 변경하거나 재사용하지 않는다.
3. 상품 데이터는 화주·테넌트 접근 범위에 따라 격리한다.
4. 이미 물류 이력에 사용된 식별 속성은 변경을 제한한다.
5. 삭제보다 상태 전환을 사용해 참조 무결성을 유지한다.
6. 상품정보 전달 실패는 재처리할 수 있어야 한다.

## 관련 문서

- [바코드·UOM](/product/barcode-uom)
- [Bundle·Set](/product/bundle)
- [외부 상품·동기화](/product/external-sync)
