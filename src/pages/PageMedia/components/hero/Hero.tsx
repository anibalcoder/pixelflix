import { Presentation } from './Presentation'
import { MediaType } from '../../../../core/types/global.d'

interface HeroProps {
  heroTitle: string
  heroDescription: string
  media: MediaType
}

export const Hero: React.FC<HeroProps> = ({
  heroTitle,
  heroDescription,
  media
}) => {
  return (
    <section
      className='relative h-[460px] bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900'
    >
      <Presentation
        title={heroTitle}
        description={heroDescription}
        media={media}
      />
    </section>
  )
}
