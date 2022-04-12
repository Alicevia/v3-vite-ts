<template>
  <div>index</div>
</template>

<script setup lang="ts">
import { getTest2Json, getTestJson } from '@/api/test'
const { data, error } = getTestJson()
console.log({ data, error })
</script>
<style lang="scss" scoped></style>
