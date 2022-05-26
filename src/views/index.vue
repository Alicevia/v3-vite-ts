<template>

<route-link></route-link>
<!-- <n-result m-auto status="success" title="成功" description="我知道你渴望成功">
    <template #footer>
      <n-button @click="okBtn">
        正常请求
      </n-button>
      <n-button @click="errBtn">
        异常请求
      </n-button>
    </template>
  </n-result> -->
</template>

<script setup lang="ts">
import { getTestJson, getTestError } from '@/api/test'

const { execute: okBtn } = getTestJson()
const { execute: errBtn } = getTestError()

</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  title: 主页
  key: 1
  sort: 0
  icon: BalloonSharp
  keepAlive: false
</route>
