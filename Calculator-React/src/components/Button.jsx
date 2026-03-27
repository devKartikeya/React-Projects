import React from 'react'

const Button = ({ props, handler }) => {
    const handleClick = (value) => {
        handler(value)
    }
    return (
        <div className='flex justify-evenly items-center'>
            {props.map((item, index) => (
                <button 
                  key={index} 
                  className='font-bold text-xl w-12 h-10 text-white bg-gray-700 rounded-xl cursor-pointer shadow-lg hover:bg-gray-600 hover:scale-105 transition-transform duration-200 shadow-gray-700 hover:text-green-500' 
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
            ))}
        </div>
    )
}

export default Button
