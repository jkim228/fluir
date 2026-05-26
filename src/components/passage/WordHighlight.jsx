import { cn } from '../../lib/utils'

/**
 * A single tappable word token within a passage.
 *
 * @param {{ word: string, isTarget: boolean, isSelected: boolean, onTap: (word: string, el: HTMLElement) => void }} props
 */
export function WordHighlight({ word, isTarget, isSelected, onTap }) {
  function handleClick(e) {
    onTap(word, e.currentTarget)
  }

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      className={cn(
        'cursor-pointer rounded-xs px-0.5 -mx-0.5 transition-colors duration-100',
        isSelected
          ? 'text-moss-dim bg-moss-pale'
          : isTarget
          ? 'text-moss-dim font-semibold'
          : 'hover:bg-surface-2',
      )}
    >
      {word}
    </span>
  )
}
