import { useState, useCallback } from 'react'
import { getPassagesForWord } from '../lib/passages'

/**
 * Manages the currently displayed passage for a given target word.
 * Cycles through available passages on recycle.
 *
 * @param {string} targetWord
 */
export function usePassage(targetWord) {
  const passages = getPassagesForWord(targetWord)
  const [index, setIndex] = useState(0)

  const passage = passages[index]

  const recycle = useCallback(() => {
    setIndex((prev) => (prev + 1) % passages.length)
  }, [passages.length])

  return { passage, recycle }
}
