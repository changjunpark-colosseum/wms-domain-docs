import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import InventoryEquation from './components/InventoryEquation.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('InventoryEquation', InventoryEquation)
  }
} satisfies Theme
