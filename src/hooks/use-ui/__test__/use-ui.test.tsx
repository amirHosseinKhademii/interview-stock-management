import { fireEvent, render, screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { UiProvider } from 'provider/ui-provider'
import { useUi } from '..'

const initialState = {
  drawer: { open: false },
  dialog: { open: false, data: {}, type: null },
  toast: { open: false, type: null, title: null, description: null },
  theme: 'dark',
}

const MockProvider = ({ children }): JSX.Element => (
  <UiProvider>{children}</UiProvider>
)

const MockConsumer = (): JSX.Element => {
  const {
    uiState: { theme, dialog, toast, drawer },
    toggleDialog,
    toggleToast,
    toggleDrawer,
  } = useUi()

  return (
    <div>
      <h1 data-testid="theme">{theme}</h1>
      <h1 data-testid="dialog">Dialog is {dialog.open ? 'open' : 'close'}</h1>
      <button onClick={() => toggleDialog({ open: true })}>dialog</button>
      <h1 data-testid="toast">Toast is {toast.open ? 'open' : 'close'}</h1>
      <button onClick={() => toggleToast({ open: true })}>toast</button>
      <h1 data-testid="drawer">Drawer is {drawer.open ? 'open' : 'close'}</h1>
      <button onClick={() => toggleDrawer()}>drawer</button>
    </div>
  )
}

const MockComponent = (): JSX.Element => (
  <MockProvider>
    <MockConsumer />
  </MockProvider>
)

describe('Use ui hook', () => {
  it('Should render hook properly', () => {
    const { result } = renderHook(() => useUi(), { wrapper: MockProvider })
    expect(result.current.uiState).toStrictEqual(initialState)
    act(() => result.current.toggleDialog({ open: true }))
    expect(result.current.uiState.dialog.open).toBeTruthy()
    act(() => result.current.toggleToast({ open: true }))
    expect(result.current.uiState.toast.open).toBeTruthy()
    act(() => result.current.toggleDrawer())
    expect(result.current.uiState.drawer.open).toBeTruthy()
  })
  it('Should show theme properly', () => {
    render(<MockComponent />)
    const theme = screen.getByTestId('theme')
    expect(theme.textContent).toBe('dark')
  })
  it('Should toggle dialog properly', () => {
    render(<MockComponent />)
    const dialog = screen.queryByTestId('dialog')
    const dialogToggler = screen.getByRole('button', { name: 'dialog' })
    expect(dialog.textContent).toBe('Dialog is close')
    expect(dialogToggler).toBeInTheDocument()
    fireEvent.click(dialogToggler)
    expect(dialog.textContent).toBe('Dialog is open')
  })
  it('Should toggle toast properly', () => {
    render(<MockComponent />)
    const toast = screen.queryByTestId('toast')
    const toastToggler = screen.getByRole('button', { name: 'toast' })
    expect(toast.textContent).toBe('Toast is close')
    expect(toastToggler).toBeInTheDocument()
    fireEvent.click(toastToggler)
    expect(toast.textContent).toBe('Toast is open')
  })
  it('Should toggle drawer properly', () => {
    render(<MockComponent />)
    const drawer = screen.queryByTestId('drawer')
    const drawerToggler = screen.getByRole('button', { name: 'drawer' })
    expect(drawer.textContent).toBe('Drawer is close')
    expect(drawerToggler).toBeInTheDocument()
    fireEvent.click(drawerToggler)
    expect(drawer.textContent).toBe('Drawer is open')
  })
})
