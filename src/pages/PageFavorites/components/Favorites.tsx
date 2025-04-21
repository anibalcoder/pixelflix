import { useEffect } from 'react'
import { HorizontalMediaPreview } from '../../../core/components/preview/HorizontalMediaPreview'
import { useFavoriteMediaStore } from '../../../store/favorites'
import { EmptyFavorites } from './EmptyFavorites'
import lazyLoading from '../../../core/util/lazyLoading'

export const Favorites = () => {
  const favorites = useFavoriteMediaStore(state => state.favorites)

  useEffect(() => {
    lazyLoading()
  }, [favorites])

  return (
    <section>
      <div className='inner'>
        <ul className='grid-responsive'>
          {favorites.length === 0 && <EmptyFavorites />}

          {favorites?.map(({ ...favorite }) => (
            <li key={favorite.id}>
              <HorizontalMediaPreview {...favorite} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
