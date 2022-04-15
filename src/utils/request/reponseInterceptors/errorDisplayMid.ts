import { MessageTip } from '@/utils/messageTip'
import type { AxiosResponse } from 'axios'

export const errorDisplayMid = async (response: AxiosResponse, next: any) => {
  const { code } = response.data
  if (code !== 0) {
    $message.error(MessageTip[code])
  }
  await next()
}
