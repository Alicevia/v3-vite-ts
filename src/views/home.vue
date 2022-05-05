<template>
  <div>
    <div>home1的layout</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
<route lang="yaml">
redirect: 6
meta:
  key: 2
  title: 首页
  sort: 1
  icon: AccessibilitySharp
</route>
