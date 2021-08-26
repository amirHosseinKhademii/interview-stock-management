import { lazy, memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { MainLayout } from 'layouts/main'

export const Router = memo((): JSX.Element => {
  const {
    uiState: { toast },
  } = useUi()

  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route
              exact
              path="/products"
              component={lazy(() => import('pages/products'))}
            />
          </Switch>
        </Suspense>
      </MainLayout>
      {toast.open && <Toast {...toast} />}
    </BrowserRouter>
  )
})
