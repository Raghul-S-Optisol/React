import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('event handler using class component');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default ClassClick
