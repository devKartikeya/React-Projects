import { useState } from 'react'

function App() {

  const [celsius, setCelsius] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
  }

   const handleKelvinChange = (e) => {
    setKelvin(e.target.value);
  }

   const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
  }

  const handleCelsiusConvert = () => {
    const c = parseFloat(celsius);
    if (!isNaN(c)) {
      setKelvin((c + 273.15).toFixed(2));
      setFahrenheit(((c * 9/5) + 32).toFixed(2));
    }
  }

  const handleKelvinConvert = () => {
    const k = parseFloat(kelvin);
    if (!isNaN(k)) {
      setCelsius((k - 273.15).toFixed(2));
      setFahrenheit((((k - 273.15) * 9/5) + 32).toFixed(2));
    }
  }

  const handleFahrenheitConvert = () => {
    const f = parseFloat(fahrenheit);
    if (!isNaN(f)) {
      setCelsius(((f - 32) * 5/9).toFixed(2));
      setKelvin((((f - 32) * 5/9) + 273.15).toFixed(2));
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-md rounded-3xl bg-gray-800 p-8 flex flex-col items-center gap-8 shadow-xl">

        <h1 className="font-bold text-center text-3xl text-white tracking-wide">
          🌡️ Temperature Converter
        </h1>
        <div className='flex justify-between items-center w-full h-10'>
          <input
            type="number"
            placeholder="Enter in Celsius"
            className="h-14 w-2/3 p-4 rounded-xl font-semibold text-gray-200 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={celsius}
            onChange={handleCelsiusChange}
          />
          <button  className='h-14 w-24 bg-green-700 rounded-3xl text-white text-center font-semibold cursor-pointer' onClick={handleCelsiusConvert}>Convert</button>
        </div>
        <div className='flex justify-between items-center w-full h-10'>
          <input
            type="number"
            placeholder="Enter in Kelvin"
            className="h-14 w-2/3 p-4 rounded-xl font-semibold text-gray-200 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={kelvin}
            onChange={handleKelvinChange}
          />
          <button className='h-14 w-24 bg-green-700 rounded-3xl text-white text-center font-semibold cursor-pointer' onClick={handleKelvinConvert}>Convert</button>
        </div>
        <div className='flex justify-between items-center w-full h-14'>
          <input
            type="number"
            placeholder="Enter in Fahrenheit"
            className="h-14 w-2/3 p-4 rounded-xl font-semibold text-gray-200 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
          <button  className='h-14 w-24 bg-green-700 rounded-3xl text-white text-center font-semibold cursor-pointer' onClick={handleFahrenheitConvert}>Convert</button>
        </div>

      </div>
    </div>
  )
}

export default App