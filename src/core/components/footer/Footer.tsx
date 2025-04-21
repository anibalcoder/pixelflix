import { Nav } from './Nav'
import { Credits } from './Credits'

export function Footer () {
  return (
    <footer className='bg-page'>
      <div className='inner'>
        <Nav />
        <Credits />
      </div>
    </footer>
  )
}
