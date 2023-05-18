import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={props.greetHandler}><h4>Welcome</h4></button>
    </div>
  )
}

export default ChildComp
