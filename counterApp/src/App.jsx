import { useState } from "react";

const App=()=> {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl px-8 py-15">

        <h1 className="text-4xl font-bold text-center text-white">
          Counter App
        </h1>
        <div className="flex justify-center mt-10">

          <div
            className="w-34 h-34 rounded-full text-white flex items-center justify-center border-[10px] transition-all duration-300"
          >
            <h2 className="text-6xl font-bold">{count}</h2>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">

          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-300 text-white py-3 rounded-xl text-2xl font-bold"
          >
            −
          </button>

          <button
            onClick={reset}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 transition-all duration-300 text-white py-3 rounded-xl font-semibold"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-white py-3 rounded-xl text-2xl font-bold"
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;