/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  baseUrl as baseUrlCS,
  useGetResponseData
} from './CommonServices'

const baseUrl = baseUrlCS + '/statistics'

export function useGetItems () {
  console.log(baseUrl)
  return useGetResponseData(baseUrl, 'statisticItems')
}
