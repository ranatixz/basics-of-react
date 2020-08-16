import React, { Component } from 'react'

class RegularComp extends Component {

    //Regular Component
    // A regular componet does not implement the 
    // shoulcComponentDidUpdate method. It always 
    //returns true by default
    
    render() {
        console.log('regular component rendered')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
