<template>
  <n-layout
    :content-style="{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }"
  >
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button @click="backToHome">回到首页</n-button>
      </template>
    </n-result>
  </n-layout>
</template>
<script setup lang="ts">
import { ROUTE_NAME } from '@/enums'

interface allProps {
  all: Array<string>
}
defineProps<allProps>()
const router = useRouter()
function backToHome() {
  router.push({ name: ROUTE_NAME.INDEX })
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
  key: 9
  title: 404
</route>
