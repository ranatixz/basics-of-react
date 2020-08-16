import React, { Component } from 'react'
import CompA from './CompA'
import CompC from './CompC'
import { UserProvider } from './UserContext';
class IndexContext extends Component {
    render() {
        return (
            <div>
                {/* <UserProvider value="vincent"> */}
                    <CompC/>
                {/* </UserProvider> */}
            </div>
        )
    }
}

export default IndexContext
