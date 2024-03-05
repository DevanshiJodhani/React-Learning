import { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(0)
  // let Counter = 15

  const addValue = () =>{
    setCounter(Counter + 1)
  }
  const removeValue = () => {
    setCounter(Counter - 1)
  }
  return (
    <>
      <h1>React with Me {Counter}</h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={addValue}>Add Value</button> {' '}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {Counter}</p>
    </>
  )
}

export default App
