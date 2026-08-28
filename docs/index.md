---
layout: false
title: CGKR Docs
titleTemplate: false
head:
  - - meta
    - http-equiv: refresh
      content: 0; url=/docs/getting-started/
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  window.location.replace(withBase('/getting-started/'))
})
</script>

<noscript>
  <a href="/docs/getting-started/">시작하기 문서로 이동</a>
</noscript>
