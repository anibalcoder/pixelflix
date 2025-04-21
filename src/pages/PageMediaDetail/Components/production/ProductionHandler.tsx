import { Movie as MovieType } from '../../types/movie'
import { ProductionSkeleton } from './ProductionSkeleton'
import { Production } from './Production'

export type ProductionType = Pick<MovieType, 'production_companies' | 'production_countries' | 'budget' | 'revenue'>

interface ProductionHandlerProps extends ProductionType {
  isLoading: boolean
  isSuccess: boolean
}

export const ProductionHandler: React.FC<ProductionHandlerProps> = ({
  production_companies: productionCompanies,
  production_countries: productionCountries,
  budget,
  revenue,
  isLoading,
  isSuccess
}) => {
  if (isLoading) return <ProductionSkeleton />

  if (isSuccess) {
    return (
      <Production
        production_companies={productionCompanies}
        production_countries={productionCountries}
        budget={budget}
        revenue={revenue}
      />
    )
  }
}
