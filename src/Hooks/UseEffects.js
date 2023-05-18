import React ,{useState , useEffect} from 'react'

function UseEffects() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() =>{
        console.log('updating document title');
        document.title= `Clicked ${count} times`
    },[count])
  return (
    <div>
        <label>Name</label>
        <input type ='text' value ={name} onChange={e =>setName(e.target.value)}></input>
      <button onClick={() => setCount(count+1)}> clicked {count} Times</button>
    </div>
  )
}

export default UseEffects
