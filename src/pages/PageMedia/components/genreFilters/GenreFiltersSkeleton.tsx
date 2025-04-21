export function GenreFiltersSkeleton () {
  return (
    <section>
      <p className='sr-only'>Cargando resultados...</p>

      <div className='overflow-x-hidden whitespace-nowrap'>
        {
          Array.from({ length: 11 }).map((_, index) => (
            <div
              key={index}
              className='inline-block not-last:mr-4 w-24 h-9 bg-skeleton rounded-lg animate-pulse'
            />
          ))
        }
      </div>
    </section>
  )
}
