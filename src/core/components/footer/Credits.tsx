import { ArrowIcon } from '../icons/UI'

export function Credits () {
  return (
    <section
      className='pt-8 flex flex-wrap justify-between items-center gap-4'
    >
      <p className='flex place-content-center flex-wrap gap-1'>
        Hecho por
        <a
          className='text-blue-400 font-medium'
          href='https://twitter.com/anibalcoder'
          target='_blank'
          rel='noopener noreferrer'
          title='Ir a mi Twitter'
        >
          @anibalcoder
        </a>
      </p>

      <a
        className='inline-flex items-center text-emerald-300 hover:text-white transition-colors'
        href='#'
      >
        Volver arriba
        <ArrowIcon className='rotate-90 transition-opacity duration-300' />
      </a>
    </section>
  )
}
