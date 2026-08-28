import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  lang: 'ko-KR',
  title: 'Warehouse Atlas',
  titleTemplate: ':title · Warehouse Atlas',
  description: '상품부터 정산까지 흐름으로 이해하는 WMS 도메인 학습 가이드',
  base,
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#29313d' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ko_KR' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }]
  ],
  markdown: {
    headers: { level: [2, 3, 4] },
    lineNumbers: false
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Warehouse Atlas',
    nav: [
      { text: '학습 시작', link: '/guide/overview', activeMatch: '^/guide/' },
      {
        text: '도메인',
        items: [
          { text: '기준정보', link: '/fundamentals/product-sku' },
          { text: '입고·재고', link: '/process/inbound' },
          { text: '출고·반품', link: '/process/outbound' },
          { text: '운영·정산', link: '/operations/movement-replenishment' }
        ]
      },
      { text: '용어 사전', link: '/reference/glossary' },
      { text: '전체 도메인 맵', link: '/reference/domain-map' }
    ],
    sidebar: [
      {
        text: '시작하기',
        collapsed: false,
        items: [
          { text: 'WMS 한눈에 보기', link: '/guide/overview' },
          { text: '추천 학습 경로', link: '/guide/learning-path' }
        ]
      },
      {
        text: '기준정보',
        collapsed: false,
        items: [
          { text: '상품과 SKU', link: '/fundamentals/product-sku' },
          { text: 'Inventory와 Stock', link: '/fundamentals/inventory-stock' },
          { text: 'Zone과 Location', link: '/fundamentals/location-zone' },
          { text: 'LPN과 재고 계보', link: '/fundamentals/lpn' }
        ]
      },
      {
        text: '입고',
        collapsed: false,
        items: [
          { text: '입고 프로세스', link: '/process/inbound' },
          { text: '적치', link: '/process/putaway' }
        ]
      },
      {
        text: '출고',
        collapsed: false,
        items: [
          { text: '출고 프로세스', link: '/process/outbound' },
          { text: '피킹', link: '/process/picking' },
          { text: '패킹·송장·출고확정', link: '/process/packing-shipping' }
        ]
      },
      {
        text: '반품',
        collapsed: false,
        items: [
          { text: '반품 프로세스', link: '/process/returns' }
        ]
      },
      {
        text: '운영',
        collapsed: false,
        items: [
          { text: '이동과 보충', link: '/operations/movement-replenishment' },
          { text: '조정·실사·폐기', link: '/operations/adjustment-counting-disposal' },
          { text: '물류 정산', link: '/operations/settlement' }
        ]
      },
      {
        text: '부록',
        collapsed: false,
        items: [
          { text: '전체 도메인 맵', link: '/reference/domain-map' },
          { text: '핵심 불변식', link: '/reference/invariants' },
          { text: '용어 사전', link: '/reference/glossary' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '문서 검색', buttonAriaLabel: '문서 검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다.',
            resetButtonTitle: '검색 초기화',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기'
            }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '이 페이지에서' },
    docFooter: { prev: '이전 학습', next: '다음 학습' },
    skipToContentLabel: '본문으로 건너뛰기',
    darkModeSwitchLabel: '화면 모드',
    darkModeSwitchTitle: '다크 모드로 전환',
    lightModeSwitchTitle: '라이트 모드로 전환',
    sidebarMenuLabel: '학습 목차',
    returnToTopLabel: '맨 위로',
    externalLinkIcon: true,
    footer: {
      message: '공개 가능한 일반 WMS 개념과 학습용 예시로 구성했습니다.',
      copyright: 'Warehouse Atlas'
    }
  }
})
