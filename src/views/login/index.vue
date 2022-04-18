<template>
  <n-layout h-screen>
    <div>
      <n-button @click="handleLogin">login</n-button>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import useAppStore from 'store/app'

const appStore = useAppStore()
const handleLogin = () => {
  appStore.getMenuAuth()
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: false
  isMenu: false
</route>
