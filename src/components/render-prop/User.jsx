import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.name(true)}</h5>
            </div>
        )
    }
}

export default User
