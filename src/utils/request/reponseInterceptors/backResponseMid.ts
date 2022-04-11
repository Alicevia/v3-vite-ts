import type { AxiosResponse } from 'axios'
import type { Middleware } from 'koa-compose'

export const backResponse = async (
  response: AxiosResponse,
  next: Middleware,
) => {
  next()
}
