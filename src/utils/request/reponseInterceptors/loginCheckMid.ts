import { createError } from './../../messageTip'
import type { AxiosResponse } from 'axios'

export const loginCheckMid = async (response: AxiosResponse, next: any) => {
  const { code } = response.data
  if (code === 0) return await next()
  if (code === 401) {
    // logout?
  }
  return Promise.reject(createError(response))
}
