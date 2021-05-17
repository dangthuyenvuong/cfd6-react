import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CountDown() {

    let dispatch = useDispatch()
    const state = useSelector(state => state.count)

    function _handleIncrement() {
        dispatch({
            type: 'INCREMENT'
        })
    }

    function _handleDerement() {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div style={{ margin: '200px auto', fontSize: 100 }}>
            {state.count} CountDown <br />
            <br /><br /><br />
            <button style={{fontSize: 50}} onClick={_handleIncrement}>+</button>
            <button style={{fontSize: 50}} onClick={_handleDerement}>-</button>

        </div>
    )
}