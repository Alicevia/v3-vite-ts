<template>
  <n-layout
    h-screen
    :content-style="{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }"
  >
    <n-result status="403" title="403 禁止访问" description="你可能还未登录">
      <template #footer>
        <n-button @click="backToHome">返 回</n-button>
      </template>
    </n-result>
  </n-layout>
</template>
<script setup lang="ts">
interface allProps {
  all: string
}
const props = defineProps<allProps>()
const router = useRouter()
function backToHome() {
  router.push({ name: 'login' })
}
</script>
<style lang="scss" scoped>
.result {
  position: absolute;
  width: 230px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<route lang="yaml">
meta:
  key: 7
  title: 资源异常
  layout: false
</route>
