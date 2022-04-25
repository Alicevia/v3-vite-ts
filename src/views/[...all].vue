<template>
  <n-layout
    h-screen
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
        <n-button>holy shit</n-button>
      </template>
    </n-result>
  </n-layout>
</template>
<script setup lang="ts">
interface allProps {
  all: string[]
}

const props = defineProps<allProps>()
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
  title: 404
  layout: false
</route>
