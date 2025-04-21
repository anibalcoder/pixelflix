import { Presentation } from './Presentation'

interface HeroProps {
  heroTitle: string
  heroDescription: string
}

export const Hero: React.FC<HeroProps> = ({ heroTitle, heroDescription }) => {
  return (
    <section
      className='relative h-[460px] bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900'
    >
      <Presentation title={heroTitle} description={heroDescription} />
    </section>
  )
}
