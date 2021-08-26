import { Fragment, memo } from 'react'
import { Input } from 'components/input'

import { useProductDetails } from './use-product-details'
import { LoaidngBounce } from 'components/loading'

export const ProductDetails = memo(() => {
  const { data, isLoading } = useProductDetails()

  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      {isLoading ? (
        <LoaidngBounce size="small" />
      ) : (
        <Fragment>
          <Input label="Name" disabled value={data.name} />
          <Input
            label="Stock number"
            className="mt-4"
            disabled
            value={data.stock.toString()}
          />
          {data.reservations.map((item) => (
            <Input
              key={item.id}
              label="Reservations"
              className="mt-4"
              disabled
              value={item.amount.toString()}
            />
          ))}
        </Fragment>
      )}
    </div>
  )
})
