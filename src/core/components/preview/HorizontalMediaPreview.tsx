import { CalendarIcon, FavoriteIcon, StarIcon } from '../icons/UI'
import { FavoriteMediaItem, useFavoriteMediaStore } from '../../../store/favorites'
import loadingSpinner from '../../../assets/gif/loading.gif'
import noImageAviable from '../../../assets/images/noImageAviable.webp'

interface HorizontalMediaPreviewProps extends FavoriteMediaItem {}

export const HorizontalMediaPreview: React.FC<HorizontalMediaPreviewProps> = ({ ...mediaItem }) => {
  const releaseDates = new Date(mediaItem.releaseDate)

  const formattedDate = releaseDates.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const toggleFavorite = useFavoriteMediaStore(state => state.toggleFavorite)
  const favorites = useFavoriteMediaStore(state => state.favorites)
  const isInFavorite = favorites.some(fav => fav.id === mediaItem.id)

  return (
    <article className='flex relative'>
      <button
        onClick={() => toggleFavorite({ ...mediaItem }, isInFavorite)}
        className={`${isInFavorite ? 'bg-red-500 hover:bg-btn-favorite' : 'bg-btn-favorite hover:bg-red-500'} p-1.5 rounded-full flex items-center transition-colors cursor-pointer absolute top-2 right-2 z-10`}
        aria-label={`Añadir ${mediaItem.title} a favoritos`}
      >
        <FavoriteIcon className='size-5 text-white' />
      </button>

      <a
        className='group relative w-full inline-block bg-horizontal-media-preview shadow-md hover:shadow-2xl rounded-lg md:rounded-xl overflow-hidden transition-shadow duration-300'
        href={`/${mediaItem.media}/${mediaItem.id}`}
        aria-label={`Más detalles sobre ${mediaItem.title}`}
      >
        <figure
          style={{ maskImage: 'linear-gradient(#2c2c2c 80%, transparent)' }}
          className='h-48 overflow-hidden'
        >
          <img
            className='lazy group-hover:scale-105 size-full object-cover object-center transition-transform duration-300'
            data-src={mediaItem.relativeBackdropPath ? `https://image.tmdb.org/t/p/w780/${mediaItem.relativeBackdropPath}` : noImageAviable}
            src={loadingSpinner}
            alt={mediaItem.title}
          />

          <figcaption className='sr-only'>{mediaItem.title}</figcaption>
        </figure>

        <footer className='p-4'>
          <h3 className='text-white font-bold line-clamp-1 mb-2'>
            {mediaItem.title}
          </h3>

          <div className='text-xs flex justify-between items-center flex-wrap gap-2'>
            <div className='text-gray-300 flex justify-center items-center gap-1'>
              <CalendarIcon className='size-3' />
              <span>{formattedDate}</span>
            </div>

            <div className='flex items-center gap-1 bg-[#5D8C51] px-2 py-1 rounded-sm'>
              <StarIcon className='size-4 text-yellow-300' />
              <span className='font-bold'>{mediaItem.voteAverage?.toFixed(1)}</span>
            </div>
          </div>
        </footer>
      </a>
    </article>
  )
}
