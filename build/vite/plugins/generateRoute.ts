import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default () => {
  return [
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '' }],
      importMode: 'async',
      exclude: ['**/components/*.vue'],
      extendRoute(route, parent) {
        console.log(route.name, route.meta?.key)
      },
      routeBlockLang: 'yaml',
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
  ]
}
