import { useState } from 'react'
import './App.css'

function App() {

  console.log("Learning hooks through Simple Counter Projects");
  
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if(counter <= 68){
      counter = counter + 1
      setCounter(counter)
    }
    console.log("Clicked",counter);
  }

  const removeValue = () => {
    if (counter >= 1){
      counter = counter - 1
      setCounter(counter)
    }
    console.log("Clicked",counter);
  }



  return (
    <>
      <h1>Grand Fleet</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
