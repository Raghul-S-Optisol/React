import React from 'react';

// function Greet(){
//     return <h1>Welcome Buddy!! </h1>
// }

const Greet = (props) => {
    console.log(props)
    return (<div>
        <h1>Welcome {props.name} - role - {props.role} </h1> 
        {props.children}
        </div>)
        
           
} 
export default Greet