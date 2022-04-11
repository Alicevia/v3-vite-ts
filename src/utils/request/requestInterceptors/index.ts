import { flow } from 'lodash'
import { setParamsData } from './setParamsData'
import { setToken } from './setToken'

const requestInterceptors = flow([setParamsData, setToken])

export { requestInterceptors }
