export function ProductionSkeleton () {
  return (
    <section
      className='bg-production-info'
      aria-label='Cargando información de producción'
    >
      <div className='inner grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-14'>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <ul
              key={index}
              className='space-y-4'
              aria-label={`Columna ${index}`}
            >
              {[...Array(index < 2 ? 4 : 2)].map((_, idx) => (
                <li
                  key={idx}
                  className='bg-skeleton h-6 rounded-md animate-pulse'
                  aria-hidden='true'
                />
              ))}
            </ul>
          ))
        }
      </div>
    </section>
  )
}
