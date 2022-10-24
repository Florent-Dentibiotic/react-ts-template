import { describe, it } from 'vitest'
import App from './App'
import { render } from './utils/test-utils'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
  })
})
