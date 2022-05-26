import 'vue-router'
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
    interface MyRouteMeta {
    key: number
    title: string
    icon?: string
    sort?: number
    keepAlive?: boolean
    isMenu?: boolean
    layout?:string|boolean
  }

   type MetaProps = keyof MyRouteMeta
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
