declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    permission: (v: T) => boolean
  }
}
// export {}
// declare module 'vue-router' {
//   interface RouteMeta {
//     title:string
//   }
//  }
