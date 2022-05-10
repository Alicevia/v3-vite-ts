import { WHITE_LIST } from '@/enums'
import { renderIcon } from 'hooks/components/icon'
import routes from 'virtual:generated-pages'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { renderLabel } from 'hooks/components/menu'
import type { MenuOption } from 'naive-ui'

function generateKeyMap(routes: RouteRecordRaw[], metaProps: keyof RouteMeta) {
  return routes.reduce((pre, route) => {
    const key = route.meta?.key
    console.log(route.name, route)
    const value = route.meta[metaProps]
    if (pre[key]) {
      throw new Error('当前key已经存在', { cause: { route } })
    }
    if (key && value) {
      pre[key] = value
    }
    if (route.children)
      Object.assign(pre, generateKeyMap(route.children, metaProps))
    return pre
  }, {})
}

const routeKeyTitleMap = generateKeyMap(routes, 'title')
console.log({ routes, routeKeyTitleMap })

// setuplayouts
const setLayouts = (routes: RouteRecordRaw[]) => {
  return routes.reduce((pre: RouteRecordRaw[], route: RouteRecordRaw) => {
    if (route.meta && route.meta.layout === false) {
      pre.push(route)
    } else {
      pre.push(...setupLayouts([route]))
    }
    return pre
  }, [])
}
// no auth routes
const baseRoutes = routes.filter((item) => WHITE_LIST.includes(item.meta?.key))
const privateRoutes = routes.filter(
  (item) => !WHITE_LIST.includes(item.meta?.key),
)
// create menu
function generateUserMenuFromRoutes(routes: RouteRecordRaw[]): MenuOption[] {
  return routes.reduce((pre, route: RouteRecordRaw) => {
    const { title, key, icon } = route.meta ?? {}
    const temp: MenuOption = {}
    if (key && route.name && title && icon) {
      temp.key = route.name as string
      temp.icon = renderIcon(icon)
      if (route.children) {
        temp.children = generateUserMenuFromRoutes(route.children)
        temp.label = title
      } else {
        temp.label = renderLabel(route.name, title)
      }
    } else {
      return pre
    }
    pre.push(temp)
    return pre
  }, [] as MenuOption[])
}
function generateUserRouteByAuth(
  routes: RouteRecordRaw[],
  routesAuth: number[],
): RouteRecordRaw[] {
  return routes.reduce((pre, route) => {
    if (routesAuth.includes(route.meta?.key)) {
      pre.push(route)
      if (route.children) {
        route.children = [
          ...generateUserRouteByAuth(route.children, routesAuth),
        ]
      }
    }
    return pre
  }, [] as RouteRecordRaw[])
}

export {
  routes,
  privateRoutes,
  baseRoutes,
  generateUserMenuFromRoutes,
  setLayouts,
  generateUserRouteByAuth,
}
