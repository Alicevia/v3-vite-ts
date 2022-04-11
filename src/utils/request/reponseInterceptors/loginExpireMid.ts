import type { AxiosResponse } from 'axios'
import type { Middleware } from 'koa-compose'

export const loginExpireMid = async (
  response: AxiosResponse,
  next: Middleware,
) => {
  const { code } = response.data
  if (code === 401) {
    return Promise.reject(response)
  } else {
    await next()
  }
}
