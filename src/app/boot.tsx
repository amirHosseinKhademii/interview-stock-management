import { QueryClient, QueryClientProvider } from 'react-query'

import { UiProvider } from 'provider/ui-provider'
import { Router } from './router'

const Boot = () => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <Router />
    </UiProvider>
  </QueryClientProvider>
)

export { Boot }
