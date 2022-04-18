<template>
  <div>
    <div>home1的layout</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const abc = {
  name: 'home',
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 'home'
redirect: /home/userlist
</route>
