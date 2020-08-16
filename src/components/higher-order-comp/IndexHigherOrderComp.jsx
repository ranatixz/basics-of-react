import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
class IndexHigherOrderComp extends Component {

   
    render() {
        return (
            <div>
                <ClickCounter/>
                <HoverCounter name='vincent'/>
            </div>
        )
    }
}

export default IndexHigherOrderComp
