import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DiscoverMediaCarouselSkeleton } from './DiscoverMediaCarouselSkeleton'
import { ErrorMessage } from '../ErrorMessage'
import { usePaginatedMedia } from '../../../hooks/usePaginatedMedia'
import { MediaCategory, MediaType, MediaFilter } from '../../types/global.d'
import { getEndpoints } from '../../../services/api'
import { DiscoverMediaCarousel } from './DiscoverMediaCarousel'

interface DiscoverMediaProps {
  category: MediaCategory
  showMediaSelection: boolean
}

export const DiscoverMedia: React.FC<DiscoverMediaProps> = ({ category, showMediaSelection }) => {
  const { media, mediaId } = useParams()

  const [currentFilter, setCurrentFilter] = useState<MediaFilter>({
    category,
    media: (media as MediaType) || MediaType.MOVIE
  })

  const API_URL = getEndpoints({
    category,
    media: currentFilter.media,
    mediaId
  })

  const { data, isLoading, isError } = usePaginatedMedia({ apiURL: API_URL })

  const handleMediaTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentFilter(prev => ({
      ...prev, media: event.target.value as MediaType
    }))
  }

  return (
    <section className='bg-media-carousel'>
      <div className='inner flex flex-col gap-9'>
        <header className='flex justify-between items-center'>
          <h2
            className='text-2xl text-discover-title font-bold'
          >
            {category === MediaCategory.TRENDING && (<>Tendencias</>)}
            {category === MediaCategory.POPULAR && (<>Populares</>)}
            {category === MediaCategory.SIMILAR && (<>Similares</>)}
          </h2>

          {showMediaSelection && (
            <select
              onChange={handleMediaTypeChange}
              className='focus:outline-none bg-btn-discover text-sm font-medium text-btn-text-dark px-4 py-2 rounded-lg'
            >
              <option value={MediaType.MOVIE}>Películas</option>
              <option value={MediaType.TV}>Series</option>
            </select>
          )}
        </header>

        {isLoading && <DiscoverMediaCarouselSkeleton />}

        {data.length > 0 && <DiscoverMediaCarousel data={data} media={currentFilter.media} />}

        {!isLoading && isError && <ErrorMessage />}
      </div>
    </section>
  )
}
