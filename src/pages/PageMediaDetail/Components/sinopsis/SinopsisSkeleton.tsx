export function SinopsisSkeleton () {
  return (
    <section aria-label='Cargando sinopsis'>
      <div className='inner grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='col-span-2 space-y-6'>
          <div
            className='animate-pulse mx-auto md:mx-0 bg-skeleton h-6 w-1/2 rounded-md'
            aria-hidden='true'
          />

          <p className='space-y-3'>
            <span className='block animate-pulse bg-skeleton h-6 w-full rounded-md' aria-hidden='true' />
            <span className='block animate-pulse bg-skeleton h-6 w-full rounded-md' aria-hidden='true' />
            <span className='block animate-pulse bg-skeleton h-6 w-full rounded-md' aria-hidden='true' />
          </p>
        </div>

        <div className='flex justify-center md:justify-end'>
          <div
            className='relative inline-block w-44 h-60 bg-skeleton rounded-2xl animate-pulse'
            aria-hidden='true'
          >
            <div className='size-7 rounded-full absolute top-2 right-2 bg-btn-favorite' aria-hidden='true' />
          </div>
        </div>
      </div>
    </section>
  )
}
