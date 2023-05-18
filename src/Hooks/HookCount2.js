import React, {useState} from 'react'

function HookCount2() {
    const initial =0;
    const[count,setCount]=useState(initial)
    const increment5 =() =>{
        for(let i=1;i<=5;i++){
            setCount(preval => preval+1)
        }
    }
  return (
    <div>
      count {count}
        <button onClick={()=>setCount(initial)}>Reset</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={increment5}>Increment by 5</button>
    </div>
  )
}

export default HookCount2
