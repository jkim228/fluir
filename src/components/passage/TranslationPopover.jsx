import { useEffect, useRef } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

const POPOVER_WIDTH = 288

/**
 * Speech-bubble popover anchored above a tapped word element.
 *
 * @param {{
 *   word: string,
 *   translation: string | null,
 *   example: string | null,
 *   anchorEl: HTMLElement,
 *   onDismiss: () => void,
 * }} props
 */
export function TranslationPopover({ word, translation, example, anchorEl, onDismiss }) {
  const ref = useRef(null)

  useEffect(() => {
    function handlePointerDown(e) {
      if (!ref.current?.contains(e.target) && !anchorEl?.contains(e.target)) {
        onDismiss()
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [anchorEl, onDismiss])

  const rect = anchorEl.getBoundingClientRect()
  const wordCenterX = rect.left + rect.width / 2
  const rawLeft = wordCenterX - POPOVER_WIDTH / 2
  const left = Math.max(8, Math.min(rawLeft, window.innerWidth - POPOVER_WIDTH - 8))
  const arrowCenterX = wordCenterX - left

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: rect.top,
        left,
        width: POPOVER_WIDTH,
        transform: 'translateY(calc(-100% - 10px))',
        zIndex: 50,
      }}
      className="bg-surface rounded-xl shadow-popover border border-[rgba(30,28,20,0.08)] px-6 py-5 relative"
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <p className="font-display text-[2rem] font-bold text-moss-dim leading-tight">
          {word}
        </p>
        <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-moss-dim">
          <CheckIcon className="w-3 h-3 text-white" style={{ strokeWidth: 3.5 }} />
        </div>
      </div>
      <p className="font-body text-sm font-medium text-ink-80 mb-3">
        {translation ?? '—'}
      </p>
      <hr className="border-[rgba(30,28,20,0.1)] mb-3" />
      {example && (
        <p className="font-display italic text-sm text-ink-80 leading-relaxed">
          &ldquo;{example}&rdquo;
        </p>
      )}
      {/* Arrow pointing down toward the tapped word */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: arrowCenterX,
          transform: 'translate(-50%, 100%)',
          width: 0,
          height: 0,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderTop: '9px solid #FDFCF9',
          filter: 'drop-shadow(0 2px 2px rgba(28,27,23,0.08))',
        }}
      />
    </div>
  )
}
