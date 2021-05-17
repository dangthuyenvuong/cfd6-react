import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import countReducer from './reducer/countReducer'
import authReducer from './reducer/authReducer'

let reducer = combineReducers({
    count: countReducer,
    auth: authReducer
})

const middleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {

        return action(dispatch)

    } else {

        next(action)

    }
    
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)))
export default store