import { flow } from 'lodash'
import { setParamsData } from './setParamsData'
import { setToken } from './setToken'

const requestResolve = flow([setParamsData, setToken])

export { requestResolve }
