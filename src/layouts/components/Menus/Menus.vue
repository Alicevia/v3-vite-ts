<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :collapsed="collapsed"
    show-trigger
    :native-scrollbar="false"
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      v-model:expanded-keys="expandedKeys"
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="appStore.userMenuList"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import useRouteStore from 'store/route'
const $route = useRoute()
const expandedKeys = ref($route.matched.map((route) => route.meta.key))
const activeKey = ref($route.meta.key)
const collapsed = ref(false)
console.log($route)
const appStore = useRouteStore()
</script>
<style lang="scss" scoped></style>
