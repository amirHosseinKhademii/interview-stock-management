import { ProductsList } from 'containers/products/list/index'
import { ProductModal } from 'containers/products/modal'
import { Fragment } from 'react'

const Products = () => {
  return (
    <Fragment>
      <ProductsList />
      <ProductModal />
    </Fragment>
  )
}

export default Products
