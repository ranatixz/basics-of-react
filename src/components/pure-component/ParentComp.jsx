import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from '../memo/MemoComp'
class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vincent'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Vincent'
            })
        }, 2000)
    }
    render() {
        console.log('parent component rendered')
        const {name} = this.state
        return (
            <div>
                <RegularComp name={name}/>
                {/* <PureComp name={name}/> */}
                <MemoComp name={name}/>
            </div>
        )
    }
}

export default ParentComp
