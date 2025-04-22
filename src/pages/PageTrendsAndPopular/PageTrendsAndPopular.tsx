import { Navigate, useParams, useSearchParams } from 'react-router-dom'
import Layout from '../../core/layouts/Layout'
import { MediaList } from '../../core/components/MediaList/MediaList'
import { MediaCategory, MediaType } from '../../core/types/global.d'
import { getEndpoints } from '../../services/api'

function getCategoryLabel (category: MediaCategory) {
  switch (category) {
    case MediaCategory.TRENDING:
      return 'Tendencias'
    case MediaCategory.POPULAR:
      return 'Populares'
    default:
      return 'Título no encontrado'
  }
}

export default function PageTrendsAndPopular () {
  const { media } = useParams()
  const [searchParams] = useSearchParams()

  const selectedCategory = searchParams.get('filter') as MediaCategory
  const selectedMedia = media as MediaType

  const API_URL = getEndpoints({ category: selectedCategory, media: selectedMedia })
  const categoryLabel = getCategoryLabel(selectedCategory)

  // Verificar que los parámetros de medio y categoría en la URL sean válidos
  const isValidMedia = [MediaType.MOVIE, MediaType.TV].includes(selectedMedia)
  const isValidCategory = [MediaCategory.TRENDING, MediaCategory.POPULAR].includes(selectedCategory)

  if (!isValidMedia || !isValidCategory) {
    return <Navigate to='*' replace />
  }

  return (
    <Layout
      title={`PixelFlix | ${categoryLabel}`}
      description={`Descubre las películas y series en ${categoryLabel.toLowerCase()} hoy. ¡Actualizado diariamente según las preferencias del público!`}
    >
      <MediaList apiURL={API_URL} media={media as MediaType} />
    </Layout>
  )
}
