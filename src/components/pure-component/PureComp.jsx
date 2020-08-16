import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {

    //Pure component
    //A pure component on other hand implements shouldComponentDidUpdate
    //with a shallow props and state comparison.

    //if the previous state and current state 
    //and if the previous props and current props theres a 
    //difference the pure component will re-render

    //never mutate the state. Always return a new object that reflects the new value to re-render
    render() {
        console.log('pure component rendered')
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}
export default PureComp;
