import generateRoute from './generateRoute'
import importComponents from './importComponents'
import Unocss from 'unocss/vite'
import vue from './vue'

export default () =>
  [vue, generateRoute, importComponents].reduce(
    (pre, item) => {
      pre.push(...item())
      return pre
    },
    [Unocss()],
  )
