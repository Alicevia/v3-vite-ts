import axios from 'axios'
import type { AxiosError } from 'axios'
import { responseResolve } from './reponseInterceptors'
import { requestInterceptors } from './requestInterceptors'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = '/api'

axios.interceptors.request.use(requestInterceptors, (e) => {
  return Promise.reject(e)
})
axios.interceptors.response.use(
  async (response) => {
    return responseResolve(response)
      .then(() => response)
      .catch((e: AxiosError) => {
        throw new Error('Unified handling error in middleware creating', {
          cause: e,
        })
      })
  },
  (e) => {
    console.log('err', e)
    return Promise.reject(e)
  },
)
