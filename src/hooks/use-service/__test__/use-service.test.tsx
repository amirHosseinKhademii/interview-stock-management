import { act, renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useService } from '..'

const wrapper = ({ children }) => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
    }
  >
    {children}
  </QueryClientProvider>
)

const { result: service } = renderHook(() => useService(), {
  wrapper,
})

describe('Use service', () => {
  it('Should return proper data on get', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useGet({
          key: ['test'],
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data.data).toBe('Did it')
  })
  it('Should return proper data on post', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePost({
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: '' }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success post')
  })
  it('Should return proper data on put', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePut({
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: '' }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success put')
  })
  it('Should return proper data on delete', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useDelete({
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate())
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success delete')
  })
})
