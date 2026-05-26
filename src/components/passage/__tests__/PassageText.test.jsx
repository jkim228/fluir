import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { PassageText } from '../PassageText'

describe('PassageText', () => {
  const text = 'A Maria foi ao mercado comprar pão e saudade de casa.'
  const targetWord = 'saudade'

  // Requirements: passage-generation — every word in a passage is rendered
  it('renders all words from the passage', () => {
    render(<PassageText text={text} targetWord={targetWord} selectedWord={null} onWordTap={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'saudade' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Maria' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'mercado' })).toBeInTheDocument()
  })

  // Requirements: passage-generation — target word is visually distinguished
  it('applies target styling only to the target word', () => {
    render(<PassageText text={text} targetWord={targetWord} selectedWord={null} onWordTap={vi.fn()} />)
    const targetBtn = screen.getByRole('button', { name: targetWord })
    expect(targetBtn.className).toMatch(/moss/)
    const otherBtn = screen.getByRole('button', { name: 'Maria' })
    expect(otherBtn.className).not.toMatch(/moss-dim/)
  })

  // Requirements: tap-to-translate — every word is tappable and passes word + element
  it('calls onWordTap with the word and element when a word is clicked', async () => {
    const user = userEvent.setup()
    const handleTap = vi.fn()
    render(<PassageText text={text} targetWord={targetWord} selectedWord={null} onWordTap={handleTap} />)
    await user.click(screen.getByRole('button', { name: 'mercado' }))
    expect(handleTap).toHaveBeenCalledWith('mercado', expect.anything())
  })

  // Requirements: tap-to-translate — target word tap is also handled
  it('calls onWordTap when the target word is clicked', async () => {
    const user = userEvent.setup()
    const handleTap = vi.fn()
    render(<PassageText text={text} targetWord={targetWord} selectedWord={null} onWordTap={handleTap} />)
    await user.click(screen.getByRole('button', { name: targetWord }))
    expect(handleTap).toHaveBeenCalledWith(targetWord, expect.anything())
  })

  // Requirements: tap-to-translate — tapped word shows highlighted state
  it('applies selected highlight to the word matching selectedWord', () => {
    render(<PassageText text={text} targetWord={targetWord} selectedWord="mercado" onWordTap={vi.fn()} />)
    const selectedBtn = screen.getByRole('button', { name: 'mercado' })
    expect(selectedBtn.className).toMatch(/moss-pale/)
    const otherBtn = screen.getByRole('button', { name: 'Maria' })
    expect(otherBtn.className).not.toMatch(/moss-pale/)
  })
})
