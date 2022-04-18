import type { AxiosError, AxiosResponse } from 'axios'

interface MessageTip {
  [key: string | number]: string
}
export const MessageTip: MessageTip = {
  401: '身份信息过期',
  2: '服务器错误',
}
export const createError = (response: AxiosError | AxiosResponse) => {
  if (response instanceof Error) {
    throw new Error(response.message, {
      cause: {
        ...response.response,
        name: response.config.url as string,
        message: response.message,
      },
    })
  } else {
    const { code } = response.data || {}
    throw new Error(MessageTip[code], {
      cause: {
        ...response,
        name: response.config.url as string,
        message: MessageTip[code],
      },
    })
  }
}
