import { useEffect, useState } from 'react'

export default function  CountDown(){
    let [count, setCount] = useState(100)
    useEffect(() => {
        let title = document.title
        document.title = 'demo'
        console.log('constructor')
        return () => {
            document.title = title
        }
    }, [])

    useEffect(() => {
        // console.log('aaa')
        setTimeout(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            // console.log('callback ')
        }
    }, [count])

    // console.log('render')

    return (
        <div style={{margin: '200px auto', fontSize: 100}}>
            {count} CountDown
        </div>
    )
}