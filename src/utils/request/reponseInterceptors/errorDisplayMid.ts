import { MessageTip } from '@/utils/messageTip'
import type { AxiosResponse } from 'axios'
import type { Middleware } from 'koa-compose'

export const errorDisplayMid = async (
  response: AxiosResponse,
  next: Middleware,
) => {
  const { code } = response.data
  if (code !== 0) {
    $message.error(MessageTip[code])
  }
  await next()
}
