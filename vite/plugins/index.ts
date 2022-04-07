import generateRoute from './generateRoute'
import importComponents from './importComponents'
import vue from './vue'

export default () =>
  [vue, generateRoute, importComponents].reduce((pre, item) => {
    pre.push(...item())
    return pre
  }, [])
