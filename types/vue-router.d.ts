import 'vue-router'

declare module 'vue-router' {
  interface MyRouteMeta {
    key: number
    title?: string
    icon?: string
    sort?: number
    keepAlive?: boolean
    isMenu?: boolean
  }
  interface RouteMeta extends MyRouteMeta { }

  interface MyRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string
    meta: RouteMeta
    component?: Component | string
    components?: Component
    children?: MyRouteRecordRaw[]
    props?: Recordable
    fullPath?: string
  }
}
