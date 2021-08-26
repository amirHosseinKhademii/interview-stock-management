import { useForm } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useError } from 'hooks/use-error'
import { useService } from 'hooks/use-service'

export const useProductForm = () => {
  const { usePatch, client } = useService()
  const { onError } = useError()
  const {
    toggleDialog,
    uiState: {
      dialog: { data, queryKey },
    },
  } = useUi()

  const { control, handleSubmit } = useForm({
    defaultValues: data
      ? {
          name: data.name,
          stock: data.stock,
        }
      : {},
  })

  const { mutate, isLoading } = usePatch({
    url: 'http://localhost:8080/api/product/update',
    onError,
    onSuccess: () => {
      client.invalidateQueries(['PRODUCTS_LIST'])
      toggleDialog({ open: false, type: null, data: null })
    },
  })

  return {
    control,
    isLoading,
    onSubmit: handleSubmit((state) => {
      const payload = {
        ...state,
        id: data.id,
      }
      mutate({ payload })
    }),
  }
}
