import React from 'react'

function FunctionClick() {

  function clickFunc(){
    console.log('Event handler using function component')
   
  }

  return (
    <div>
      <button onClick={clickFunc}>click</button>
    </div>
  )
}

export default FunctionClick
