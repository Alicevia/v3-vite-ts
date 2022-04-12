import { useAxios } from '@vueuse/integrations/useAxios'

export const getTestJson = () => {
  return useAxios('/public1/test.json')
}

export const getTest2Json = () => {
  return useAxios('/public/test2.json')
}
