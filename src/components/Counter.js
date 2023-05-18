import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }

    increment(){
        this.setState({
          count : this.state.count + 1
        } ,() =>{console.log('call back value',this.state.count)})
        console.log(this.state.count);
    }
    
  render() {
    return (
      <div>
       <div><h1>count - {this.state.count}</h1> </div> 
        <button onClick={() => this.increment()} >increment</button>
      </div>
    )
  }
}

export default Counter
