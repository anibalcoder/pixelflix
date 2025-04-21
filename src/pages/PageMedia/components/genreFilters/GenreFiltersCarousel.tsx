import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Genre } from '../../../../core/types/genres'
import { MediaType } from '../../../../core/types/global.d'
import { ArrowIcon } from '../../../../core/components/icons/UI'

interface GenreFiltersCarouselProps {
  genres: Genre[]
  media: MediaType
}

export const GenreFiltersCarousel: React.FC<GenreFiltersCarouselProps> = ({ genres, media }) => {
  return (
    <section className='relative'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
        slidesPerView='auto'
      >
        {
          genres?.map(({ id, name }) => (
            <SwiperSlide key={id} className='!w-auto'>
              <a
                className='inline-block text-sm sm:text-base text-btn-text-light hover:text-btn-text-dark px-4 py-2 border border-btn-text-light rounded-md hover:bg-white transition-colors duration-300 cursor-pointer'
                href={`${media}/genre/${id}`}
                aria-label={`Explorar ${name} en ${media === MediaType.MOVIE ? 'películas' : 'series'}`}
              >
                {name}
              </a>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <button
        className='prev-btn bg-[#2D336B] opacity-80 hover:opacity-100 transition-opacity rounded-full cursor-pointer absolute top-1/2 -left-2 -translate-y-1/2 z-10'
        aria-label='Retroceder carrusel'
        type='button'
      >
        <ArrowIcon className='size-8 -rotate-90' />
      </button>

      <button
        className='next-btn bg-[#2D336B] opacity-80 hover:opacity-100 transition-opacity rounded-full cursor-pointer absolute top-1/2 -right-2 -translate-y-1/2 z-10'
        aria-label='Avanzar carrusel'
        type='button'
      >
        <ArrowIcon className='size-8 rotate-90' />
      </button>
    </section>
  )
}
