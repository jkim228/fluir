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
    <div className="min-h-screen bg-bg flex flex-col max-w-lg mx-auto">
      <Header />

      <main className="flex-1 flex flex-col">
        {activeView === 'read' && (
          <ReadingView
            targetWord={targetWord}
            onWordTap={handleWordTap}
            onMarkLearned={handleMarkLearned}
          />
        )}
      </main>

      <footer className="px-5 pb-8 pt-2">
        <BottomNav activeView={activeView} onNavigate={setActiveView} />
      </footer>
    </div>
  )
}
