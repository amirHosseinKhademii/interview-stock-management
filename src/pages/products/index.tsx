import { ProductsList } from 'containers/products/list/index'
import { ProductModal } from 'containers/products/modal'
import { useUi } from 'hooks/use-ui'
import { Fragment } from 'react'

const Products = () => {
  const {
    uiState: { dialog },
  } = useUi()
  return (
    <Fragment>
      <ProductsList />
      {dialog.open && <ProductModal />}
    </Fragment>
  )
}

export default Products
