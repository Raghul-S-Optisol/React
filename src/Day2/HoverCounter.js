import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incrementCount = () =>{
              this.setState(prevState =>{
                  return {count: prevState.count+1}
              })
          }
  render() {
    const {count}=this.state
    return (
            <h3 onMouseOver={this.incrementCount}> {this.state.name} Hovered {count} Times</h3>
    )
  }
}

export default UpdatedComponent(HoverCounter)
