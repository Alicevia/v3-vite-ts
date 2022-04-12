<template>
  <div>index</div>
</template>

<script setup lang="ts">
import { getTest2Json, getTestJson } from '@/api/test'
const { data, error } = getTestJson()
console.log({ data, error })
const { data: data2, error: error2 } = getTest2Json()
console.log({ data2, error2 })
</script>
<style lang="scss" scoped></style>
