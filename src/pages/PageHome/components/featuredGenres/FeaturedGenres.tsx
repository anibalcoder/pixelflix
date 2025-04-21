import { LinkToFeaturedGenre } from '../../types/pageHome'
import { FeaturedGenre } from './FeaturedGenre'
import animeCardImage from '../../../../assets/images/anime.webp'
import westernCardImage from '../../../../assets/images/western.webp'
import familyCardImage from '../../../../assets/images/family.webp'
import terrorCardImage from '../../../../assets/images/terror.webp'

const LinksToFeaturedGenre: LinkToFeaturedGenre[] = [
  {
    title: 'Descubre las mejores series animadas',
    link: '/tv/genre/16',
    ariaLabel: 'Explorar series animadas',
    img: animeCardImage,
    gridArea: 'anime',
    gradientFromColor: 'from-violet-500/20',
    gradientToColor: 'to-fuchsia-500/20'
  },
  {
    title: 'Revive el espíritu del viejo oeste',
    link: '/tv/genre/37',
    ariaLabel: 'Explorar series del viejo oeste',
    img: westernCardImage,
    gridArea: 'western',
    gradientFromColor: 'from-amber-500/20',
    gradientToColor: 'to-yellow-500/20'
  },
  {
    title: 'Disfruta la magia del cine en familia',
    link: '/movie/genre/10751',
    ariaLabel: 'Explorar películas familiares',
    img: familyCardImage,
    gridArea: 'family',
    gradientFromColor: 'from-cyan-500/20',
    gradientToColor: 'to-teal-500/20'
  },
  {
    title: 'Vive el terror con las películas más escalofriantes',
    link: '/movie/genre/27',
    ariaLabel: 'Explorar películas de terror',
    img: terrorCardImage,
    gridArea: 'terror',
    gradientFromColor: 'from-red-500/20',
    gradientToColor: 'to-orange-500/20'
  }
]

export function FeaturedGenres () {
  return (
    <section className='bg-featured-genres'>
      <div className='inner'>
        <h2 className='text-2xl font-bold mb-9'>
          Géneros destacados
        </h2>

        <ul className='bento-grid'>
          {
            LinksToFeaturedGenre.map((genre, id) => (
              <li
                key={id}
                style={{ gridArea: `${genre.gridArea}` }}
                className='h-full'
              >
                <FeaturedGenre {...genre} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
