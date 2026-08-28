# CGKR Docs

CGKR의 물류 운영 개념을 바탕으로 WMS 도메인을 학습할 수 있게 정리한 VitePress 문서 사이트다.

- 공개 문서: https://changjunpark-colosseum.github.io/wms-domain-docs/
- 문서 범위: 상품, 재고, 입고, 출고, 배송·송장, 반품, 외부 연동

## 문서 구조

```text
docs/
├─ getting-started/  WMS 개요·운영 주체·전체 흐름·핵심 용어
├─ product/          Product·SKU·바코드·UOM·외부 상품
├─ inventory/        Inventory·Stock·Location·이동·보충·조정
├─ inbound/          입고 주문·입하·검수·입고 작업·적치
├─ outbound/         출고 주문·피킹·패킹·상차·출고 완료
├─ shipping/         주소·택배사·송장 발번·출력·추적
├─ return/           반입·검수·품질 판정·양품화·폐기
├─ integration/      외부 상품·주문·결과 연동
└─ other/            채널별 물류 흐름
```

## 실행

```bash
npm ci
npm run docs:dev
```

- 개발 서버: `http://127.0.0.1:4173/docs/`
- `npm run docs:build`: VitePress 정적 빌드
- `npm run docs:preview`: 정적 빌드 후 미리보기

로컬에서는 `/docs/`를 기본 경로로 사용한다. GitHub Pages 빌드에서는 `DOCS_BASE=/wms-domain-docs/`가 적용된다.

## 기여 방법

1. `main`에서 문서 작업 브랜치를 만든다.
2. 변경하려는 도메인의 기존 문서와 관련 문서를 함께 확인한다.
3. 현재 정책, 적용 예정 정책과 구현 추정을 구분해 작성한다.
4. 아래 명령으로 정적 빌드를 확인한다.
5. 근거와 영향 범위를 PR 설명에 남기고 리뷰를 요청한다.

```bash
git checkout -b docs/<topic>
npm ci
npm run docs:build
```

PR에는 다음 내용을 포함한다.

```text
변경 도메인:
현재 내용:
변경 내용:
변경 이유:
적용 상태: 현재 적용 | 적용 예정 | 검증 필요
정책 근거:
구현 근거:
영향받는 문서:
검토 담당자:
```

다음 항목을 확인한 뒤 리뷰를 요청한다.

- CGKR에서 실제 사용하는 용어와 객체명인가?
- 정책과 현재 구현이 일치하는가?
- 정상 흐름뿐 아니라 상태·수량·예외가 설명되어 있는가?
- 관련 문서와 사이드바 링크가 함께 수정됐는가?
- 공개 저장소에 포함하면 안 되는 정보가 제거됐는가?

## 정책·구현 참고

아래 저장소와 Confluence는 접근 권한이 있는 Colosseum 구성원만 열 수 있다. 링크 자체를 문서 근거로 간주하지 않고, 관련 코드·테스트·승인된 정책을 확인한 뒤 내용을 반영한다.

| 자료 | 확인 범위 |
|---|---|
| [cgkr_frontend](https://github.com/colosseumcoinckr/cgkr_frontend) | 현재 Web·Mobile 화면, 사용자 동작과 API 호출 |
| [cgkr_app](https://github.com/colosseumcoinckr/cgkr_app) | WMS 도메인, API, DB 모델과 업무 규칙 |
| [cgkr_batch](https://github.com/colosseumcoinckr/cgkr_batch) | 상품·주문 수집과 주기 동기화 작업 |
| [cgkr_oms](https://github.com/colosseumcoinckr/cgkr_oms) | 외부 상품·주문 수집과 결과·웹훅 연동 |
| [cgkr_ui](https://github.com/colosseumcoinckr/cgkr_ui) | 기존 CGKR 관리자·센터 화면 동작 |
| [cgkr_mobile_ui](https://github.com/colosseumcoinckr/cgkr_mobile_ui) | 기존 PDA·모바일 작업 흐름 |
| [CGKR Frontend Wiki](https://colosseum.atlassian.net/wiki/spaces/PCGKR/pages/1832616106/Wiki) | 프론트엔드 설계·개발 지침 |
| [Colosseum Confluence](https://colosseum.atlassian.net/wiki/) | 승인된 기획·정책 원문 검색 |

정책 근거의 우선순위는 다음과 같다.

```text
승인된 정책·기획
→ 현재 배포 코드·DB 모델
→ 실행 가능한 테스트·실제 동작
→ 화면 문구·기존 문서
```

정책과 구현이 다르면 하나로 합쳐 현재 사실처럼 작성하지 않는다. 차이를 먼저 확인하고 실제 적용 상태가 결정된 뒤 문서를 갱신한다.

## 배포

`main` 브랜치에 푸시하면 [GitHub Actions](.github/workflows/deploy-pages.yml)가 다음 과정을 실행한다.

```text
npm ci
→ VitePress 빌드
→ Pages artifact 업로드
→ GitHub Pages 배포
```

## 작성 원칙

1. 문서는 외부 자료 없이 독립적으로 읽을 수 있게 작성한다.
2. WMS 공용 개념을 중심으로 설명하고 CGKR 용어는 필요한 범위에서 연결한다.
3. 메뉴·화면 이름보다 업무 객체, 상태, 수량과 책임 주체를 먼저 설명한다.
4. 현재 동작, 목표 정책과 미확정 내용을 하나의 운영 사실처럼 합치지 않는다.
5. 계정·인증정보, 개인정보와 공개하면 안 되는 운영 데이터는 포함하지 않는다.
