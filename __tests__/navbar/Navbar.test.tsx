import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'


import Navbar from '@/app/components/navbar/Navbar'
import { describe } from 'node:test'

 
describe('Navbar component', () => {
  test('should render company logo', () => {
    render(<Navbar />)
    expect(screen.findAllByAltText('company logo')).toBeDefined()
  })
  test('should render auth buttons', () => {
    render(<Navbar />)
    expect(screen.findByText("Login")).toBeDefined()
  })
  test('should render auth buttons', () => {
    render(<Navbar />)
    expect(screen.findByText("Sign up")).toBeDefined()
  })
  test('should render creators dropdown', () => {
    render(<Navbar />)
    expect(screen.findByText("Creators")).toBeDefined()
  })
})