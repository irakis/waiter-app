
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { tablesReducer } from '../redux/tablesRedux.js';
import thunk from 'redux-thunk';
import initialState from './initialState';

const subreducers = {
    tables: tablesReducer
}
const reducer = combineReducers(subreducers)

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
console.log('store?: ', initialState);

export default store;