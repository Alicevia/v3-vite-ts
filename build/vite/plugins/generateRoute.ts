import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default () => {
  return [
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '' }],
      importMode: 'async',
      exclude: ['**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
  ]
}
