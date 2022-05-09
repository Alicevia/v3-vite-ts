import { flow } from 'lodash'
import { setParamsData } from './setParamsData'
import { setToken } from './setToken'
import { startAnimation } from './startAnimation'

const requestResolve = flow([startAnimation, setParamsData, setToken])

export { requestResolve }
