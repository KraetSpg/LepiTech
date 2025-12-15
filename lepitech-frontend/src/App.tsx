import { useState } from 'react'
import './App.css'

import Example from "./components/examples/accordion/standard/accordion-standard-5"

function App() {
  const [count, setCount] = useState(0)
  return (
  <Example />
);

}

export default App
