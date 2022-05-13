// import type { MyRouteRecordRaw } from 'vue-router'
declare module 'css-color-function' {
  interface CssColor {
    convert: (s: string) => string
    parse: (s: string) => string
  }
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    permission: (v: T) => boolean
  }
}
declare module 'virtual:generated-pages' {
  import type { MyRouteRecordRaw } from 'vue-router'
  const routes: MyRouteRecordRaw[]
  export default routes
}
declare module 'virtual:generated-layouts' {
  import type { MyRouteRecordRaw } from 'vue-router'

  const setupLayouts:(a:MyRouteRecordRaw[]) => MyRouteRecordRaw[]
  export { setupLayouts }
}
