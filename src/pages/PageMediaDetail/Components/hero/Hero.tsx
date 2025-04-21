import { Movie as MovieType } from '../../types/movie'
import { TV as TVType } from '../../types/tv'
import { PresentationHandler } from './presentation/PresentationHandler'
import placeholder from '../../../../assets/images/placeholder.webp'

type MovieSummary = Pick<MovieType, 'title' | 'backdrop_path' | 'genres' | 'runtime' | 'vote_average' | 'vote_count' | 'release_date'>

export interface HeroSectionProps extends MovieSummary {
  numberOfSeasons: TVType['number_of_seasons']
  numberOfEpisodes: TVType['number_of_episodes']
  isLoading: boolean
  isSuccess: boolean
}

export const Hero: React.FC<HeroSectionProps> = ({
  title,
  backdrop_path: backdropPath,
  genres,
  runtime,
  numberOfSeasons,
  numberOfEpisodes,
  release_date: releaseDate,
  vote_average: voteAverage,
  vote_count: voteCount,
  isSuccess,
  isLoading
}) => {
  const imagePath = backdropPath === undefined
    ? placeholder
    : `https://image.tmdb.org/t/p/original${backdropPath}`

  return (
    <section className='relative h-[calc(100vh-72px)] flex items-end bg-black/65'>
      <figure className='absolute top-0 left-0 w-full h-full -z-10'>
        <img
          className={`size-full object-cover object-center ${isLoading ? 'animate-pulse' : ''}`}
          src={imagePath}
          alt={`Película: ${title}`}
        />

        <figcaption className='sr-only'>{title}</figcaption>
      </figure>

      <PresentationHandler
        title={title}
        genres={genres}
        runtime={runtime}
        numberOfSeasons={numberOfSeasons}
        numberOfEpisodes={numberOfEpisodes}
        vote_average={voteAverage}
        vote_count={voteCount}
        release_date={releaseDate}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </section>
  )
}
