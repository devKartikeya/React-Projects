import { useRef, useState } from 'react'

function App() {
  const [centisecond, setCentisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [toggle, setToggle] = useState('Pause')

  const intervalRef = useRef(null);

  function handleStart() {
    intervalRef.current = setInterval(() => {
      setCentisecond(prevCentisecond => {
        if (prevCentisecond + 1 === 60) {
          setSecond(prevSecond => {
            if (prevSecond + 1 === 60) {
              setMinute(prevMinute => prevMinute + 1);
              return 0; // reset seconds
            }
            return prevSecond + 1;
          });
          return 0; // reset centiseconds
        }
        return prevCentisecond + 1;
      });
    }, 20);
  }

  function handleReset() {
    // stop the timer if it's running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // reset all values to zero
    setCentisecond(0);
    setSecond(0);
    setMinute(0);
  }

  function handlePause() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // paused
      setToggle('Restart')
    } else {
      handleStart(); // resumed
      setToggle('Pause')
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-1/3 h-2/3 bg-gray-800 rounded-3xl shadow-2xl flex flex-col items-center justify-around p-6 border border-gray-700">

        <h1 className="text-3xl font-extrabold text-white tracking-wide mb-2">
          ⏱ Stop Watch
        </h1>

        <div className="w-4/5 h-1/2 bg-gray-700 flex justify-evenly items-center rounded-2xl shadow-inner">
          <div className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-4xl font-bold text-green-400">
            {minute}
          </div>
          <div className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-4xl font-bold text-blue-400">
            {second}
          </div>
          <div className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-4xl font-bold text-purple-400">
            {centisecond}
          </div>
        </div>

        {/* Bottom Section - Controls */}
        <div className="w-4/5 h-1/3 bg-gray-700 flex justify-evenly items-center rounded-2xl shadow-inner">
          <div className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-lg font-bold cursor-pointer text-red-400" onClick={handleReset}>
            Reset
          </div>
          <div className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-lg font-bold cursor-pointer text-green-400" onClick={handleStart}>
            Start
          </div>
          <div onClick={handlePause} className="h-4/5 w-1/4 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform flex justify-center items-center text-lg font-bold cursor-pointer text-yellow-400">
            {toggle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
