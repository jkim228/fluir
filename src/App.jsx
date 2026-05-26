import { useState } from 'react'
import { Header } from './components/layout/Header'
import { BottomNav } from './components/layout/BottomNav'
import ReadingView from './views/ReadingView'

const DEFAULT_VIEW = 'read'
const SEED_WORD = 'saudade'

export default function App() {
  const [activeView, setActiveView] = useState(DEFAULT_VIEW)
  const [targetWord] = useState(SEED_WORD)

  function handleWordTap(word) {
    // TODO: open tap-to-translate popover
  }

  function handleMarkLearned(word) {
    // TODO: update word bank status
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
          {activeView === 'read' && (
            <ReadingView
              targetWord={targetWord}
              onWordTap={handleWordTap}
              onMarkLearned={handleMarkLearned}
            />
          )}
        </div>
      </main>

      <footer>
        <BottomNav activeView={activeView} onNavigate={setActiveView} />
      </footer>
    </div>
  )
}
