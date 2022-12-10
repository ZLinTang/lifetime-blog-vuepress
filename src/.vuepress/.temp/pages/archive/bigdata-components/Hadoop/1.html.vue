<template><div><p>你好， {{ msg }}</p>
<RedDiv>
当前计数为： {{ count }}
</RedDiv>
<button @click="count++">点我！</button>
<h1 id="hadoop第一篇" tabindex="-1"><a class="header-anchor" href="#hadoop第一篇" aria-hidden="true">#</a> Hadoop第一篇</h1>
</div></template>


<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)

</script>