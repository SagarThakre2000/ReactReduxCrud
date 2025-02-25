import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addtod'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='font-bold'>Learn about ReduxToolkit</h1>
     <AddTodo/>
      <Todos/>    
    </>
  )
}

export default App
