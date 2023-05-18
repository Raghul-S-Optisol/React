import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'Hit Me'
        }
    }
    
    changeMessage(){
        this.setState ({
            message:'You are smart'
        })
    }

    render(){
            return(
                <div>
                     <h1>{this.state.message}</h1>
                     <button onClick={() => this.changeMessage()}> Hit</button>
                </div>
            ) 
        
    }
}

export default Message