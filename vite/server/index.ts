export default function serverFn() {
  return {
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
  }
}
