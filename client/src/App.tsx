import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          منصة القضاء الذكي
        </h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Smart Judiciary Platform
        </h2>
        <div className="space-y-4">
          <div className="text-6xl font-bold text-indigo-600">
            {count}
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            اضغط هنا / Click me
          </button>
          <p className="text-gray-500 text-sm">
            النظام جاهز للتطوير / System ready for development
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;