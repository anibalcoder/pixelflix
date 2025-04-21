import AppRoutes from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'

function App () {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  )
}

export default App
