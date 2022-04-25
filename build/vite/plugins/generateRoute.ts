import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
export default () => {
  return [
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '' }],
      importMode: 'async',
      exclude: ['**/components/*.vue'],
      extendRoute(route, parent) {
        // if (route.redirect && route.children) {
        //   route.redirect = {
        //     name: route.children.find(
        //       (item) => item.meta.key === route.redirect,
        //     ).name,
        //   }
        // }
        // console.log(route)
        // const icon = route.meta?.icon
        // if (icon) {
        //   route.meta.icon = renderIcon(icon)
        // }
        // return route
      },
      onRoutesGenerated(routes) {
        routes.sort((a, b) => {
          return a.meta.sort - b.meta.sort
        })
        routes.forEach((route) => {
          if (route.children) {
            route.children.sort((a, b) => {
              return a.meta.sort - b.meta.sort
            })
          }
        })
        return routes
      },
      routeBlockLang: 'yaml',
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
  ]
}
