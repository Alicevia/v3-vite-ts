import { createError } from './../messageTip'
import axios from 'axios'
import type { AxiosError } from 'axios'
import { responseResolve } from './reponseInterceptors'
import { requestResolve } from './requestInterceptors'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = '/api'

axios.interceptors.request.use(requestResolve, (e) => {
  return Promise.reject(e)
})
axios.interceptors.response.use(
  async (response) => {
    return await responseResolve(response)
      .then(() => response)
      .catch(() => Promise.reject(createError(response)))
  },
  (e: AxiosError) => {
    $message.error(e.message || 'network is so slow')
    $loadingBar?.error()
    return Promise.reject(createError(e))
  },
)
