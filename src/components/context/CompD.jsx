import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class CompD extends Component {
    render() {
        return (
            <UserConsumer>
                {(userName) =><div>Hello {userName}</div>}
            </UserConsumer> 
        )
    }
}

export default CompD
