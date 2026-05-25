import { cn } from '../../lib/utils'

/**
 * A single tappable word token within a passage.
 *
 * @param {{ word: string, isTarget: boolean, onTap: (word: string) => void }} props
 */
export function WordHighlight({ word, isTarget, onTap }) {
  function handleClick() {
    onTap(word)
  }

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      className={cn(
        'cursor-pointer rounded-xs px-0.5 -mx-0.5 transition-colors duration-100',
        isTarget
          ? 'text-moss-dim font-semibold bg-moss-pale px-1 rounded-xs'
          : 'hover:bg-surface-2',
      )}
    >
      {word}
    </span>
  )
}
