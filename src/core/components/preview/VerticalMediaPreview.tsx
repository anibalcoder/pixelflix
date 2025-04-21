import { FavoriteIcon } from '../icons/UI'
import { FavoriteMediaItem, useFavoriteMediaStore } from '../../../store/favorites'
import loadingSpinner from '../../../assets/gif/loading.gif'
import noImageAviable from '../../../assets/images/noImageAviable.webp'

export interface VerticalMediaPreviewProps extends FavoriteMediaItem {
  relativePosterPath: string
}

export const VerticalMediaPreview: React.FC<VerticalMediaPreviewProps> = ({
  id,
  title,
  relativeBackdropPath,
  relativePosterPath,
  releaseDate,
  voteAverage,
  media
}) => {
  const toggleFavorite = useFavoriteMediaStore(state => state.toggleFavorite)
  const favorites = useFavoriteMediaStore(state => state.favorites)
  const isInFavorite = favorites.some(fav => fav.id === id)

  return (
    <article className='relative inline-block'>
      <button
        onClick={() => toggleFavorite({ id, title, relativeBackdropPath, voteAverage, releaseDate, media }, isInFavorite)}
        className={`${isInFavorite ? 'bg-red-500 hover:bg-btn-favorite' : 'bg-btn-favorite hover:bg-red-500'} p-1.5 rounded-full flex items-center transition-colors cursor-pointer absolute top-2 right-2 z-10`}
        aria-label={`Añadir ${title} a favoritos`}
      >
        <FavoriteIcon className='size-5 text-white' />
      </button>

      <a
        href={`/${media}/${id}`}
        aria-label={`Más detalles sobre ${title}`}
        className='block w-44 h-60 rounded-lg overflow-hidden focus:outline focus:ring-2 focus:ring-blue-500'
      >
        <figure className='size-full'>
          <img
            className='lazy size-full object-cover object-center hover:scale-110 transition-transform duration-300'
            data-src={relativePosterPath ? `https://image.tmdb.org/t/p/w780/${relativePosterPath}` : noImageAviable}
            src={loadingSpinner}
            alt={title}
          />
          <figcaption className='sr-only'>{title}</figcaption>
        </figure>
      </a>
    </article>
  )
}
