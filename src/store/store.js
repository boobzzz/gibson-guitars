import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from './reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    products: productsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))