
declare module 'vue-router' {
  interface RouteMeta {
    key: number
    title: string
    icon?: string
    sort?: number
    keepAlive?: boolean
    isMenu?: boolean
    layout?:string|boolean
  }

  type MetaProps = keyof RouteMeta
  interface RouteKeyMap<T extends MetaProps>{
    [k:number]:RouteMeta[T]
  }
  interface RouteRecordRaw{
    redirect:unknown
    name:string
    meta:RouteMeta
    children?:RouteRecordRaw[]
   }

}
