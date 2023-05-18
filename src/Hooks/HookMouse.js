import React, {useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const logMousePosition = e =>{
       console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    

    useEffect(() =>{
        console.log('useEffect');
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
      Coordinate X:{x} and Y:{y}
    </div>
  )
}

export default HookMouse
