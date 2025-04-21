import { HeroSectionProps } from '../Hero'
import { PresentationSkeleton } from './PresentationSkeleton'
import { Presentation } from './Presentation'

type PresentationHandlerProps = Omit<HeroSectionProps, 'backdrop_path'>

export const PresentationHandler: React.FC<PresentationHandlerProps> = ({
  title,
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
  if (isLoading) return <PresentationSkeleton />

  if (isSuccess) {
    return (
      <Presentation
        title={title}
        genres={genres ?? []}
        runtime={runtime}
        numberOfSeasons={numberOfSeasons}
        numberOfEpisodes={numberOfEpisodes}
        vote_average={voteAverage}
        vote_count={voteCount}
        release_date={releaseDate}
      />
    )
  }
}
