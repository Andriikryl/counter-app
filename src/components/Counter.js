import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button> 
    </div>
  )
}

export default Counter