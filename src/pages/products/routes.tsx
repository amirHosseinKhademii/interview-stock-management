import { lazy } from 'react'

export const route = {
  path: '/admin/patients/interactions/:id',
  name: 'ROUTE:ADMIN:PATIENTS/INTERACTIONS',
  exact: true,
  layout: 'admin',
  authorize: true,
  component: lazy(() => import('.')),
}
