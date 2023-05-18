import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : ' click below to see the change '
       }
    }

    clickhandler(){
        this.setState({
            message : 'You Won!'
        })
        console.log(this);
       
    }
    
  render() {
    return (
      <div>
        <div><p>{this.state.message}</p></div>
        {/* <button onClick={this.clickhandler.bind(this)}>click here</button> */}
        <button onClick={() => this.clickhandler()}>click here</button>
      </div>
    )
  }
}

export default EventBind
