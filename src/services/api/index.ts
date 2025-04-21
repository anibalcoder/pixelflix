import { MediaCategory, MediaFilter } from '../../core/types/global.d'

export const BASE_API_URL = 'https://api.themoviedb.org/3'
export const API_TOKEN = import.meta.env.VITE_API_TOKEN as string
export const API_LANGUAGE = 'es-ES'

export const getEndpoints = ({
  category,
  media,
  mediaId,
  genreId,
  query
}: MediaFilter) => {
  return {
    [MediaCategory.TRENDING]: `${BASE_API_URL}/${category}/${media}/day?language=${API_LANGUAGE}`,
    [MediaCategory.POPULAR]: `${BASE_API_URL}/${media}/${category}?language=${API_LANGUAGE}`,
    [MediaCategory.GENRE_FILTERS]: `${BASE_API_URL}/genre/${media}/list?language=${API_LANGUAGE}`,
    [MediaCategory.GENRE_FILTER]: `${BASE_API_URL}/discover/${media}?with_genres=${genreId as string}&language=${API_LANGUAGE}`,
    [MediaCategory.MEDIA_LIST]: `${BASE_API_URL}/discover/${media}?language=${API_LANGUAGE}`,
    [MediaCategory.MEDIA_DETAIL]: `${BASE_API_URL}/${media}/${mediaId as string}?language=${API_LANGUAGE}`,
    [MediaCategory.SIMILAR]: `${BASE_API_URL}/${media}/${mediaId as string}/similar?language=${API_LANGUAGE}`,
    [MediaCategory.SEARCH]: `${BASE_API_URL}/search/movie?query=${query as string}&language=${API_LANGUAGE}`
  }[category]
}
