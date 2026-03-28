import { useState } from 'react';

function App() {
  const [random, setRandom] = useState(null);
  const [response, setResponse] = useState("");
  const [value, setValue] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [win, setWin] = useState(false);

  const handleClick = () => {
    setRandom(Math.floor(Math.random() * 101));
    setResponse("Number has been generated! Start guessing...");
    setValue("");
    setAttempts(0);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (attempts == 10) {
      setResponse(`⚠️ Limit Reached, Sorry, The number was ${random}!`);
      setAttempts(0);
      setRandom(null);
      setValue("");
      return;
    }
  };

  const handleSubmit = () => {
    if (random === null) {
      setResponse("⚠️ Please generate a number first!");
      return;
    }
    if (value === "") {
      setResponse("⚠️ Please enter a number!");
      return;
    }


    const guess = Number(value);
    setAttempts((prev) => prev + 1);

    if (guess === random) {
      setWin(true);
      setResponse(`🎉 You WON in ${attempts + 1} attempts! The number was ${random}`);
    } else if (guess > random) {
      setResponse("📉 Too large, try a smaller number!");
    } else {
      setResponse("📈 Too small, try a bigger number!");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
      <div className="w-96 h-[500px] flex flex-col items-center rounded-3xl shadow-2xl p-6 justify-around bg-white">
        <h1 className="text-3xl font-extrabold text-purple-700">Number Guess Game</h1>

        <div className="w-full flex flex-col items-center gap-4">
          <input
            type="number"
            className="bg-gray-800 rounded-xl border border-gray-400 h-12 w-3/4 text-center text-lg focus:outline-none focus:ring-2 text-white focus:ring-purple-500"
            onChange={handleChange}
            value={value}
          />
          <button
            className="bg-green-600 w-3/4 h-12 rounded-xl text-white text-lg font-semibold cursor-pointer hover:bg-green-500 transition"
            onClick={handleSubmit}
          >
            Submit Guess
          </button>
          <button
            className="bg-blue-600 w-3/4 h-12 rounded-xl text-white text-lg font-semibold cursor-pointer hover:bg-blue-500 transition"
            onClick={handleClick}
          >
            Generate Number
          </button>
        </div>

        <h2 className={`font-bold text-lg text-center mt-4 ${win ? 'text-green-500': 'text-amber-400'}`}>{response}</h2>
        {attempts > 0 && random !== null && (
          <p className="text-sm text-gray-600">Attempts: {attempts}</p>
        )}
      </div>
    </div>
  );
}

export default App;