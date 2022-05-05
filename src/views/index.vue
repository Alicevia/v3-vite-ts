<template>
  <n-result m-auto status="success" title="成功" description="我知道你渴望成功">
    <template #footer>
      <n-button>{{ auth }}我喜欢</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
</script>
<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  title: 主页
  key: 1
  sort: 0
  icon: BalloonSharp
</route>
