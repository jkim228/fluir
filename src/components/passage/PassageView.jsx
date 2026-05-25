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
      <div className="w-full bg-surface rounded-xl shadow-card border border-[rgba(30,28,20,0.08)] px-10 py-16 flex items-center justify-center min-h-[360px]">
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
          icon={<CheckIcon />}
          label="MARK AS LEARNED"
          onClick={onMarkLearned}
        />
        <ActionButton icon={<RecycleIcon />} label="REVEAL" onClick={onRecycle} />
      </div>
    </div>
  )
}

function ActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 font-body text-[0.6rem] font-medium tracking-[0.12em] uppercase text-[rgba(28,27,23,0.55)] hover:text-ink transition-colors"
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

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" opacity="0.15" />
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function RecycleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
    </svg>
  )
}
