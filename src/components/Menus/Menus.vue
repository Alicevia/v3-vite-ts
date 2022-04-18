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
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
import useAppStore from 'store/app'
const activeKey = ref(null)
const collapsed = ref(false)
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

//  key?: Key;
//     disabled?: boolean;
//     icon?: () => VNodeChild;
//     children?: Array<MenuOption | MenuGroupOption | MenuDividerOption>;
//     extra?: string | (() => VNodeChild);
//     props?: HTMLAttributes;
//     [key: string]: unknown;
const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
]
const appStore = useAppStore()
console.log(appStore.originRoutes)
const menu = [
  {
    label: '首页',
    key: 'home',
    icon: 'home',
    children: [
      { label: '个人中心', key: 'profile', icon: 'profile' },
      { label: '用户列表', key: 'userlist', icon: 'userlist' },
    ],
  },
  {
    label: '测试',
    key: 'testchild',
    icon: 'testchild',
    children: [{ label: '测试子', key: 'testchild', icon: 'testchild' }],
  },
]
</script>
<style lang="scss" scoped></style>
