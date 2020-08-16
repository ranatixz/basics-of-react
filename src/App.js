import React, { Component } from 'react'
// import Counter from './components/Counter'
// import ParentComp from './components/pure-component/ParentComp'
// import Ref from './components/refs/Refs'
// import FRParentInput from './components/forwarding-refs/FRParentInput'
//  import FocusInput from './components/ref-with-class-comp/FocusInput'
// import Portal from './components/portals/Portal'
// import IndexHero from './components/error-boundary/IndexHero'
// import IndexHigherOrderComp from './components/higher-order-comp/IndexHigherOrderComp'
// import IndexRenderProp from './components/render-prop/IndexRenderProp'
// import IndexContext from './components/context/IndexContext'
// import IndexHttpGetReq from './components/http-request/Get/IndexHttpGetReq'
import IndexHttpPostReq from './components/http-request/Post/IndexHttpPostReq'
class App extends Component {
  render() {
    return (
      <div className="container col-xl-6 mx-auto d-flex justify-content-center my-5">
        {/* <ParentComp/> */}
        {/* <Ref/> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput/> */}
        {/* <Portal/> */}
        {/* <IndexHero/> */}
        {/* <IndexHigherOrderComp/> */}
        {/* <IndexRenderProp/> */}
        {/* <IndexContext/> */}
        {/* <IndexHttpGetReq/> */}
        <IndexHttpPostReq/>
      </div>
    )
  }
}

export default App
