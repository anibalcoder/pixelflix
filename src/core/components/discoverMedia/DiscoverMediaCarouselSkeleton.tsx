export function DiscoverMediaCarouselSkeleton () {
  return (
    <section>
      <p className='sr-only'>Cargando resultados...</p>

      <div className='overflow-x-hidden whitespace-nowrap'>
        {
          Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className='relative inline-block not-last:mr-4 w-44 h-60 bg-skeleton rounded-2xl animate-pulse'
            >
              <div className='size-7 rounded-full absolute top-2 right-2 bg-btn-favorite' />
            </div>
          ))
        }
      </div>
    </section>
  )
}
