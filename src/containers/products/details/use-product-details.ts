import { useMemo } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { useUi } from 'hooks/use-ui'

export const useProductDetails = () => {
  const { useGet } = useService()
  const { onError } = useError()
  const {
    toggleDialog,
    uiState: {
      dialog: { data: dialogData },
    },
  } = useUi()

  const { data, isLoading, isFetching } = useGet({
    key: ['PRODUCTS_DETAILS'],
    url: dialogData ? `http://localhost:8080/api/product/${dialogData.id}` : '',
    onFocus: false,
    onError,
  })

  return {
    data: useMemo(() => (data ? data.data : []), [data]),
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
  }
}
