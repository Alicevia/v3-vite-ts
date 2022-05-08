<template>
  <div>我是/home/userlist 我没用使用homelayout</div>
</template>

<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'
const theme = useThemeVars()
setInterval(() => {
  console.log(theme)
}, 3000)
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 5
  title: 用户列表
  icon: AirplaneSharp
</route>
