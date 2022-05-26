import { ROUTE_NAME } from './../enums/ROUTE'
import { WHITE_LIST } from '@/enums'
import { renderIcon } from 'hooks/components/icon'
import type { MetaProps, RouteKeyMap, MyRouteRecordRaw, MyRouteMeta } from 'vue-router'
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { renderLabel } from 'hooks/components/menu'
import type { MenuOption } from 'naive-ui'

function generateKeyMetaPropsMap<T extends MetaProps> (
  routes: MyRouteRecordRaw[],
  metaProps:T
):RouteKeyMap<T> {
  const temp :RouteKeyMap<T> = {}
  return routes.reduce((pre, route) => {
    const { key, } = route.meta
    const value = route.meta[metaProps]
    if (pre[key]) {
      throw new Error('当前key已经存在', {
        cause: route as unknown as Error,
      })
    }
    if (key) {
      pre[key] = value
    }
    if (route.children) { Object.assign(pre, generateKeyMetaPropsMap(route.children, metaProps)) }
    return pre
  }, temp)
}

const routeKeyTitleMap = generateKeyMetaPropsMap(
  routes,
  'title'
)
console.log({ routes, routeKeyTitleMap, })

// setuplayouts
const setLayouts = (routes: MyRouteRecordRaw[]) => {
  return routes.reduce((pre: MyRouteRecordRaw[], route: MyRouteRecordRaw) => {
    if (route.meta && route.meta.layout === false) {
      pre.push(route)
    } else {
      pre.push(...setupLayouts([route]))
    }
    return pre
  }, [])
}

// no auth routes
const baseRoutes = routes.filter((item) => WHITE_LIST.includes(item.meta.key))
// auth routes
const privateRoutes = routes.filter(
  (item) => !WHITE_LIST.includes(item.meta.key)
)
// create menu list
function generateUserMenuFromRoutes (routes: MyRouteRecordRaw[]): MenuOption[] {
  return routes.reduce((pre, route: MyRouteRecordRaw) => {
    const { title, icon, isMenu, } = route.meta
    const temp: MenuOption = {}
    if (isMenu !== false) {
      temp.key = route.name as string
      temp.icon = renderIcon(icon)
      if (route.children) {
        temp.children = generateUserMenuFromRoutes(route.children)
        temp.label = title
      } else {
        temp.label = renderLabel(route.name as string, title)
      }
    } else {
      return pre
    }
    pre.push(temp)
    return pre
  }, [] as MenuOption[])
}

// create by auth
function generateUserRouteByAuth (
  routes: MyRouteRecordRaw[],
  routesAuth: number[]
): MyRouteRecordRaw[] {
  return routes.reduce((pre, route) => {
    if (routesAuth.includes(route.meta?.key)) {
      pre.push(route)
      if (route.children) {
        route.children = [
          ...generateUserRouteByAuth(route.children, routesAuth)
        ]
      }
      if (route.redirect) {
        const toIndex = () => {
          return { name: ROUTE_NAME.INDEX, }
        }
        if (route.children && route.children.length > 0) {
          const temp = route.children.find(
            (item) => item.meta?.key === route.redirect
          )
          route.redirect = temp
            ? () => ({ name: temp.name, })
            : () => ({ name: route.children![0].name, })
        } else {
          route.redirect = toIndex
        }
      }
    }
    return pre
  }, [] as MyRouteRecordRaw[])
}

export {
  routes,
  privateRoutes,
  baseRoutes,
  generateUserMenuFromRoutes,
  setLayouts,
  generateUserRouteByAuth
}
