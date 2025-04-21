import { WarningIcon } from './icons/UI'

export function ErrorMessage () {
  return (
    <section
      className='bg- flex flex-col items-center text-center gap-5 px-4 py-8 rounded-xl animate-fade-in'
      role='alert'
    >
      <div className='size-12 animate-pulsing animate-iteration-count-infinite'>
        <WarningIcon className='size-full' />
      </div>

      <h3 className='font-bold text-xl'>¡Ups! Algo salió mal 😢</h3>

      <p className='text-balance font-medium'>
        Hubo un problema al cargar la información. Por favor, intenta de nuevo más tarde.
      </p>
    </section>
  )
}
