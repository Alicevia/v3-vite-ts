import { createError } from './../../messageTip'
import type { AxiosResponse } from 'axios'
import type { Middleware } from 'koa-compose'

export const loginCheckMid = async (
  response: AxiosResponse,
  next: Middleware,
) => {
  const { code } = response.data
  if (code === 0) return await next()
  if (code === 401) {
    // logout?
  }
  return Promise.reject(createError(response))
}
