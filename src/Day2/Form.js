import React, { Component } from 'react'
import '../components/myStyles.css'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         age:'',
         role:'manager'
      }
    }
    handleUserNameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleAgeChange = (event) =>{
        this.setState({
            age : event.target.value
        })
    }

    handleRoleChange = (event) =>{
        this.setState({
            role : event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.age} ${this.state.role} --> Save ?`)
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label className='font-xl primary font-style'> User Name: </label>
            <input 
            type='text' 
            value = {this.state.username}
            onChange={this.handleUserNameChange} />
        </div>
        <div>
            <label className='font-xl primary font-style'>    Age:  </label>
            <input 
            type='number' 
            value = {this.state.age}
            onChange={this.handleAgeChange} />
        </div>
        <div>
            <label className='font-xl primary1 font-style'>Role: </label>
            <select 
             value={this.state.role}
             onChange={this.handleRoleChange}> 
                <option value='manager'> Manager</option>
                <option value='tl'> Team Lead</option>
                <option value='hr'> HR</option>
            </select>   
            <button type='submit'>Submit</button>
        </div> 
      </form>
    )
  }
}

export default Form
