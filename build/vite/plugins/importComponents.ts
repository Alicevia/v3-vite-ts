import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default () => {
  return [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core'
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // 'axios': [
        //   ['default', 'axios'], // import { default as axios } from 'axios',
        // ],
      ],
      dts: 'types/components.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dirs: ['src/**/components'],
      dts: 'types/auto-import.d.ts',
      extensions: ['vue'],
      resolvers: [NaiveUiResolver()],
      include: [/\.vue$/, /\.vue\?vue/]
    })
  ]
}
