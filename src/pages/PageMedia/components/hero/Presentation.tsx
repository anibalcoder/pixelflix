interface PresentationProps {
  title: string
  description: string
}

export const Presentation: React.FC<PresentationProps> = ({ title, description }) => {
  return (
    <div className='inner max-w-3xl h-full flex flex-col justify-center items-center text-center gap-6'>
      <h1>{`Explorar ${title}`}</h1>

      <p className='hero-description'>{description}</p>

      <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-4 animate-fade-in animate-delay-150'>
        <a
          className='bg-btn-discover text-btn-text-dark font-medium px-5 py-2 rounded-full cursor-pointer hover:scale-95 transition-transform duration-300'
          href='#'
          aria-label='Explorar contenido en tendencia'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tendencias
        </a>

        <a
          href='#'
          className='bg-btn-popular text-btn-text-dark font-medium px-5 py-2 rounded-full cursor-pointer hover:scale-95 transition-transform duration-300'
          aria-label='Explorar contenido popular'
          target='_blank'
          rel='noopener noreferrer'
        >
          Populares
        </a>
      </div>
    </div>
  )
}
