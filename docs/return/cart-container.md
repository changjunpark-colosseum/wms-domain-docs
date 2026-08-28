---
title: 반품 Cart·Container
description: 반품 상품을 RETURN Zone에서 구분·이동하고 검수·양품화 작업으로 넘기는 운반체 정책
---

# 반품 Cart·Container

<div class="page-meta"><span>반품</span><span>작업 운반체</span><span>9분</span></div>

반품 Cart와 Container는 반입된 상품을 일반 재고와 분리해 이동하고, 상품별 수량을 구분해 검수·품질 판정·양품화 작업으로 전달한다.

## 객체 구분

| 객체 | 역할 |
|---|---|
| 반품 Cart | 하나의 반품 작업에서 상품을 이동시키는 상위 운반체 |
| Container | Cart 안에서 반품 상품·수량을 구분하는 단위 |

## 연결 흐름

<div class="flow-strip"><span>반품 작업 선택</span><i>→</i><span>반품 Cart 스캔</span><i>→</i><span>Container 연결</span><i>→</i><span>상품·수량 투입</span><i>→</i><span>검수·품질 판정</span><i>→</i><span>양품화·폐기 작업 인계</span></div>

## 수량 관계

```text
반품 작업 처리 수량
= Cart 안의 모든 Container 상품 수량 합
```

## 정책

1. 반품 Cart·Container는 같은 센터에서 사용할 수 있어야 한다.
2. 다른 진행 작업에 점유된 운반체는 중복 사용하지 않는다.
3. Container마다 반품 상품·수량과 반품 라인을 연결한다.
4. Container 수량 합은 반품 작업 처리 수량과 일치해야 한다.
5. Cart의 행·열·용량 제한을 초과하지 않는다.
6. 품질 판정 전 상품은 일반 Location으로 이동하지 않는다.
7. 양품화·폐기 등 모든 Container가 종결된 뒤 Cart 점유를 해제한다.
8. 양품화 시 Container 상품과 적치 Location 수량을 연결한다.

## 예외

- 다른 작업에 점유된 Cart·Container
- Container 상품과 원반품 상품 불일치
- Container 수량 합과 반품 수량 불일치
- Cart 행·열·용량 초과
- 일부 Container 미처리 상태에서 Cart 완료
- 작업 완료 후 Cart 점유가 남음
