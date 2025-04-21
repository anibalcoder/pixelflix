import { ProductionType } from './ProductionHandler'

export const Production: React.FC<ProductionType> = ({
  production_companies: productionCompanies,
  production_countries: productionCountries,
  budget,
  revenue
}) => {
  const productionDetails = [
    {
      label: 'Compañías de producción',
      values: productionCompanies.map(company => company.name)
    },
    {
      label: 'Países de producción',
      values: productionCountries.map(country => country.name)
    },
    {
      label: 'Presupuesto',
      values: [budget?.toLocaleString('es-ES', { style: 'currency', currency: 'USD' }) || 'Información no disponible']
    },
    {
      label: 'Recaudación',
      values: [revenue?.toLocaleString('es-ES', { style: 'currency', currency: 'USD' }) || 'Información no disponible']
    }
  ]

  return (
    <section className='bg-production-info'>
      <div className='inner flex flex-wrap justify-between gap-10'>
        {
          productionDetails.map((productionDetail, index) => (
            <div key={index} className='space-y-4'>
              <h3 className='text-xl font-bold text-white/70'>
                {productionDetail.label}
              </h3>

              <ul className='space-y-3'>
                {
                  productionDetail.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}
