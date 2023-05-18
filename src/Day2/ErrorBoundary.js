import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    
    static getDerivedStateFromError(Error){
        return{
            hasError:true
        }
    }
  render() {
    
     if(this.state.hasError){
        return (<h4> OOPs!! something went wrong</h4>)
     }
     return this.props.children
  }
}

export default ErrorBoundary
