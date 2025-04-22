import { MediaType } from '../../../../core/types/global.d'

interface PresentationProps {
  title: string
  description: string
  media: MediaType
}

export const Presentation: React.FC<PresentationProps> = ({
  title,
  description,
  media
}) => {
  return (
    <div className='inner max-w-3xl h-full flex flex-col justify-center items-center text-center gap-6'>
      <h1>{`Explorar ${title}`}</h1>

      <p className='hero-description'>{description}</p>

      <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-4 animate-fade-in animate-delay-150'>
        <a
          className='bg-btn-discover text-btn-text-dark font-medium px-5 py-2 rounded-full cursor-pointer hover:scale-95 transition-transform duration-300'
          href={`/${media}/search?filter=trending`}
          aria-label='Explorar contenido en tendencia'
        >
          Tendencias
        </a>

        <a
          className='bg-btn-popular text-btn-text-dark font-medium px-5 py-2 rounded-full cursor-pointer hover:scale-95 transition-transform duration-300'
          href={`/${media}/search?filter=popular`}
          aria-label='Explorar contenido popular'
        >
          Populares
        </a>
      </div>
    </div>
  )
}
