import path from 'path'
export default function resolveFn() {
  return {
    alias: {
      '@': path.resolve('./src'),
      components: path.resolve('./src/components'),
      views: path.resolve('./src/views'),
      api: path.resolve('./src/api'),
      hooks: path.resolve('./src/hooks'),
      store: path.resolve('./src/store'),
      utils: path.resolve('./src/utils'),
    },
  }
}
