<template>
  <BasicLayout>
    <router-view v-slot="{ Component, route }">
      <component
        :is="Component"
        v-if="route.meta?.keepAlive === false"
        :key="route.fullPath"
      />
      <KeepAlive v-else>
        <component :is="Component" :key="route.fullPath"></component>
      </KeepAlive>
    </router-view>
  </BasicLayout>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
