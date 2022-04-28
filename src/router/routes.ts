import { renderIcon } from 'hooks/components/icon'
import routes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { renderLabel } from 'hooks/components/menu'
import type { MenuOption } from 'naive-ui'
// setuplayouts
const setLayouts = (routes) => {
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
const baseRoutes = routes.filter((item) => [6, 7].includes(item.meta?.key))
// create menu
function generateUserMenuFromRoutes(routes: RouteRecordRaw[]): MenuOption[] {
  return routes.reduce((pre, route: RouteRecordRaw) => {
    const { title, key, icon } = route.meta ?? {}
    const temp: MenuOption = {}
    if (key && route.name && title && icon) {
      temp.key = key
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
  baseRoutes,
  generateUserMenuFromRoutes,
  setLayouts,
  generateUserRouteByAuth,
}
