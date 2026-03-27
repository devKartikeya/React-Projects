import { useState } from "react";

function App() {
  const [marks, setMarks] = useState(Array(5).fill(""));
  const [percent, setPercent] = useState(0);

  const handleChange = (e, index) => {
    const newMarks = [...marks];
    newMarks[index] = e.target.value;
    setMarks(newMarks);
  };

  const handleClick = () => {
    const total = marks.reduce((sum, val) => sum + Number(val || 0), 0);
    const percentage = (total * 100) / (marks.length * 100);
    setPercent(percentage);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="w-[90%] max-w-md bg-white rounded-3xl shadow-2xl flex flex-col items-center border-4 border-purple-700 p-8">
        <h1 className="text-purple-700 font-extrabold text-4xl mb-6 drop-shadow-lg text-center">
          🎓 Percentage Calculator
        </h1>

        <div className="w-full flex flex-col space-y-4">
          {marks.map((mark, index) => (
            <input
              key={index}
              type="number"
              className="h-12 w-full p-4 font-semibold bg-gray-100 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder={`Enter marks of subject ${index + 1}`}
              value={mark}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        <div className="w-full flex justify-between items-center mt-8">
          <button
            className="bg-gradient-to-r from-green-400 to-green-600 h-12 w-32 rounded-2xl font-bold text-white shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={handleClick}
          >
            Calculate
          </button>
          <span className="font-bold h-12 w-28 bg-purple-700 text-white flex justify-center items-center text-2xl rounded-xl shadow-md">
            {percent.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;