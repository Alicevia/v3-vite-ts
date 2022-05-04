<template>
  <n-layout-header style="height: 64px; padding: 15px" bordered>
    <div flex items-center justify-between>
      <div>
        <span>颐和园路</span>
      </div>
      <div>
        <ChangeTheme></ChangeTheme>
        <n-button m-l-auto quaternary @click="theme.toggleTheme">
          {{ theme.themeTitle }}
        </n-button>
        <n-dropdown
          trigger="hover"
          placement="bottom-start"
          :options="dropdownState.options"
          @select="dropdownState.onSelect"
        >
          <n-button quaternary> 个人中心 </n-button>
        </n-dropdown>
      </div>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
import useThemeStore from 'store/theme'
const theme = useThemeStore()

const userStore = useUserStore()
const router = useRouter()
const hanldeLogout = () => {
  userStore.fetchLogout()
  router.push({ name: 'login' })
}

const dropdownState = reactive({
  onSelect(key: string | number) {
    if (key === 'logout') {
      hanldeLogout()
    }
  },
  options: [
    {
      label: '退出',
      key: 'logout',
    },
  ],
})
</script>
<style lang="scss" scoped></style>
