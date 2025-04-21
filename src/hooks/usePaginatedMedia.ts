import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPaginatedMedia } from '../services/api/fetchPaginatedMedia'
import { PaginatedMediaResult } from '../core/types/paginatedMedia'

export const usePaginatedMedia = ({ apiURL }: { apiURL: string }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<{
    media: PaginatedMediaResult
    nextCursor?: number
  }>({
    queryKey: ['paginatedMedia', apiURL],
    queryFn: async ({ pageParam }) => await fetchPaginatedMedia({ apiURL, pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined
    },
    refetchOnWindowFocus: false
  })

  return {
    data: data?.pages.flatMap(page => page.media) ?? [],
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  }
}
