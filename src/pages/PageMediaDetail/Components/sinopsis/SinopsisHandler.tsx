import { VerticalMediaPreviewProps } from '../../../../core/components/preview/VerticalMediaPreview'
import { SinopsisSkeleton } from './SinopsisSkeleton'
import { Sinopsis } from './Sinopsis'
import { Movie as MovieType } from '../../types/movie'

export interface SinopsisProps extends VerticalMediaPreviewProps {
  tagline: MovieType['tagline']
  overview: MovieType['overview']
}

interface SinopsisHandlerProps extends SinopsisProps {
  isLoading: boolean
  isSuccess: boolean
}

export const SinopsisHandler: React.FC<SinopsisHandlerProps> = ({
  id,
  title,
  tagline,
  overview,
  relativeBackdropPath,
  relativePosterPath,
  releaseDate,
  voteAverage,
  media,
  isLoading,
  isSuccess
}) => {
  if (isLoading) return <SinopsisSkeleton />

  if (isSuccess) {
    return (
      <Sinopsis
        id={id}
        title={title}
        tagline={tagline}
        overview={overview}
        relativeBackdropPath={relativeBackdropPath}
        relativePosterPath={relativePosterPath}
        media={media}
        releaseDate={releaseDate}
        voteAverage={voteAverage}
      />
    )
  }
}
