import { useState } from 'react'
import Island from './Island'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Island />
    <h1>Freest man of them all</h1>
    
    </>
  )
}

export default App
