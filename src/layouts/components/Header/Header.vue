<template>
  <n-layout-header style="height: 64px; padding: 24px" bordered>
    <div flex items-center justify-between>
      <span>颐和园路</span>
      <n-button @click="handleLogout">退出</n-button>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
const userStore = useUserStore()
const router = useRouter()
const handleLogout = () => {
  userStore.fetchLogout()
  router.push({ name: 'login' })
}
</script>
<style lang="scss" scoped></style>
