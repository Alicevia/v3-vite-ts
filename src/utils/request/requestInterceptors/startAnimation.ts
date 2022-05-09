import type { AxiosRequestConfig } from 'axios'

export const startAnimation = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  $loadingBar?.start()
  return config
}
