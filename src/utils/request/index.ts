import axios from 'axios'
import type { AxiosError } from 'axios'
import { responseResolve } from './reponseInterceptors'
import { requestResolve } from './requestInterceptors'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = '/api'

axios.interceptors.request.use(requestResolve, (e) => {
  return Promise.reject(e)
})
axios.interceptors.response.use(responseResolve, (e) => {
  $message.error(e.message || 'network has some error')
  return Promise.reject(e)
})
