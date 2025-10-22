import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>*/

function App() {
  const [count, setCount] = useState(0)

  return (
  <header className="flex items-center justify-between bg-gray-100 p-4">
    <div className="flex items-center gap-2">
      <span className="font-bold text-lg">Logo</span>
      <nav className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </div>
    <div className="flex gap-2">
      <button>Sign In</button>
      <button>Get Started</button>
    </div>
  </header>
);

}

export default App
