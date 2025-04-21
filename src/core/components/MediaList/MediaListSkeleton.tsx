interface MediaListSkeletonProps {
  count: number
  asGrid?: boolean
}

export function MediaListSkeleton ({ count, asGrid = false }: MediaListSkeletonProps) {
  const items = Array.from({ length: count }).map((_, index) => (
    <div
      key={index}
      className='relative w-full h-[280px] bg-skeleton flex items-end rounded-lg md:rounded-xl overflow-hidden animate-pulse'
      aria-label={`Cargando tarjeta de medio ${index + 1}`}
    >
      <div className='size-7 rounded-full absolute top-2 right-2 bg-btn-favorite' />

      <div className='w-full p-4'>
        <div className='bg-skeleton-text w-1/2 h-4 mb-2 rounded-sm' />
        <div className='bg-skeleton-text w-full h-4 rounded-sm' />
      </div>
    </div>
  ))

  // Si se requiere en formato grilla (Carga inicial)
  if (asGrid) {
    return (
      <ul
        className='grid-responsive'
        aria-label='Cargando lista de medios'
      >
        {items.map((item, index) => <li key={`skeleton-${index}`}>{item}</li>)}
      </ul>
    )
  }

  // Si se requiere como items sueltos (Al hacer fetch de la siguiente página)
  return items
}
