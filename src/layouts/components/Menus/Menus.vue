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
      :value="$route.name"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="appStore.userMenuList"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import useRouteStore from 'store/route'
const $route = useRoute()
const expandedKeys = ref($route.matched.map((route) => route.name))
const collapsed = ref(false)
const appStore = useRouteStore()
</script>
<style lang="scss" scoped></style>
