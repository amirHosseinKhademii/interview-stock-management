import { memo } from 'react'
import { useProductsList } from './use-products-list'
import { Table } from 'components/table'

export const ProductsList = memo(() => {
  const { data, isLoading, columns } = useProductsList()

  return (
    <div className="w-full flex flex-col items-end">
      <Table
        data={data}
        columns={columns}
        loading={isLoading}
        title="Products"
      />
    </div>
  )
})
