import { footerNavItems } from '../../constants/FooterNavItems'

export function Nav () {
  return (
    <section
      className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-14 py-10 md:py-20 border-y border-teal-700/50'
    >
      {
        footerNavItems.map(({ title, links }, sectionIndex) => (
          <div key={sectionIndex} className='space-y-8'>
            <h3 className='relative text-xl capitalize font-semibold'>
              {title}
              <span className='absolute -bottom-2 left-0 w-16 h-0.5 bg-emerald-400' />
            </h3>

            <ul className='space-y-4'>
              {
                links.map((
                  { title, link, ariaLabel, openInNewTab, icon: Icon },
                  linkIndex
                ) => (
                  <li
                    key={linkIndex}
                    className='font-medium text-emerald-300 hover:text-white transition-colors'
                  >
                    <a
                      className='text-sm sm:text-base flex gap-2 items-center'
                      href={link}
                      target={openInNewTab ? '_blank' : '_self'}
                      aria-label={ariaLabel}
                      rel='noreferrer'
                    >
                      <Icon className='size-4 md:size-5' />
                      {title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
    }
    </section>
  )
}
