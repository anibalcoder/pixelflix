import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { VerticalMediaPreview } from '../preview/VerticalMediaPreview'
import { ArrowIcon } from '../icons/UI'
import { MovieItem, PaginatedMediaResult, SerieItem } from '../../types/paginatedMedia'
import { MediaType } from '../../types/global.d'
import lazyLoading from '../../util/lazyLoading'

interface DiscoverMediaCarouselProps {
  data: PaginatedMediaResult
  media: MediaType
}

export const DiscoverMediaCarousel: React.FC<DiscoverMediaCarouselProps> = ({ data, media }) => {
  useEffect(() => {
    lazyLoading()
  }, [data])

  return (
    <section className='relative'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
        slidesPerView='auto'
      >
        {
          data?.map((item) => {
            const title = media === MediaType.MOVIE
              ? (item as MovieItem).title
              : (item as SerieItem).name

            const releaseDate = media === MediaType.MOVIE
              ? (item as MovieItem).release_date
              : (item as SerieItem).first_air_date

            return (
              <SwiperSlide key={item.id} className='!w-44 shrink-0'>
                <VerticalMediaPreview
                  id={item.id}
                  title={title}
                  relativeBackdropPath={item.backdrop_path}
                  relativePosterPath={item.poster_path}
                  voteAverage={item.vote_average}
                  releaseDate={releaseDate}
                  media={media}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <button
        className='prev-btn bg-[#2D336B] opacity-80 hover:opacity-100 transition-opacity rounded-full cursor-pointer absolute top-1/2 -left-2 -translate-y-1/2 z-10'
        aria-label='Retroceder carrusel'
        type='button'
      >
        <ArrowIcon className='size-10 -rotate-90' />
      </button>

      <button
        className='next-btn bg-[#2D336B] opacity-80 hover:opacity-100 transition-opacity rounded-full cursor-pointer absolute top-1/2 -right-2 -translate-y-1/2 z-10'
        aria-label='Avanzar carrusel'
        type='button'
      >
        <ArrowIcon className='size-10 rotate-90' />
      </button>
    </section>
  )
}
