/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  baseUrl as baseUrlCS,
  useGetResponseDataWithParam
} from './CommonServices'

const baseUrl = baseUrlCS + '/user'

export function useGetUser () {
  return useGetResponseDataWithParam(baseUrl, 'user')
}
