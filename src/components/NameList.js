import React from 'react'
import Employee from './Employee'

function NameList() {
    const employees = [{id:100,name:'Jai'},
                       {id:101,name:'Ajai'},
                       {id:102,name:'Vijay'}
                      ]
    const empList = employees.map(emp => <Employee key={emp.id} emp={emp} />)
  return (
    <div>
      {/* <h3>{Names[0]}</h3>
      <h3>{Names[1]}</h3>
      <h3>{Names[2]}</h3> */}

      {empList}

    </div>
  )
}

export default NameList
