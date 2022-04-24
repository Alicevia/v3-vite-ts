import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
export default () => {
  return [
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '' }],
      importMode: 'async',
      exclude: ['**/components/*.vue'],
      extendRoute(route, parent) {
        // const icon = route.meta?.icon
        // if (icon) {
        //   route.meta.icon = renderIcon(icon)
        // }
        // return route
      },
      routeBlockLang: 'yaml',
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
  ]
}
