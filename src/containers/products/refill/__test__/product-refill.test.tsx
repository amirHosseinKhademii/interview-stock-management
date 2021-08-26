import { render, waitFor, screen, fireEvent, act } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductRefill } from '..'

describe('Product refill', () => {
  it('Should submit properly', async () => {
    render(<ProductRefill />, { wrapper })
    const input = screen.getByPlaceholderText(/Enter number of products/i)
    const button = screen.getByRole('button')
    const loading = screen.queryByTestId('loading-bounce')
    fireEvent.change(input, { target: { value: 4 } })
    act(() => button.click())
    await waitFor(() => loading === null)
    expect(loading).not.toBeInTheDocument()
  })
})
