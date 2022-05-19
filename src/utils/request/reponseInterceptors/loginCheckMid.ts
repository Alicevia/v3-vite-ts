import { createError } from './../../messageTip'
import type { AxiosResponse } from 'axios'
export const loginCheckMid = async (
  response: AxiosResponse,
  next: () => void
) => {
  const { code, } = response.data
  if (code === 0) {
    $loadingBar?.finish()
    return await next()
  }
  if (code === 401) {
    // logout?
  }
  return Promise.reject(createError(response))
}
