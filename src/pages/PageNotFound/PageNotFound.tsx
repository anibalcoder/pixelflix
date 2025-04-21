import Image404 from '../../assets/images/404.webp'
import Layout from '../../core/layouts/Layout'

export default function PageNotFound () {
  return (
    <Layout
      title='PixelFlix | Página no encontrada'
      description='La página que estás buscando no existe. Explora nuestro catálogo o vuelve al inicio para seguir disfrutando de PixelFlix.'
    >
      <section className='flex flex-col items-center gap-4'>
        <figure className='max-w-xl'>
          <img
            style={{ filter: 'drop-shadow(.5rem .5rem 1rem red)' }}
            src={Image404}
            alt='Ilustración de error 404, página no encontrada'
          />

          <figcaption className='sr-only'>Error 404 - Página no encontrada</figcaption>
        </figure>

        <div className='text-center'>
          <h1>¡Escena no encontrada!</h1>
          <p className='hero-description mt-4'>La página que buscas no existe o ha sido movida a otro servidor.</p>
        </div>
      </section>
    </Layout>
  )
}
