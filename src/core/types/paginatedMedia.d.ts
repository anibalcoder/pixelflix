import { MediaType } from './global'

export type PaginatedMediaResult = Array<MovieItem | SerieItem>

export interface PaginatedMedia {
  page: number
  results: PaginatedMediaResult
  total_pages: number
  total_results: number
}

export interface MovieItem {
  backdrop_path: string
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  media_type?: MediaType
  adult: boolean
  original_language: OriginalLanguage
  genre_ids: number[]
  popularity: number
  release_date: Date
  video: boolean
  vote_average: number
  vote_count: number
}

export interface SerieItem {
  backdrop_path: string
  id: number
  name: string
  original_name: string
  overview: string
  poster_path: string
  media_type?: MediaType
  adult: boolean
  original_language: OriginalLanguage
  genre_ids: number[]
  popularity: number
  first_air_date: Date
  vote_average: number
  vote_count: number
  origin_country: string[]
}
