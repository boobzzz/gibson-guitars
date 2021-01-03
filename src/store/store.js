import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { productsReducer } from './reducer';

const reducers = combineReducers({
    products: productsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancer(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, middleware)