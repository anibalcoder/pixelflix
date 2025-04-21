import { VerticalMediaPreview } from '../../../../core/components/preview/VerticalMediaPreview'
import { SinopsisProps } from './SinopsisHandler'

export const Sinopsis: React.FC<SinopsisProps> = ({
  id,
  title,
  tagline,
  overview,
  relativeBackdropPath,
  relativePosterPath,
  releaseDate,
  voteAverage,
  media
}) => {
  return (
    <section>
      <div className='inner grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='col-span-2 text-center md:text-left'>
          <h2 className='text-2xl font-semibold mb-6'>
            {tagline || 'Sinopsis'}
          </h2>

          <p className='text-white/70 md:text-lg text-balance'>
            {overview === ''
              ? 'Lo sentimos, no hay una reseña disponible por el momento.'
              : overview}
          </p>
        </div>

        <div className='flex justify-center md:justify-end'>
          <VerticalMediaPreview
            id={id}
            title={title}
            relativeBackdropPath={relativeBackdropPath}
            relativePosterPath={relativePosterPath}
            releaseDate={releaseDate}
            voteAverage={voteAverage}
            media={media}
          />
        </div>
      </div>
    </section>
  )
}
