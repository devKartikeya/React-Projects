import { createSignal, For } from "solid-js";
import Button from "./components/Button";

function App() {
  const [value, setValue] = createSignal('');

  const buttonRows = [
    ["9", "8", "7", "*"],
    ["6", "5", "4", "+"],
    ["3", "2", "1", "−"],
    ["0", ".", "=", "÷"],
  ];

  return (
    <main class="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div class="w-96 h-[28rem] bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center border border-blue-400/30">
        
        {/* Display */}
        <header class="w-full mb-6">
          <input
            type="text"
            readOnly
            value={value()}
            class="w-full h-14 px-4 text-right text-2xl font-mono rounded-lg bg-gray-100 shadow-inner focus:outline-none border border-gray-300"
          />
        </header>

        {/* Buttons */}
        <section class="w-full flex flex-col gap-4 justify-center items-center">
          <For each={buttonRows}>
            {(row) => (
              <div class="flex justify-evenly w-full gap-4">
                <For each={row}>
                  {(command) => (
                    <Button
                      value={value}
                      setValue={setValue}
                      command={command}
                      class="flex-1 h-14 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 text-white text-xl font-semibold shadow-md hover:from-blue-400 hover:to-blue-500 active:scale-95 transition-transform duration-150"
                    />
                  )}
                </For>
              </div>
            )}
          </For>

          {/* Clear Button */}
          <button
            class="w-full h-14 mt-2 rounded-xl bg-gradient-to-b from-red-600 to-red-700 text-white text-xl cursor-pointer font-bold shadow-md hover:from-red-500 hover:to-red-600 active:scale-95 transition-transform duration-150"
            onClick={() => setValue("")}
          >
            Clear
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
