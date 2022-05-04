<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary>主题色</n-button>
    </template>
    <ul style="height: 50px; width: 200px">
      <li v-for="(item, key) in themeStore.themeColor" :key="key">
        <p style="margin-bottom: 5px">{{ key }}:</p>
        <n-color-picker
          :value="item"
          :swatches="[
            '#FFFFFF',
            '#18A058',
            '#2080F0',
            '#F0A020',
            'rgba(208, 48, 80, 1)',
          ]"
          @update:value="themeStore.changeThemeColor(key, $event)"
        />
      </li>
    </ul>
    <!-- <div style="text-align: center; margin-top: 10px">
      <n-button size="small" @click="openSaveThemeDialog"
        >保存当前主题</n-button
      >
    </div> -->
  </n-popover>
</template>

<script setup>
import useThemeStore from 'store/theme'

const themeStore = useThemeStore()
</script>
<style lang="scss" scoped></style>
