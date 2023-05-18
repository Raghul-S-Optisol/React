import React , {useState,useEffect }from 'react'
import axios from 'axios'

function DataFetch() {
    const[post,setPost]=useState({})
    const[ id,setId]=useState(1)
    const[buttonclick,setButtonClick] = useState(1)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclick}`)
        .then(res =>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[buttonclick])

    const handleClick =() =>{
        setButtonClick(id)
    } 
    
  return (
    <div>
        <div>
            <label>Enter the number between 1-100 to get a Data</label>
        </div>
            <input type='text' value={id} onChange={e =>{setId(e.target.value)}} />
            <button type='button' onClick={handleClick}>Get Data</button>
            <div>{post.title}</div>
            {/* <ul>{
                posts.map(post => <li key = {post.id}>{post.title}</li>)
            }
            </ul> */}
    </div>
  )
}

export default DataFetch
