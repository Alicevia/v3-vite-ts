import routes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
interface RouteKeyNameMap {
  [key: string]: string
}
interface RouteNameKeyMap {
  [key: string]: number
}

function generateKeyNameMap(routes: RouteRecordRaw[]): RouteKeyNameMap {
  return routes.reduce((pre, route) => {
    const key = route.meta?.key
    const name = route.name
    if (key && name) {
      pre[key] = name
    }
    if (route.children) Object.assign(pre, generateKeyNameMap(route.children))
    return pre
  }, {})
}
const ROUTE_KEY_NAME = generateKeyNameMap(routes)
export const ROUTE_NAME = Object.entries(ROUTE_KEY_NAME).reduce(
  (pre, [, name]) => {
    const k = name.split('-').at(-1).toUpperCase()
    pre[k] = name
    return pre
  },
  {} as RouteKeyNameMap,
)
export const ROUTE_KEY = Object.entries(ROUTE_KEY_NAME).reduce(
  (pre, [key, name]) => {
    const k = name.split('-').at(-1).toUpperCase()
    pre[k] = parseInt(key)
    return pre
  },
  {} as RouteNameKeyMap,
)

export const WHITE_LIST = [ROUTE_KEY.LOGIN]
export const PRIVATE_WHITE_LIST = [ROUTE_KEY.INDEX, ROUTE_KEY.ALL]
console.info({ ROUTE_NAME, ROUTE_KEY })
