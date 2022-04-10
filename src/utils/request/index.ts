import axios from 'axios'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => {
    return Promise.reject(e)
  },
)
axios.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (e) => {
    return Promise.reject(e)
  },
)
