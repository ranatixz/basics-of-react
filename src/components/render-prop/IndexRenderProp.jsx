import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import User from './User'
import Counter from './Counter'
class IndexRenderProp extends Component {

    render() {
        return (
            <div>
                {/* <ClickCounter/>
                <HoverCounter/>
                <User name={(isLoggedin) => isLoggedin ? 'vincent' : 'guest'}/> */}
                <Counter render={ (count, incrementCount) => {
                    return (
                        <ClickCounter count={count} incrementCount={incrementCount}/>   
                    )
                }}/>
                <Counter render={ (count, incrementCount) => {
                    return (
                        <HoverCounter count={count} incrementCount={incrementCount}/> 
                    )
                }}/>
            </div>
        )
    }
}

export default IndexRenderProp
