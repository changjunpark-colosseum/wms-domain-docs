import { defineConfig, type DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
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
      { text: 'LOT·유효기간', link: '/inventory/lot-expiration' },
      { text: '가용재고·HOLD', link: '/inventory/availability-hold' },
      { text: '이동', link: '/inventory/movement' },
      { text: '보충', link: '/inventory/replenishment' },
      { text: '재고 조정', link: '/inventory/adjustment' },
      { text: '수불부', link: '/inventory/ledger' }
    ]
  }
]

export default defineConfig({
  lang: 'ko-KR',
  title: 'WMS Domain Docs',
  titleTemplate: ':title · WMS Domain Docs',
  description: '상품과 재고 도메인을 이해하는 WMS 문서',
  base: '/',
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#29313d' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  markdown: { headers: { level: [2, 4] }, lineNumbers: false },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'WMS Domain Docs',
    nav: [
      { text: '상품', link: '/product/' },
      { text: '재고', link: '/inventory/' }
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
      message: '현재는 상품과 재고 도메인만 구축합니다.',
      copyright: 'WMS Domain Docs'
    }
  }
})
