import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 data-testid="web__title">Wahyudi</h1>
      <div className="card">
        <button data-testid="button__count__inc" onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <button data-testid="button__count__dec" onClick={() => setCount((count) => count - 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
