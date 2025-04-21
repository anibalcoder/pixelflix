import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <meta name='autor' content='anibalcoder' />
        <meta name='description' content={description} />
        <title>{title}</title>
        {/* Open Graph / Facebook */}
        <meta property='og:url' content='https://px-flix.vercel.app/' />
        <meta property='og:site_name' content='PixelFlix' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='https://px-flix.vercel.app/website.webp' />
        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://px-flix.vercel.app/website.webp' />
      </Helmet>

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
