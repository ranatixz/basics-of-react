import React, { Component } from 'react'
import CompD from './CompD'
import UserContext from './UserContext'

class CompC extends Component {
    render() {
        return (
            <div>
                Component C context {this.context}
                <CompD/>
            </div>
        )
    }
}

CompC.contextType = UserContext
export default CompC
