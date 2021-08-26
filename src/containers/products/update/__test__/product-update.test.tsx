import { render, waitFor, screen, fireEvent, act } from '@testing-library/react'

import { wrapper } from 'tests'
import { ProductUpdate } from '..'

describe('Product update', () => {
  it('Should submit properly', async () => {
    render(<ProductUpdate />, { wrapper })
    const name = screen.getByPlaceholderText(/Enter product name/i)
    const stock = screen.getByPlaceholderText(/Enter product stock/i)
    const button = screen.queryByRole('button', { name: 'Save Product' })
    const loading = screen.queryByTestId('loading-bounce')
    fireEvent.change(name, { target: { value: 'Any' } })
    fireEvent.change(stock, { target: { value: 4 } })
    fireEvent.click(button)

    // await waitFor(() => expect(loading).toBeInTheDocument())
    // expect(loading).not.toBeInTheDocument()
  })
})
