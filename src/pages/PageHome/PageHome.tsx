import { Hero } from './components/hero/Hero'
import { DiscoverMedia } from '../../core/components/discoverMedia/DiscoverMedia'
import { MediaCategory } from '../../core/types/global.d'
import { FeaturedGenres } from './components/featuredGenres/FeaturedGenres'
import Layout from '../../core/layouts/Layout'

export default function PageHome () {
  return (
    <Layout
      title='PixelFlix | Inicio'
      description='Explora Pixelflix, tu guía completa para descubrir información sobre películas y series: sinopsis, calificaciones y más. ¡Todo en un solo lugar!'
    >
      <Hero />
      <DiscoverMedia
        category={MediaCategory.TRENDING} showMediaSelection
      />
      <FeaturedGenres />
      <DiscoverMedia
        category={MediaCategory.POPULAR} showMediaSelection
      />
    </Layout>
  )
}
