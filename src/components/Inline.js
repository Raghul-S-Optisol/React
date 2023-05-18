import React from 'react'

const Heading = {
    fontSize : '70px',
    color : 'blue',
    fontStyle :'italic'
}

function Inline() {
  return (
    <div>
      <h2 style={Heading}>Hello</h2>
    </div>
  )
}

export default Inline

