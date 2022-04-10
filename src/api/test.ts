import { useAxios } from '@vueuse/integrations/useAxios'

export const getTestJson = () => {
  return useAxios('/public/test.json')
}
