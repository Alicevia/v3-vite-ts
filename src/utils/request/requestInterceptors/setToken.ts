import type { AxiosRequestConfig } from 'axios'
import useUserStore from 'store/user'

export function setToken(config: AxiosRequestConfig): AxiosRequestConfig {
  const { token } = useUserStore()
  if (token)
    config.headers
      ? (config.headers.Authorization = `Bearer ${token}`)
      : (config.headers = { Authorization: `Bearer ${token}` })

  return config
}
