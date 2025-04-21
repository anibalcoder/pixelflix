import { useEffect } from 'react'
import { MediaListContainer } from './MediaListContainer'
import { usePaginatedMedia } from '../../../hooks/usePaginatedMedia'
import { ErrorMessage } from '../ErrorMessage'
import { MediaType } from '../../types/global.d'
import lazyLoading from '../../util/lazyLoading'
import { MediaListSkeleton } from './MediaListSkeleton'
import { EmptyMessage } from '../EmptyMessage'

interface MediaListProps {
  media: MediaType
  apiURL: string
}

export const MediaList: React.FC<MediaListProps> = ({ media, apiURL }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = usePaginatedMedia({ apiURL })

  useEffect(() => {
    lazyLoading()
  }, [data])

  const extraSkeletons = isFetchingNextPage ? [MediaListSkeleton({ count: 9 })].flat() : []

  return (
    <section>
      <div className='inner'>
        {isLoading && <MediaListSkeleton count={9} asGrid />}

        {!isLoading && data.length === 0 && <EmptyMessage />}

        {!isLoading && data.length > 0 && <MediaListContainer data={data} media={media} extraItems={extraSkeletons} />}

        {!isLoading && !isError && hasNextPage && (
          <div className='flex place-content-center mt-10 '>
            <button
              onClick={() => { void fetchNextPage() }}
              className="group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg cursor-pointer"
            >
              Ver más
            </button>
          </div>
        )}

        {!isLoading && isError && (<ErrorMessage />)}
      </div>
    </section>
  )
}
