import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState<number>(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(c=>c+1)}>increment</button>
        <button onClick={()=>setCount(c=>c-1)}>decrement</button>
    </div>
  )
}

export default Counter