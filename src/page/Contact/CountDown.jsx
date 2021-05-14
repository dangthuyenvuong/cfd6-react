import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'


function CountDown(prop, ref){
    let [count, setCount] = useState(10000)
    let htmlRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            reset,
            htmlRef
        }
    }, [])

    function reset(){
        setCount(10000)
    }

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            setCount(--count)
        }, 1000)
    },[count])

    return <div ref={htmlRef} style={{fontSize: 100}}>{count}</div>
}

export default React.forwardRef(CountDown)