import { WordHighlight } from './WordHighlight'

/**
 * Renders a passage as individually tappable word tokens.
 * Punctuation attached to words is preserved as non-tappable trailing text.
 *
 * @param {{ text: string, targetWord: string, selectedWord: string | null, onWordTap: (word: string, el: HTMLElement) => void }} props
 */
export function PassageText({ text, targetWord, selectedWord, onWordTap }) {
  const tokens = tokenize(text)

  return (
    <p className="font-body text-[2rem] font-semibold leading-snug text-ink text-center">
      {tokens.map((token, i) => {
        if (token.type === 'space') {
          return <span key={i}>{token.value}</span>
        }

        const isTarget = token.bare.toLowerCase() === targetWord.toLowerCase()
        const isSelected = token.bare.toLowerCase() === selectedWord?.toLowerCase()

        return (
          <span key={i}>
            <WordHighlight
              word={token.bare}
              isTarget={isTarget}
              isSelected={isSelected}
              onTap={onWordTap}
            />
            {token.punctuation}
          </span>
        )
      })}
    </p>
  )
}

/**
 * Splits a passage string into word tokens and spaces.
 * Each word token carries the bare word and any trailing punctuation.
 *
 * @param {string} text
 * @returns {Array<{type: 'word'|'space', value?: string, bare?: string, punctuation?: string}>}
 */
function tokenize(text) {
  const parts = text.split(/(\s+)/)
  return parts.map((part) => {
    if (/^\s+$/.test(part)) return { type: 'space', value: part }

    const match = part.match(/^([^\p{P}]*)([\p{P}]*)$/u)
    const bare = match?.[1] ?? part
    const punctuation = match?.[2] ?? ''
    return { type: 'word', bare, punctuation }
  })
}
