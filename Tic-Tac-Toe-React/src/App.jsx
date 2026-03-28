import { useMemo, useState } from 'react'

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(boxes) {
  for (const [a, b, c] of WINNING_LINES) {
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return { player: boxes[a], line: [a, b, c] }
    }
  }
  return null
}

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winnerData = useMemo(() => calculateWinner(boxes), [boxes])
  const winner = winnerData?.player
  const winningLine = winnerData?.line || []
  const isDraw = !winner && boxes.every(Boolean)
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw'
    : `Next player: ${isXNext ? 'X' : 'O'}`

  const handleClick = (index) => {
    if (boxes[index] || winner || isDraw) return

    const nextBoxes = [...boxes]
    nextBoxes[index] = isXNext ? 'X' : 'O'
    setBoxes(nextBoxes)
    setIsXNext(!isXNext)
  }

  const resetGame = () => {
    setBoxes(Array(9).fill(null))
    setIsXNext(true)
  }

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8'>
      <div className='w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/95 shadow-2xl p-6'>
        <div className='mb-5 text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>Tic Tac Toe</h1>
          <p className='mt-2 text-slate-300'>{status}</p>
        </div>

        <div className='grid grid-cols-3 gap-2'>
          {boxes.map((value, index) => {
            const isHighlighted = winningLine.includes(index)
            return (
              <button
                key={index}
                type='button'
                onClick={() => handleClick(index)}
                className={`aspect-square rounded-2xl border-2 border-slate-700 bg-slate-800 text-5xl font-bold transition hover:bg-slate-700 ${
                  isHighlighted ? 'border-emerald-400 bg-emerald-500/20' : ''
                }`}
              >
                {value}
              </button>
            )
          })}
        </div>

        <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <button
            type='button'
            onClick={resetGame}
            className='w-full rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-violet-500 sm:w-auto'
          >
            Restart
          </button>
          <div className='rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300'>
            X goes first
          </div>
        </div>
      </div>
    </div>
  )
}

export default App