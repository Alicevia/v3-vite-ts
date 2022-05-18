import { useAxios } from '@vueuse/integrations/useAxios'

export const getTestJson = () => {
  return useAxios('/public/test.json', {}, { immediate: false, })
}

export const getTest2Json = () => {
  return useAxios('/public/test2.json')
}
export const getTestError = () => {
  return useAxios('/public/test42.json', {}, { immediate: false, })
}
export const getUserInfo = () => {
  return useAxios('/public/auth.json')
}
