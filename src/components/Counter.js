import React, { useState } from 'react'
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }

  return (
    <div className='container'>
        <div className='Counter-box'>
            <div className='Counter-titel'>
                <h1>{count}</h1>
            </div>
            <div className='btn-group'>
            <button className='Btn-plus' onClick={plus}>Plus</button>
            <button className='Btn-minus' onClick={minus}>Minus</button> 
            </div>
        </div>
    </div>
  )
}

export default Counter