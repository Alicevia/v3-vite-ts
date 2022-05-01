import routes from 'virtual:generated-pages'

function generateKeyNameMap(routes: RouteRecordRaw[]) {
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

export const WHITE_LIST = [6]
export const PRIVATE_WHITE_LIST = [1, 7]
const routeKeyMap = generateKeyNameMap(routes)
export default Object.entries(routeKeyMap).reduce((pre, [key, name]) => {
  const k = 'ROUTE_' + name.split('-').at(-1).toUpperCase()
  pre[k] = name
  return pre
}, {})
