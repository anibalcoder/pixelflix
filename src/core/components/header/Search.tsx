import { SearchIcon } from '../icons/UI'

export function Search () {
  return (
    <form
      action='/search'
      className='relative w-full md:w-72'
      role='search'
    >
      <label htmlFor='q' className='sr-only'>Buscar en PixelFlix</label>

      <button
        className='size-4 text-black/70 absolute left-4 top-[50%] -translate-[50%]'
        type='submit'
        aria-label='Buscar'
      >
        <SearchIcon className='size-full' />
      </button>

      <input
        id='q'
        className='bg-search w-full text-sm text-black/70 placeholder:text-black/70 placeholder:font-medium pl-9 pr-4 py-2.5 rounded-lg outline-none overflow-clip'
        type='search'
        name='q'
        placeholder='¿Qué estás buscando?'
      />
    </form>
  )
}
