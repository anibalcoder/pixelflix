import { ReactNode } from 'react'
import { HorizontalMediaPreview } from '../preview/HorizontalMediaPreview'
import { MovieItem, PaginatedMediaResult, SerieItem } from '../../types/paginatedMedia'
import { MediaType } from '../../types/global.d'

interface MediaListContainerProps {
  data: PaginatedMediaResult
  media: MediaType
  extraItems?: ReactNode[]
}

export const MediaListContainer: React.FC<MediaListContainerProps> = ({
  data,
  media,
  extraItems = []
}) => {
  return (
    <ul className='grid-responsive'>
      {data?.map((item, index) => {
        const title = media === MediaType.MOVIE
          ? (item as MovieItem).title
          : (item as SerieItem).name

        const releaseDate = media === MediaType.MOVIE
          ? (item as MovieItem).release_date
          : (item as SerieItem).first_air_date

        return (
          <li key={index}>
            <HorizontalMediaPreview
              id={item.id}
              title={title}
              relativeBackdropPath={item.backdrop_path}
              voteAverage={item.vote_average}
              releaseDate={releaseDate}
              media={media}
            />
          </li>
        )
      })}

      {extraItems.map((item, index) => (
        <li key={`extra-${index}`}>{item}</li>
      ))}
    </ul>
  )
}
