import { API_TOKEN } from '.'
import { PaginatedMedia, PaginatedMediaResult } from '../../core/types/paginatedMedia'

interface FetchPaginatedMediaParams {
  apiURL: string
  pageParam: number
}

export async function fetchPaginatedMedia ({ apiURL, pageParam }: FetchPaginatedMediaParams): Promise<{
  media: PaginatedMediaResult
  nextCursor?: number
}> {
  try {
    const PAGINATED_API_URL = `${apiURL}&page=${pageParam}`

    const res = await fetch(PAGINATED_API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: No se pudo obtener la información desde ${PAGINATED_API_URL}`)
    }

    const paginatedData = await res.json() as PaginatedMedia
    const nextCursor = paginatedData.page < paginatedData.total_pages ? paginatedData.page + 1 : undefined

    return {
      media: paginatedData.results,
      nextCursor
    }
  } catch (err) {
    if (err instanceof Error) {
      throw err
    } else {
      throw new Error('Unknown error occurred while fetching paginated media')
    }
  }
}
