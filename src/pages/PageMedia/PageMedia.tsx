import Layout from '../../core/layouts/Layout'
import { Hero } from './components/hero/Hero'
import { GenreFilters } from './components/genreFilters/GenreFilters'
import { MediaList } from '../../core/components/MediaList/MediaList'
import { MediaCategory, MediaType } from '../../core/types/global.d'
import { getEndpoints } from '../../services/api'

interface PageMediaProps {
  media: MediaType
}

export default function PageMedia ({ media }: PageMediaProps) {
  const API_URL = getEndpoints({ category: MediaCategory.MEDIA_LIST, media })

  const title = media === MediaType.MOVIE
    ? 'Películas'
    : 'Series'

  const heroDescription = media === MediaType.MOVIE
    ? 'Sumérgete en nuestra colección de películas y descubre los últimos estrenos, clásicos imperdibles y los títulos más populares del momento'
    : 'Explora series aclamadas y estrenos imperdibles que te mantendrán al borde del asiento. Desde thrillers intensos hasta comedias entrañables'

  return (
    <Layout
      title={`PixelFlix | ${title}`}
      description={`Explora una amplia selección de ${title.toLowerCase()}. Encuentra los mejores estrenos y clásicos atemporales según el género que más te guste.`}
    >
      <Hero
        heroTitle={title}
        heroDescription={heroDescription}
        media={media}
      />

      <GenreFilters media={media} />

      <MediaList media={media} apiURL={API_URL} />
    </Layout>
  )
}
