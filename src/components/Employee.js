import React from 'react'

function Employee({emp}) {
  return (
    <div>
      <h3>Employee ID: {emp.id} and Name: {emp.name}</h3>
    </div>
  )
}

export default Employee
