import { useState } from 'react'
import Locations from './components/Locations'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <Locations />
    </div>
  )
}

export default App
