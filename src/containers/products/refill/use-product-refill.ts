import { useForm, useWatch } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'

export const useProductRefill = () => {
  const { usePut, client } = useService()
  const { onError } = useError()
  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()

  const { control, handleSubmit } = useForm({
    defaultValues: {},
  }) as any

  const formState = useWatch({ control }) as any

  const { mutate, isLoading } = usePut({
    url: data ? `http://localhost:8080/api/product/${data.id}/refill` : '',
    params: { amount: formState.amount },
    onError,
    onSuccess: () => {
      toggleDialog({ open: false, type: null, data: null })
      client.invalidateQueries('PRODUCTS_LIST')
    },
  })

  return {
    control,
    isLoading,
    onSubmit: handleSubmit(() => {
      mutate({ payload: null })
    }),
  }
}
