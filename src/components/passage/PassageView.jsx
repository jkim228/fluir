import { CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { PassageText } from './PassageText'

/**
 * The main passage card — full white surface with centered passage text.
 *
 * @param {{
 *   passage: { id: string, targetWord: string, text: string },
 *   onWordTap: (word: string) => void,
 *   onMarkLearned: () => void,
 *   onRecycle: () => void,
 * }} props
 */
export function PassageView({ passage, onWordTap, onMarkLearned, onRecycle }) {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Passage card */}
      <div className="w-full bg-surface rounded-xl shadow-card border border-[rgba(30,28,20,0.08)] px-24 py-24 flex items-center justify-center min-h-[360px]">
        <PassageText
          text={passage.text}
          targetWord={passage.targetWord}
          onWordTap={onWordTap}
        />
      </div>

      {/* Action row */}
      <div className="flex items-center gap-8">
        <ActionButton icon={<EyeIcon />} label="REVEAL" onClick={() => {}} />
        <PrimaryActionButton
          icon={
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-moss-dim">
              <CheckIcon className="w-3.5 h-3.5 text-moss-pale" style={{ strokeWidth: 3.5 }} />
            </span>
          }
          label="MARK AS LEARNED"
          onClick={onMarkLearned}
        />
        <ActionButton icon={<ArrowPathIcon className="w-4 h-4" style={{ strokeWidth: 2 }} />} label="REGENERATE" onClick={onRecycle} />
      </div>
    </div>
  )
}

function ActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 font-body text-[0.6rem] font-medium tracking-[0.12em] uppercase text-[rgba(28,27,23,0.55)] hover:text-moss-dim transition-colors"
    >
      {icon}
      {label}
    </button>
  )
}

function PrimaryActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 font-body text-[0.6rem] font-medium tracking-[0.12em] uppercase text-moss-dim bg-moss-pale border border-[rgba(90,148,88,0.3)] rounded-xl px-5 py-3 hover:bg-[#d6ecd6] transition-colors"
    >
      {icon}
      {label}
    </button>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

