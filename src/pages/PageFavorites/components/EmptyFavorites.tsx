export function EmptyFavorites () {
  return (
    <section className='col-span-full text-center'>
      <h1 className='mb-8'>
        No hay favoritos <span aria-hidden>💔</span>
      </h1>

      <div className='hero-description space-y-3 md:space-y-0'>
        <p>
          Aún no has guardado ninguna película o serie en tus favoritos.
        </p>

        <p>
          Explora y marca lo que más te guste para verlo más tarde <span aria-hidden className='text-white'>😊</span>.
        </p>
      </div>
    </section>
  )
}
