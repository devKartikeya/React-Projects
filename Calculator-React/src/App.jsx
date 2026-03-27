import React, { useRef, useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [value, setValue] = useState("");
  const input = useRef();

  const handleChange = (amount) => {
    setValue(prev => prev + amount); // append instead of replace
  }

  const handleClear = () => {
    setValue("");
  }

  const handleEvaluate = () => {
    try {
      setValue(eval(value).toString()); // evaluate expression
    } catch {
      setValue("Error");
      input.current.style.color = "red";
      setTimeout(function() {
        setValue("");
      }, 2000);
    }
  }

  let row1 = ["1", "2", "3", "*"];
  let row2 = ["4", "5", "6", "+"];
  let row3 = ["7", "8", "9", "-"];
  let row4 = ["0", ".", "%", "/"];

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700'>
      <div className='h-2/3 w-1/4 bg-black rounded-3xl flex flex-col items-center justify-around shadow-2xl shadow-blue-800'>
        <div className='w-full h-12 text-white font-bold text-3xl flex justify-center items-center drop-shadow-lg'>
          Calculator
        </div>
        <div className='w-full h-3/4 p-3 justify-around'>
          <div className='flex justify-around h-10'>
            <input 
              type="text" 
              className='w-2/3 h-10 bg-gray-700 rounded-2xl text-black pl-3 font-bold text-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200' 
              value={value} 
              ref={input}
              readOnly
            />
            <button 
              className='w-1/4 bg-green-500 h-10 rounded-3xl font-bold cursor-pointer shadow-md hover:bg-red-800 transition-all shadow-green-700 duration-200' 
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <div className='flex flex-col justify-around h-4/5 my-3'>
            <Button props={row1} handler={handleChange}/>
            <Button props={row2} handler={handleChange}/>
            <Button props={row3} handler={handleChange}/>
            <Button props={row4} handler={handleChange}/>
            <div className='flex justify-center mt-3'>
              <button 
                className='font-bold text-xl w-24 h-10 text-black bg-yellow-400 rounded-xl cursor-pointer shadow-md shadow-amber-100 hover:bg-yellow-500 transition-all duration-200 hover:text-white' 
                onClick={handleEvaluate}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
