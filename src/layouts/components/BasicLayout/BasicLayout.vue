<template>
  <n-layout h-screen>
    <Header></Header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <Menus></Menus>
      <n-layout
        content-style="display:flex;height:100%"
        :native-scrollbar="false"
      >
        <slot></slot>
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
      城府路
    </n-layout-footer>
  </n-layout>
</template>
