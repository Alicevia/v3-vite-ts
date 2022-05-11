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
        // const icon = route.meta?.icon
        // if (icon) {
        //   route.meta.icon = renderIcon(icon)
        // }
        // return route
      },

      onRoutesGenerated(routes) {
        function sortRoute(routes) {
          routes.sort((a, b) => {
            const temp = a.meta?.sort - b.meta?.sort
            return isNaN(temp) ? 0 : temp
          })
          routes.forEach((route) => {
            if (route.children) {
              sortRoute(route.children)
            }
          })
        }
        sortRoute(routes)
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
