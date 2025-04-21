import { FilterIcon } from '../../../../core/components/icons/UI'
import { GenreFiltersSkeleton } from './GenreFiltersSkeleton'
import { GenreFiltersCarousel } from './GenreFiltersCarousel'
import { ErrorMessage } from '../../../../core/components/ErrorMessage'
import { useMedia } from '../../../../hooks/useMedia'
import { Genre, Genres as GenresType } from '../../../../core/types/genres'
import { MediaCategory, MediaType } from '../../../../core/types/global.d'
import { getEndpoints } from '../../../../services/api'

export const GenreFilters = ({ media }: { media: MediaType }) => {
  const API_URL = getEndpoints({ category: MediaCategory.GENRE_FILTERS, media })

  const { data, isLoading, isError } = useMedia<GenresType>({ apiURL: API_URL })

  return (
    <section className='bg-genres'>
      <div className='inner space-y-6'>
        <h2 className='text-2xl font-semibold flex items-center gap-2'>
          <FilterIcon className='text-yellow-200' />
          Géneros
        </h2>

        <div className='h-1 bg-emerald-300 rounded-full' />

        {isLoading && <GenreFiltersSkeleton />}

        {data?.genres?.length as number > 0 && (
          <GenreFiltersCarousel genres={data?.genres as Genre[]} media={media} />
        )}

        {isError && !isLoading && (<ErrorMessage />)}
      </div>
    </section>
  )
}
