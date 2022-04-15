import type { AxiosResponse } from 'axios'

export const backResponse = async (response: AxiosResponse, next: any) => {
  next()
}
