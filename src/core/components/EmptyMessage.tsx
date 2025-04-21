export function EmptyMessage () {
  return (
    <section className='text-center'>
      <h1 className='mb-4'>
        Sin contenido disponible <span aria-hidden className='block sm:inline-block'>💔</span>
      </h1>

      <div className='hero-description'>
        <p>
          No encontramos contenido relacionado para mostrar en esta sección.
        </p>

        <p className='hidden md:block'>
          Es posible que la género, ruta o criterio no tenga resultados por el momento.
        </p>
      </div>
    </section>
  )
}
