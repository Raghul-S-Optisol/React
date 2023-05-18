import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ContextC extends Component {
  render() {
    return (
    <UserConsumer>
        {
            (userName) =>{
                return  <div>Hello {userName}!!</div>
            }
        }
    </UserConsumer>
    )
  }
}

export default ContextC
