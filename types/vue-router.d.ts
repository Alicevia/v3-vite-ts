import 'vue-router'
declare module 'vue-router' {
  //  interface RouteMeta {
  //   key: number
  //   title?: string
  //   icon?: string
  //   sort?: number
  //   keepAlive?: boolean
  //   isMenu?: boolean
  // }

  interface RouteMeta {
    key: number
    title: string
    icon?: string
    sort?: number
    keepAlive?: boolean
    isMenu?: boolean
  }
  interface MyRouteMeta {
    key: number
    title: string
    icon?: string
    sort?: number
    keepAlive?: boolean
    isMenu?: boolean
  }
  interface MyRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'>{
    name:string
    meta:RouteMeta
    children?:MyRouteRecordRaw[]
  }

  type MetaProps = keyof MyRouteMeta
  interface RouteKeyMap<T extends MetaProps>{
    [k:number]:MyRouteMeta[T]
  }
}
export { }
