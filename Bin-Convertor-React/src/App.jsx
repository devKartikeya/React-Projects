import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [binary, setBinary] = useState("");
  const [statement, setStatement] = useState("");
  const [copyText, setCopyText] = useState("Copy");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value === "" || isNaN(value)) {
      setStatement("⚠️ Please enter a valid number!");
      setBinary("");
      return;
    }
    setBinary(parseInt(value).toString(2));
    setStatement("✅ Your number has been converted to Binary!");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyText("Copied !");
      setTimeout(() => setCopyText("Copy"), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
      <div className="w-96 h-[500px] rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg flex flex-col items-center justify-around p-6">
        <h1 className="font-extrabold text-4xl text-white drop-shadow-lg tracking-wide">
          Bin Convertor
        </h1>

        <input
          type="number"
          placeholder="Enter a number..."
          className="text-center bg-black/70 text-white h-14 w-3/4 rounded-2xl outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300"
          value={value}
          onChange={handleChange}
        />

        <div className="w-full flex flex-col items-center h-1/2 justify-around">
          <button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold w-2/3 h-12 cursor-pointer hover:scale-105 hover:from-blue-500 hover:to-cyan-400 transition-transform duration-300 shadow-lg"
            onClick={handleClick}
          >
            Convert to Binary
          </button>

          <h1 className="text-lg font-bold text-center mt-4 text-green-300 drop-shadow-md">
            {statement}
          </h1>

          <input
            type="text"
            readOnly
            className="text-center bg-black/70 text-white h-12 w-4/5 rounded-2xl outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 text-sm"
            placeholder="Your Binary value will appear here!"
            value={binary}
          />
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold w-1/3 h-12 cursor-pointer hover:scale-105 hover:from-blue-500 hover:to-cyan-400 transition-transform duration-300 shadow-lg mt-3" onClick={handleCopy}>{copyText}</button>
        </div>
      </div>
    </div>
  );
}

export default App;