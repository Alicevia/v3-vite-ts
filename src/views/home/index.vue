<template>
  <div>
    hoem{{ state }}
    <n-button>Default</n-button>
    <Dialog></Dialog>
  </div>
</template>

<script setup lang="ts">
const state = ref('sf')
</script>
<style scoped></style>
