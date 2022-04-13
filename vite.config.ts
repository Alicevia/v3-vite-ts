import { defineConfig } from 'vite'
import registerPlugins from './build/vite/plugins/index'
import resolveFn from './build/vite/resolve'
import serverFn from './build/vite/server'

export default defineConfig(() => {
  return {
    plugins: registerPlugins(),
    resolve: resolveFn(),
    server: serverFn(),
  }
})
