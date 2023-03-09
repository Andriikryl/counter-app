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

    const random = () => {
        setCount(count + Math.floor(Math.random(count) * 10))
    }

  return (
    <div className='container'>
        <div className='Counter-box'>
            <div className='Counter-titel'>
                <h1>{count}</h1>
            </div>
            <div className='btn-group'>
            <button className='Btn' onClick={plus}>Plus</button>
            <button className='Btn' onClick={minus}>Minus</button> 
            </div>
            <button className='Btn' onClick={random}>random number</button>
        </div>
    </div>
  )
}

export default Counter