import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrementClick = () => {
    setCounter(counter + 1)
  }

  const handleDecrementClick = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <button onClick={handleDecrementClick} id='counterBtn'>
        -
      </button>
      <input type='text' id='counter' value={counter} readonly='true' />
      <button onClick={handleIncrementClick} id='counterBtn'>
        +
      </button>
    </>
  )
}

export default Counter
