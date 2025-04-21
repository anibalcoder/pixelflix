import { SearchIcon } from '../../../../core/components/icons/UI'

export function Search () {
  return (
    <form
      action='/search'
      className='w-full max-w-md mx-auto md:mx-0 flex outline-2 overflow-hidden rounded-full animate-fade-in animate-delay-150'
    >
      <label htmlFor='q' className='sr-only'>Buscar película o serie</label>

      <input
        id='q'
        className='bg-transparent text-sm md:text-base w-full text-white/70 placeholder:text-white/70 px-4 py-2 outline-none'
        type='search'
        name='q'
        placeholder='Encuentra tu próxima película o serie...'
        aria-label='Buscar película o serie'
      />

      <button
        className='w-10 bg-white flex items-center justify-center cursor-pointer'
        aria-label='Realizar búsqueda'
      >
        <SearchIcon className='size-5 text-black' />
      </button>
    </form>
  )
}
