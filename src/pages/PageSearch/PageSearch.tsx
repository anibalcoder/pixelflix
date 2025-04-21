import { useSearchParams } from 'react-router-dom'
import { MediaCategory, MediaType } from '../../core/types/global.d'
import { getEndpoints } from '../../services/api'
import Layout from '../../core/layouts/Layout'
import { MediaList } from '../../core/components/MediaList/MediaList'

export default function PageSearch () {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const API_URL = getEndpoints({
    category: MediaCategory.SEARCH,
    media: MediaType.MOVIE,
    query: query as string
  })

  const searchName = query?.trim().toLocaleLowerCase() as string

  return (
    <Layout
      title={`PixelFlix: Resultados para ${searchName}`}
      description={`Descubre contenido relacionado con "${searchName}" y encuentra tu próxima película o serie favorita.`}
    >
      <MediaList apiURL={API_URL} media={MediaType.MOVIE} />
    </Layout>
  )
}
