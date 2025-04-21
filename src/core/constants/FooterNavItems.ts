import { FooterSection } from '../types/global'
import { GitHubIcon, LinkedIcon, PortfolioIcon } from '../components/icons/Social'
import { MovieIcon, TvIcon, CurvedArrowUpIcon } from '../components/icons/Explorer'
import { FavoriteIcon } from '../components/icons/UI'

export const footerNavItems: FooterSection[] = [
  {
    title: 'navegación',
    links: [
      {
        title: 'Explorar películas',
        link: '/movie',
        ariaLabel: 'Explorar películas',
        icon: MovieIcon
      },
      {
        title: 'Explorar series',
        link: '/tv',
        ariaLabel: 'Explorar series',
        icon: TvIcon
      },
      {
        title: 'Explorar favoritos',
        link: '/favorite',
        ariaLabel: 'Explorar favoritos',
        icon: FavoriteIcon
      }
    ]
  },
  {
    title: 'tendencias',
    links: [
      {
        title: 'Explorar películas',
        link: '#',
        ariaLabel: 'Películas en tendencia',
        icon: CurvedArrowUpIcon
      },
      {
        title: 'Explorar series',
        link: '/tendencias/series',
        ariaLabel: 'Series en tendencia',
        icon: CurvedArrowUpIcon
      }
    ]
  },
  {
    title: 'populares',
    links: [
      {
        title: 'Explorar películas',
        link: '#',
        ariaLabel: 'Películas populares',
        icon: CurvedArrowUpIcon
      },
      {
        title: 'Explorar series',
        link: '/populares/series',
        ariaLabel: 'Series populares',
        icon: CurvedArrowUpIcon
      }
    ]
  },
  {
    title: 'contáctame',
    links: [
      {
        title: 'GitHub',
        link: 'https://github.com/anibalcoder/',
        ariaLabel: 'Ir a mi perfil de GitHub',
        openInNewTab: true,
        icon: GitHubIcon
      },
      {
        title: 'Portafolio',
        link: 'https://anibalcoder.vercel.app/',
        ariaLabel: 'Ir a mi portafolio',
        openInNewTab: true,
        icon: PortfolioIcon
      },
      {
        title: 'LinkedIn',
        ariaLabel: 'Ir a mi perfil de LinkedIn',
        link: 'https://www.linkedin.com/in/anibalcoder',
        openInNewTab: true,
        icon: LinkedIcon
      }
    ]
  }
]
