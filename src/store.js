import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {restaurentListReducer} from './Reducers/restaurentReducer'
const reducers = combineReducers({
    restaurentReducer:restaurentListReducer
    
})

const middleware = [thunk]
//store
const store = createStore(reducers,applyMiddleware(...middleware))


export default store
