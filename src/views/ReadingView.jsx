import { PassageView } from '../components/passage/PassageView'
import { usePassage } from '../hooks/usePassage'

/**
 * Full reading view — displays the current passage for a target word
 * and handles the mark-as-learned and recycle actions.
 *
 * @param {{
 *   targetWord: string,
 *   onWordTap: (word: string) => void,
 *   onMarkLearned: (word: string) => void,
 * }} props
 */
export default function ReadingView({ targetWord, onWordTap, onMarkLearned }) {
  const { passage, recycle } = usePassage(targetWord)

  function handleMarkLearned() {
    onMarkLearned(passage.targetWord)
  }

  return (
    <div className="flex-1 px-10 pt-10 pb-6 flex flex-col">
      <PassageView
        passage={passage}
        onWordTap={onWordTap}
        onMarkLearned={handleMarkLearned}
        onRecycle={recycle}
      />
    </div>
  )
}
