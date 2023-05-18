import React, { Component } from 'react'
import ContextB from './ContextB'

export class ContextA extends Component {
  render() {
    return (
        <ContextB />
    )
  }
}

export default ContextA
