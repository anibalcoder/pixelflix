import { Search } from './Search'

export function Presentation () {
  return (
    <div className='w-full md:w-2/3 px-4 py-14 md:py-24 flex flex-col gap-8 text-center md:text-left'>
      <h1>Bienvenido a PixelFlix</h1>

      <p className='hero-description'>
        Descubre las mejores películas y series en un solo lugar. Desde los últimos estrenos hasta clásicos inolvidables, disfruta del entretenimiento sin límites.
      </p>

      <Search />
    </div>
  )
}
