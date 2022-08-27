import useSWR from 'swr'
import { getFetcher } from './fetchers'

export function useGetRequest<T>(url: string) {
  const { data, error } = useSWR(url, getFetcher)

  return {
    data: data as T,
    isError: error,
    isLoading: !error && !data,
  }
}
