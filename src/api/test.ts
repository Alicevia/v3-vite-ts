import { useAxios } from '@vueuse/integrations/useAxios'

export const getTestJson = () => {
  return useAxios('/public/test.json')
}

export const getTest2Json = () => {
  return useAxios('/public/test2.json')
}

export const getUserInfo = () => {
  return useAxios('/public/auth.json')
}
