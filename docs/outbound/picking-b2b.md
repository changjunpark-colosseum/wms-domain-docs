---
title: B2B 피킹
description: B2B 작업번호와 Con을 기준으로 Location·상품을 피킹해 PACK Zone에 인계하는 정책
---

# B2B 피킹

<div class="page-meta"><span>출고</span><span>B2B 피킹</span><span>9분</span></div>

B2B 피킹은 B2B 작업번호와 Con을 기준으로 대량 상품을 Location에서 피킹해 PACK Zone으로 이동하는 작업이다.

## PDA 흐름

<div class="flow-strip"><span>B2B 피킹 메뉴</span><i>→</i><span>작업번호 스캔</span><i>→</i><span>Con 코드 스캔</span><i>→</i><span>Location QR 스캔</span><i>→</i><span>상품 바코드·수량</span><i>→</i><span>PACK Zone 스캔</span></div>

## 핵심 객체

| 객체 | 역할 |
|---|---|
| B2B 피킹 작업 | B2B 출고 상품과 계획 수량을 묶는 작업 |
| Con | 피킹한 B2B 상품을 운반하고 패킹에 인계하는 단위 |
| Location | 피킹 대상 Stock 소재 |
| PACK Zone | 피킹 완료 상품을 B2B 차량출고·패킹에 넘기는 위치 |

## 정책

1. B2B 작업번호로 처리할 상품·Location·계획 수량을 조회한다.
2. 작업에서 사용할 수 있는 Con을 스캔해 연결한다.
3. 지정된 Location과 상품 바코드를 순서대로 확인한다.
4. 피킹 수량은 남은 계획 수량을 초과할 수 없다.
5. 동일 상품이 여러 Location에 있으면 Location별 완료 수량을 보존한다.
6. 작업 중단 후 재진입해도 기존 피킹 수량과 Con 관계를 유지한다.
7. 모든 대상 상품이 끝난 뒤 PACK Zone에 인계한다.
8. B2B 피킹 완료는 상차·출고 완료가 아니다.

## B2B 패킹·차량출고 연결

```text
Con 또는 피킹 슬립
→ 패킹 슬립 출력·스캔
→ 상품 수량 스캔·입력
→ 부가 작업
→ 카톤 라벨
→ 작업자 기록
→ B2B 완료 처리·상차
```

## 예외

- 잘못된 B2B 작업번호
- 다른 작업에 점유된 Con
- Location·상품 불일치
- 계획 수량 초과 피킹
- 일부 상품 재고 부족
- PACK Zone 오스캔
