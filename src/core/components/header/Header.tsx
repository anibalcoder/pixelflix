import { Link } from 'react-router-dom'
import { Nav } from './Nav'
import { Search } from './Search'
import { SidebarMenu } from './SidebarMenu'

export function Header () {
  return (
    <header className='backdrop-blur-lg supports-[backdrop-filter]:bg-page/70 sticky top-0 z-50'>
      <div className='max-w-7xl p-4 mx-auto flex justify-between items-center'>
        <Link
          className='font-playfair-display text-2xl md:text-3xl font-semibold hover:scale-105 transition-transform'
          to='/'
          aria-label='Ir a la página de inicio de PixelFlix'
        >
          PixelFlix
        </Link>

        <div className='hidden flex-1 md:flex justify-end items-center gap-14'>
          <Nav />
          <Search />
        </div>

        <SidebarMenu />
      </div>
    </header>
  )
}
