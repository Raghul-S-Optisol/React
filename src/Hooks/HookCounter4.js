import React , {useState} from 'react'

function HookCounter4() {
    const [items,setItems] = useState([])
    const addValue =() =>{
         setItems([...items,{
             id:items.length,
             value:Math.floor(Math.random()*10)+1
         }])
     }
   return (
     <div>
         <button onClick={addValue}>Add Value</button>
       <ul>
         {
             items.map(item =>(
                 <li key={item.id}>{item.value}</li>
             )) 
         }
       </ul>
     </div>
   )
}

export default HookCounter4
