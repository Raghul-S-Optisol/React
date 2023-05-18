import React,{useState} from 'react'

function Hookcounter3() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
     <form>
        <label> First Name : </label>
        <input 
            type='text'
            value= {name.firstName}
            onChange={e =>setName({ ...name ,firstName : e.target.value})}
        ></input>
         <label> Last Name : </label>
         <input 
            type='text'
            value= {name.lastName}
            onChange={e =>setName({ ...name, lastName : e.target.value})}
        ></input>
        <h3> your First Name - {name.firstName}</h3>
        <h3> your Last Name - {name.lastName}</h3>
     </form>
  )
}

export default Hookcounter3
