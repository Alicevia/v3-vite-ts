<template>
  <n-layout h-screen>
    <div>
      <n-button @click="handleLogin">login</n-button>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import useAppStore from 'store/app'
import { getTestJson } from '@/api/test'
// const { data, error } = getTestJson()
// console.log({ data, error })

const appStore = useAppStore()
const handleLogin = () => {
  appStore.getMenuAuth().catch((e) => {
    console.log(e)
  })
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: false
  title: 登录
</route>
