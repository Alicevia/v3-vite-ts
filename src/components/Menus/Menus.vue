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
      :options="appStore.originMenu"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import useAppStore from 'store/app'
const route = useRoute()
const expandedKeys = ref([])
const activeKey = ref(route.name)
const collapsed = ref(false)
console.log(route)
//  key?: Key;
//     disabled?: boolean;
//     icon?: () => VNodeChild;
//     children?: Array<MenuOption | MenuGroupOption | MenuDividerOption>;
//     extra?: string | (() => VNodeChild);
//     props?: HTMLAttributes;
//     [key: string]: unknown;

const appStore = useAppStore()
console.log(appStore.originMenu)
</script>
<style lang="scss" scoped></style>
