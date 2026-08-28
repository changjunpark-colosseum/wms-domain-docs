import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import DomainJourney from './components/DomainJourney.vue'
import InventoryEquation from './components/InventoryEquation.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DomainJourney', DomainJourney)
    app.component('InventoryEquation', InventoryEquation)
  }
} satisfies Theme
