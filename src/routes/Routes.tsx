import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MediaType } from '../core/types/global.d'
import PageHome from '../pages/PageHome/PageHome'
import PageMedia from '../pages/PageMedia/PageMedia'
import PageFavorites from '../pages/PageFavorites/PageFavorites'
import PageSearch from '../pages/PageSearch/PageSearch'
import PageGenre from '../pages/PageGenre/PageGenre'
import PageMediaDetail from '../pages/PageMediaDetail/PageMediaDetail'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<PageHome />}
        />

        <Route
          path='/movie' element={<PageMedia media={MediaType.MOVIE} />}
        />

        <Route
          path='/tv' element={<PageMedia media={MediaType.TV} />}
        />

        <Route
          path='/favorite' element={<PageFavorites />}
        />

        <Route
          path='/search' element={<PageSearch />}
        />

        <Route
          path='/:media/genre/:genreId' element={<PageGenre />}
        />

        <Route
          path='/:media/:mediaId' element={<PageMediaDetail />}
        />

        <Route
          path='*' element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
