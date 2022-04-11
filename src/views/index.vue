<template>
  <div>index</div>
</template>

<script setup lang="ts">
import { getTestJson } from '@/api/test'

const { error, data } = getTestJson()
console.log({ error, data })
</script>
<style lang="scss" scoped></style>
