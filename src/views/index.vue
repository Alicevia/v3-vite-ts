<template>
  <n-result m-auto status="success" title="成功" description="我知道你渴望成功">
    <template #footer>
      <n-input></n-input>
      <n-button v-if="permission(11)">13我喜欢</n-button>
      <n-button @click="change">添加11</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
const route = useRoute()
console.log(route)
const userStore = useUserStore()
const change = () => {
  userStore.buttonAuth.push(11)
}
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
