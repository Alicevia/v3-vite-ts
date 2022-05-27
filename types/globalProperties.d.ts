declare module 'vue' {
  interface ComponentCustomProperties {
    $permission: (v: unknown) => boolean
    $themeVars:(k: string) => string
  }
}
export {}
