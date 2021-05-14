import React from 'react'


function InputComponent(prop, ref){
    return <div>
        <h1></h1>
        <input ref={ref} type="text" placeholder="Họ và tên bạn" />
    </div>
}



export default React.forwardRef(InputComponent)