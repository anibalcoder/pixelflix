import Layout from '../../core/layouts/Layout'
import { Favorites } from './components/Favorites'

export default function () {
  return (
    <Layout
      title='PixelFlix | Favoritos'
      description='Explora tus películas y series favoritas guardadas en PixelFlix. Accede rápidamente a todo el contenido que marcaste como favorito y continúa disfrutando de tu entretenimiento personalizado.'
    >
      <Favorites />
    </Layout>
  )
}
