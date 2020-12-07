import { createStore } from 'redux'
import {rootReducer} from './reducers'
import { applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))