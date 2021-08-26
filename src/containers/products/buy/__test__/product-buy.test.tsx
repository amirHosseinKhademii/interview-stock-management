import { render, waitFor, screen, fireEvent, act } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductBuy } from '..'

describe('Product buy', () => {
  it('Should submit properly', async () => {
    render(<ProductBuy />, { wrapper })
    const input = screen.getByPlaceholderText(/Enter number of products/i)
    const button = screen.getByRole('button')
    const loading = screen.queryByTestId('loading-bounce')
    fireEvent.change(input, { target: { value: 4 } })
    act(() => button.click())
    await waitFor(() => loading === null)
    expect(loading).not.toBeInTheDocument()
  })
})