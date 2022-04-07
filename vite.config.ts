import { defineConfig } from 'vite'
import registerPlugins from './vite/plugins/index'
import resolveFn from './vite/resolve'
import serverFn from './vite/server'
export default defineConfig(() => {
  return {
    plugins: registerPlugins(),
    resolve: resolveFn(),
    server: serverFn(),
  }
})
