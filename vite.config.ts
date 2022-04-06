import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

import path from 'path'

export default defineConfig(() => {
  return {
    plugins: [
      Vue(),
      Pages({
        dirs: [{ dir: 'src/views', baseRoute: '' }],
        importMode: 'async',
        exclude: ['**/components/*.vue'],
      }),
      Layouts({
        layoutsDirs: 'src/layout',
        defaultLayout: 'default',
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          // '@vueuse/head',
          // '@vueuse/core',
        ],
        dts: 'src/components.d.ts',
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      Components({
        dirs: ['src/**/components'],
        dts: 'src/auto-import.d.ts',
        extensions: ['vue'],
        resolvers: [NaiveUiResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        views: path.resolve(__dirname, './src/views'),
        api: path.resolve(__dirname, './src/api'),
        hooks: path.resolve(__dirname, './src/hooks'),
        store: path.resolve(__dirname, './src/store'),
      },
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        // 字符串简写写法
        // '/api': 'http://sunnyz.vipgz1.idcfengye.com/v3/api-docs',
        // 选项写法
        '/api': {
          // target: env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
