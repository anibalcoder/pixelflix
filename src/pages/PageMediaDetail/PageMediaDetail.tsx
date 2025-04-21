import { useMedia } from '../../hooks/useMedia'
import { Navigate, useParams } from 'react-router-dom'
import Layout from '../../core/layouts/Layout'
import { Hero } from './Components/hero/Hero'
import { SinopsisHandler } from './Components/sinopsis/SinopsisHandler'
import { DiscoverMedia } from '../../core/components/discoverMedia/DiscoverMedia'
import { ProductionHandler } from './Components/production/ProductionHandler'
import { Movie as MovieType } from './types/movie'
import { TV as TVType } from './types/tv'
import { MediaCategory, MediaType } from '../../core/types/global.d'
import { getEndpoints } from '../../services/api'

export default function PageMediaDetail () {
  const { media, mediaId } = useParams()

  const API_URL = getEndpoints({
    category: MediaCategory.MEDIA_DETAIL,
    media: media as MediaType,
    mediaId
  })

  const { data, isLoading, isSuccess, isError } = useMedia<MovieType | TVType>({ apiURL: API_URL })

  const title = media === MediaType.MOVIE
    ? (data as MovieType)?.title
    : (data as TVType)?.name

  const releaseDate = media === MediaType.MOVIE
    ? (data as MovieType)?.release_date
    : (data as TVType)?.first_air_date

  if (isError) return <Navigate to='/404' replace />

  return (
    <Layout
      title={`PixelFlix: ${title ?? 'Cargando...'}`}
      description={data?.overview as string}
    >
      <Hero
        title={title}
        backdrop_path={data?.backdrop_path as string}
        genres={data?.genres ?? []}
        runtime={(data as MovieType)?.runtime}
        numberOfSeasons={(data as TVType)?.number_of_seasons}
        numberOfEpisodes={(data as TVType)?.number_of_episodes}
        vote_average={data?.vote_average as number}
        vote_count={data?.vote_count as number}
        release_date={releaseDate}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />

      <SinopsisHandler
        id={data?.id as number}
        title={title}
        tagline={data?.tagline as string}
        overview={data?.overview as string}
        relativeBackdropPath={data?.backdrop_path as string}
        relativePosterPath={data?.poster_path as string}
        releaseDate={releaseDate}
        voteAverage={data?.vote_average as number}
        media={media as MediaType}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />

      <DiscoverMedia
        category={MediaCategory.SIMILAR}
        showMediaSelection={false}
      />

      <ProductionHandler
        production_companies={data?.production_companies ?? []}
        production_countries={data?.production_countries ?? []}
        budget={(data as MovieType)?.budget}
        revenue={(data as MovieType)?.revenue}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </Layout>
  )
}
