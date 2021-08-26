import { ProductsList } from 'containers/products/list/index'
import { ProductModal } from 'containers/products/modal'
import { Fragment, memo } from 'react'

const Products = memo(() => {
  return (
    <Fragment>
      <ProductsList />
      <ProductModal />
    </Fragment>
  )
})

export default Products
