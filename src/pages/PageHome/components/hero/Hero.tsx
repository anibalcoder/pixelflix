import { Presentation } from './Presentation.tsx'
import introVerticalVideo from '../../../../assets/video/introVertical.mp4'
import introHorizontalVideo from '../../../../assets/video/introHorizontal.mp4'

export function Hero () {
  return (
    <section>
      <div
        className='w-full max-w-7xl mx-auto flex flex-col md:flex-row md:gap-8'
      >
        <Presentation />

        <figure className='-order-1 md:order-1 w-full md:w-1/3 h-52 md:h-[422px]'>
          <video
            className='hidden md:block size-full object-cover'
            src={introVerticalVideo}
            autoPlay
            muted
            loop
          />

          <video
            className='md:hidden size-full object-cover'
            src={introHorizontalVideo}
            autoPlay
            muted
            loop
          />
        </figure>
      </div>
    </section>
  )
}
