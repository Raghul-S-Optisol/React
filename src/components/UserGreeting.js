import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedeIn : true
      }
    }
    
  render() {
        return (
            this.state.isLoggedeIn?(<div> Welcome Chief</div>):(<div> Welcome Guest</div>)
        )


    // let message
    // if(this.state.isLoggedeIn){
    //      message=   <div> Welcome chief</div>
    // }else{
    //      message = <div> Welcome Guest</div>
    // }
    // return( <div> {message}</div>
    //     )        
        
        

    // if(this.state.isLoggedeIn){
    //     return (
    //         <div> Welcome chief</div>
    //     )
    // }else{
    //     return(
    //         <div> Welcome Guest</div>
    //     )
    // }
  }
}

export default UserGreeting
