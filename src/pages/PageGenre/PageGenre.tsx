import { useParams } from 'react-router-dom'
import Layout from '../../core/layouts/Layout'
import { MediaList } from '../../core/components/MediaList/MediaList'
import { MediaCategory, MediaType } from '../../core/types/global.d'
import { getEndpoints } from '../../services/api'

const PageGenre = () => {
  const { media, genreId } = useParams()

  const API_URL = getEndpoints({
    category: MediaCategory.GENRE_FILTER,
    media: media as MediaType,
    genreId: genreId as string
  })

  return (
    <Layout
      title='PixelFlix: Encuentra contenido por género'
      description='Descubre nuevos títulos según tus géneros favoritos como acción, comedia, drama y más.'
    >
      <MediaList media={media as MediaType} apiURL={API_URL} />
    </Layout>
  )
}

export default PageGenre
