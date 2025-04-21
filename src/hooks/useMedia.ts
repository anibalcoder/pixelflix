import { useQuery } from '@tanstack/react-query'
import { fetchMedia } from '../services/api/fetchMedia'

export function useMedia<T> ({ apiURL }: { apiURL: string }) {
  const { data, isLoading, isSuccess, isError } = useQuery<T>({
    queryKey: ['media', apiURL],
    queryFn: async () => await fetchMedia<T>({ apiURL }),
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading,
    isSuccess,
    isError
  }
}
