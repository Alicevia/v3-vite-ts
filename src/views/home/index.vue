<template>
  <div>
    <n-button>home</n-button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const state = ref('sf')
</script>
<style scoped></style>
<route lang="yaml">
meta:
  layout: 'home'
</route>
