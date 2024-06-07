import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-extrabold mb-10">React Timer App</h1>
      <div className="text-6xl font-mono mb-10 p-4 bg-gray-900 rounded-lg shadow-lg">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex space-x-4">
        {!running ? (
          <button
            onClick={() => setRunning(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => setRunning(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Stop
          </button>
        )}
        <button
          onClick={() => setTime(0)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

