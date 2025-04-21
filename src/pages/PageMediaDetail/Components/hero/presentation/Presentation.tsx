import { useParams } from 'react-router-dom'
import { HeroSectionProps } from '../Hero'
import { MediaType } from '../../../../../core/types/global.d'
import { CalendarIcon, StarIcon, WatchIcon } from '../../../../../core/components/icons/UI'

type PresentationProps = Omit<HeroSectionProps, 'backdrop_path' | 'isLoading' | 'isSuccess'>

export const Presentation: React.FC<PresentationProps> = ({
  title,
  genres,
  runtime,
  numberOfSeasons,
  numberOfEpisodes,
  vote_average: voteAverage,
  vote_count: voteCount,
  release_date: releaseDate
}) => {
  const { media } = useParams()

  const releaseDates = new Date(releaseDate)

  const formattedDate = releaseDates.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <section className='w-full'>
      <div
        className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 py-6 sm:py-12'
      >
        <section className='sm:col-span-2 space-y-4'>
          <h1 className='text-center sm:text-left'>
            {title}
          </h1>

          <ul className='flex flex-wrap justify-center sm:justify-normal items-center gap-3'>
            {genres.map(({ name, id }) => (
              <li key={id}>
                <a
                  className='bg-page/70 text-white/70 text-sm font-medium px-2 py-1 rounded-sm hover:text-white transition-colors'
                  href={`/${media as MediaType}/genre/${id}`}
                  aria-label={`Ir al género ${name}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex justify-center sm:justify-normal gap-1'>
            <CalendarIcon className='size-4.5 sm:size-5' />
            <time dateTime={formattedDate} className='text-sm sm:text-base'>
              {/* {formattedDate} */}
              {releaseDate.toString() === ''
                ? 'Fecha de estreno no disponible'
                : formattedDate}
            </time>
          </div>
        </section>

        <section className='space-y-4 justify-items-center sm:justify-items-end'>
          <div>
            <span className='text-yellow-300 text-xl font-semibold flex justify-center items-end gap-1'>
              <StarIcon className='size-8' />
              {voteAverage?.toFixed(1)}/10
            </span>

            <span className='text-sm text-white/70 font-medium'>
              {voteCount} Calificaciones
            </span>
          </div>

          <div className='bg-btn-duration text-btn-text-dark text-xs font-medium inline-flex items-center gap-2 px-2 py-1.5 rounded-sm'>
            <WatchIcon className='size-3.5' />
            <span>
              {media === MediaType.MOVIE
                ? `${runtime} minutos`
                : `${numberOfSeasons} temporada${numberOfSeasons > 1 ? 's' : ''} | ${numberOfEpisodes} episodios`}
            </span>
          </div>
        </section>
      </div>
    </section>
  )
}
