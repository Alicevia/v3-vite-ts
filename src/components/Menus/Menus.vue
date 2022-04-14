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
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'
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
//     /** @deprecated */
//     titleExtra?: string | (() => VNodeChild);

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
]
</script>
<style lang="scss" scoped></style>
