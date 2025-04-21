import { useSidebarToggle } from '../../../hooks/useSidebarToggle'
import { Nav } from './Nav'
import { Search } from './Search'
import { OpenMenuIcon, CloseMenuIcon } from '../icons/UI'

export function SidebarMenu () {
  const { isOpen, toggle, sidebarRef } = useSidebarToggle()

  return (
    <section className='md:hidden'>
      <button
        onClick={toggle}
        className='flex size-7 cursor-pointer'
        aria-label='Abrir menú'
        aria-expanded={isOpen}
      >
        <OpenMenuIcon />
      </button>

      <aside
        ref={sidebarRef}
        className={`bg-sidebar-menu text-white/60 fixed right-0 top-0 z-50 w-72 h-screen px-5 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className='h-16 flex justify-end items-center'>
          <button
            onClick={toggle}
            className='size-7 cursor-pointer'
            aria-label='Cerrar menú'
          >
            <CloseMenuIcon />
          </button>
        </div>

        <Nav />
        <Search />
      </aside>
    </section>
  )
}
