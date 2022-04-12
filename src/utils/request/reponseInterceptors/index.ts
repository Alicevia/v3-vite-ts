import { loginCheckMid } from './loginCheckMid'
import compose from 'koa-compose'
import { backResponse } from './backResponseMid'
import { errorDisplayMid } from './errorDisplayMid'

const responseResolve = compose([errorDisplayMid, loginCheckMid, backResponse])

export { responseResolve }

function koaCompose(middleware) {
  return function (context, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
