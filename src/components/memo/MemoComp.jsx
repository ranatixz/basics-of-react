import React from 'react'

const MemoComp = ({name}) => {

    //memo component is like a pure component
    //but memo component is a functionial component

    console.log('memo component rendered')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
