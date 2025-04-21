export function PresentationSkeleton () {
  return (
    <section
      className='w-full'
      role='status'
      aria-live='polite'
      aria-label='Cargando presentación del contenido'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 py-6 sm:py-12'>
        <div aria-hidden='true' className='sm:col-span-2 space-y-4'>
          <span className='block w-full h-6 bg-skeleton rounded-sm animate-pulse' />
          <span className='block w-full sm:w-1/2 h-6 bg-skeleton rounded-sm animate-pulse' />
          <span className='block w-full sm:w-1/2 h-6 bg-skeleton rounded-sm animate-pulse' />
        </div>

        <div aria-hidden='true' className='space-y-4 justify-items-center sm:justify-items-end'>
          <span className='block w-1/2 h-6 bg-skeleton rounded-sm animate-pulse' />
          <span className='block w-1/2 h-6 bg-skeleton rounded-sm animate-pulse' />
        </div>
      </div>
    </section>
  )
}
