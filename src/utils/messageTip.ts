import type { AxiosError, AxiosResponse } from 'axios'

interface MessageTip {
  [key: string | number]: string
}
export const MessageTip: MessageTip = {
  401: '身份信息过期',
}
