import { LinkToFeaturedGenre } from '../../types/pageHome'

export const FeaturedGenre: React.FC<LinkToFeaturedGenre> = ({
  title,
  link,
  ariaLabel,
  img,
  gradientFromColor,
  gradientToColor
}) => {
  return (
    <article
      className='relative group h-full rounded-xl md:rounded-2xl overflow-hidden'
    >
      <figure className='h-full absolute inset-0'>
        <img
          className='size-full object-cover object-center '
          src={img}
          alt={title}
        />

        <figcaption className='sr-only'>{title}</figcaption>
      </figure>

      <section
        className={`relative z-10 size-full flex flex-col justify-end items-start gap-3 p-4 bg-gradient-to-br ${gradientFromColor} ${gradientToColor} backdrop-blur-xs hover:backdrop-blur-none transition-all duration-300`}
      >
        <h3
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, .6)' }}
          className='md:text-lg font-semibold'
        >
          {title}
        </h3>

        <a
          className='inline-block bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200'
          href={link}
          aria-label={ariaLabel}
          target='_blank'
          rel='noopener noreferrer'
        >
          Explorar
        </a>
      </section>
    </article>
  )
}
