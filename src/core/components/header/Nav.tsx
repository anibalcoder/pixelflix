import { NavLink } from 'react-router-dom'
import { headerNavItems } from '../../constants/HeaderNavItems'

export function Nav () {
  return (
    <nav>
      <ul className='flex flex-col md:flex-row md:items-center gap-5 mb-10 md:mb-0'>
        {
          headerNavItems.map(({ title, label, url }) => (
            <li key={title}>
              <NavLink
                className={({ isActive }) => `${isActive ? 'text-white/100' : ''} text-white/70 hover:text-white transition-colors`}
                to={url}
                aria-label={label}
              >
                {title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
