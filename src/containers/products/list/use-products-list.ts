import { useMemo } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { ProductsListActions } from './actions'

export const useProductsList = () => {
  const { useGet } = useService()
  const { onError } = useError()

  const { data, isLoading, isFetching } = useGet({
    key: ['PRODUCTS_LIST'],
    url: 'http://localhost:8080/api/product',
    onFocus: false,
    onError,
  })

  return {
    data: useMemo(() => (data ? data.data : []), [data]),
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    columns: useMemo(
      () => [
        { head: 'Name', accessor: 'name', width: 'w-2/3' },
        { head: 'Stock', accessor: 'stock', width: 'w-1/3' },
        {
          head: '',
          accessor: 'actions',
          width: ' w-[0px]',
          render: (item) => ProductsListActions({ item }),
        },
      ],
      []
    ),
  }
}
