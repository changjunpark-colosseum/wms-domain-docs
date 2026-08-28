import { defineConfig, type DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '시작하기',
    link: '/getting-started/',
    collapsed: false,
    items: [
      { text: 'WMS 이해하기', link: '/getting-started/' },
      { text: '운영 주체와 역할', link: '/getting-started/actors-roles' },
      { text: '전체 도메인 흐름', link: '/getting-started/domain-flow' },
      { text: '핵심 용어', link: '/getting-started/glossary' }
    ]
  },
  {
    text: '상품',
    link: '/product/',
    collapsed: false,
    items: [
      { text: 'Product·SKU·SKU Instance', link: '/product/' },
      { text: '바코드·UOM', link: '/product/barcode-uom' },
      { text: 'Bundle·Set', link: '/product/bundle' },
      { text: '외부 상품·동기화', link: '/product/external-sync' }
    ]
  },
  {
    text: '재고',
    link: '/inventory/',
    collapsed: false,
    items: [
      { text: '재고 조회', link: '/inventory/' },
      { text: 'Inventory', link: '/inventory/inventory' },
      { text: 'Stock', link: '/inventory/stock' },
      { text: 'Location', link: '/inventory/location' },
      { text: 'LPN', link: '/inventory/lpn' },
      { text: 'LOT·유효기간', link: '/inventory/lot-expiration' },
      { text: '가용재고·HOLD', link: '/inventory/availability-hold' },
      { text: '이동', link: '/inventory/movement' },
      { text: '보충', link: '/inventory/replenishment' },
      { text: '재고 조정', link: '/inventory/adjustment' },
      { text: '수불부', link: '/inventory/ledger' }
    ]
  },
  {
    text: '입고',
    link: '/inbound/',
    collapsed: false,
    items: [
      { text: '입고 주문', link: '/inbound/order' },
      { text: '입하', link: '/inbound/receiving' },
      { text: '검수', link: '/inbound/inspection' },
      { text: '입고 작업', link: '/inbound/work' },
      { text: '적치', link: '/inbound/putaway' },
      { text: '입고 예외', link: '/inbound/exceptions' },
      { text: '입고 완료', link: '/inbound/completion' }
    ]
  },
  {
    text: '출고',
    link: '/outbound/',
    collapsed: false,
    items: [
      { text: '출고 개요', link: '/outbound/' },
      { text: '출고 신청·주문', link: '/outbound/order' },
      { text: '작업 생성·할당', link: '/outbound/work-assignment' },
      {
        text: '피킹',
        link: '/outbound/picking',
        collapsed: false,
        items: [
          { text: 'Cart·Con', link: '/outbound/cart-con' },
          {
            text: 'B2C 피킹',
            link: '/outbound/picking-b2c',
            collapsed: false,
            items: [
              { text: '개별 피킹', link: '/outbound/picking-individual' },
              { text: '클러스터 피킹', link: '/outbound/picking-cluster' },
              { text: '총량 피킹', link: '/outbound/picking-total' },
              { text: '예외 피킹·재고부족', link: '/outbound/picking-exceptions' }
            ]
          },
          { text: 'B2B 피킹', link: '/outbound/picking-b2b' }
        ]
      },
      { text: '패킹', link: '/outbound/packing' },
      { text: '상차', link: '/outbound/loading' },
      { text: '출고 완료', link: '/outbound/completion' },
      { text: '취소·재고 복구', link: '/outbound/cancellation' }
    ]
  },
  {
    text: '배송·송장',
    link: '/shipping/',
    collapsed: false,
    items: [
      { text: '배송·송장 개요', link: '/shipping/' },
      { text: '배송지·주소 정제', link: '/shipping/address' },
      { text: '택배사·배송 방식', link: '/shipping/carrier' },
      { text: '송장 발번', link: '/shipping/issuance' },
      { text: '자체송장·임시송장', link: '/shipping/manual-temporary' },
      { text: '송장 출력', link: '/shipping/printing' },
      { text: '송장 재출력', link: '/shipping/reprint' },
      { text: '추가 송장', link: '/shipping/additional' },
      { text: '택배사 변경·재발번', link: '/shipping/carrier-change' },
      { text: 'Box·송장 연결', link: '/shipping/box-waybill' },
      { text: '배송 추적·반품 연계', link: '/shipping/tracking-return' }
    ]
  },
  {
    text: '반품',
    link: '/return/',
    collapsed: false,
    items: [
      { text: '반품 개요', link: '/return/' },
      { text: '반품 신청·원출고 조회', link: '/return/request' },
      {
        text: '반입·반품 작업',
        link: '/return/receiving',
        collapsed: false,
        items: [
          { text: '작업 등록·사유', link: '/return/work-registration' },
          { text: '화주사 확인', link: '/return/seller-confirmation' },
          { text: '반품 Cart·Container', link: '/return/cart-container' }
        ]
      },
      { text: '반품 검수', link: '/return/inspection' },
      { text: '품질 판정', link: '/return/quality' },
      { text: '양품화·재입고', link: '/return/restock' },
      { text: '불량·폐기·반송', link: '/return/defect-disposal' },
      { text: '외부 동기화·완료', link: '/return/completion-sync' }
    ]
  },
  {
    text: '외부 연동',
    link: '/integration/',
    collapsed: false,
    items: [
      { text: '연동 개요', link: '/integration/' },
      { text: '주문 연동', link: '/integration/order-sync' }
    ]
  },
  {
    text: '기타',
    collapsed: false,
    items: [
      { text: 'COLO 1.0', link: '/other/colo-1' },
      { text: 'G마켓 스타배송', link: '/other/gmarket-star-delivery' }
    ]
  }
]

export default defineConfig({
  lang: 'ko-KR',
  title: 'CGKR Docs',
  titleTemplate: ':title · CGKR Docs',
  description: '상품·재고·입고·출고·배송·송장·반품과 외부 연동을 이해하는 CGKR 문서',
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0047D9' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/docs/logo.svg' }]
  ],
  markdown: { headers: { level: [2, 4] }, lineNumbers: false },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'CGKR Docs',
    nav: [
      { text: '시작하기', link: '/getting-started/' },
      { text: '상품', link: '/product/' },
      { text: '재고', link: '/inventory/' },
      { text: '입고', link: '/inbound/' },
      { text: '출고', link: '/outbound/' },
      { text: '배송·송장', link: '/shipping/' },
      { text: '반품', link: '/return/' },
      { text: '연동', link: '/integration/' },
      { text: '기타', link: '/other/colo-1' }
    ],
    sidebar,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '문서 검색', buttonAriaLabel: '문서 검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다.',
            resetButtonTitle: '검색 초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
          }
        }
      }
    },
    outline: { level: [2, 4], label: '이 문서에서' },
    docFooter: { prev: '이전 문서', next: '다음 문서' },
    skipToContentLabel: '본문으로 건너뛰기',
    darkModeSwitchLabel: '화면 모드',
    sidebarMenuLabel: '문서 목차',
    returnToTopLabel: '맨 위로',
    footer: {
      message: 'CGKR 물류 도메인과 외부 시스템 연동 흐름을 정리합니다.',
      copyright: 'CGKR Docs'
    }
  }
})
