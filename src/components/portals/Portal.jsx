import React from 'react'
import ReactDom from 'react-dom'

const Portal = () =>{
    return ReactDom.createPortal(
        <div>
            <h1>Hi i'm portal</h1>
        </div>
    , document.getElementById('portal-root'))
}

export default Portal
