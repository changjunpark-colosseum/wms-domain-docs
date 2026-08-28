<script setup lang="ts">
import { withBase } from 'vitepress'

const stages = [
  { step: '01', label: '상품', detail: '무엇을 다루는지 정의', link: '/fundamentals/product-sku' },
  { step: '02', label: '입고', detail: '받고 확인해 총량에 편입', link: '/process/inbound' },
  { step: '03', label: '재고', detail: '어디에 어떤 상태로 있는지 추적', link: '/fundamentals/inventory-stock' },
  { step: '04', label: '출고', detail: '예약하고 집품해 발송', link: '/process/outbound' },
  { step: '05', label: '반품', detail: '회수하고 품질을 다시 판정', link: '/process/returns' },
  { step: '06', label: '정산', detail: '활동을 사용량과 비용으로 환산', link: '/operations/settlement' }
]
</script>

<template>
  <nav class="domain-journey" aria-label="WMS 전체 학습 흐름">
    <a v-for="stage in stages" :key="stage.step" :href="withBase(stage.link)" class="journey-stage">
      <span class="journey-step">{{ stage.step }}</span>
      <strong>{{ stage.label }}</strong>
      <span>{{ stage.detail }}</span>
    </a>
  </nav>
</template>
