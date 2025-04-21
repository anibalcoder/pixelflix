export enum MediaCategory {
  TRENDING = 'trending',
  POPULAR = 'popular',
  GENRE_FILTERS = 'GenreFilters',
  GENRE_FILTER = 'genre',
  MEDIA_LIST = 'mediaList',
  MEDIA_DETAIL = 'mediaDetail',
  SIMILAR = 'similar',
  SEARCH = 'search'
}

export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv',
}

export interface MediaFilter {
  category: MediaCategory
  media: MediaType
  mediaId?: string
  genreId?: string
  query?: string
}

interface FooterLink {
  title: string
  link: string
  ariaLabel: string
  openInNewTab?: boolean
  icon: JSX.Element
}

interface FooterSection {
  title: string
  links: FooterLink[]
}
