import * as ADAPTER from '../adapter.js'

export const INCREMENT = () => {
	return ({type: "INCREMENT"})
}

export const TO_ONE = () => {
	return ({type: "TO_ONE"})
}

export const GET_STORES = (data) => {return ({type: "GET_STORES", payload: data}) }

export const asyncFetchStores = () => {
	return function(dispatch){
		return ADAPTER.getStores().then(
			(response) => dispatch(GET_STORES(response))
		)
	}
}

export const GET_STORE = (data) => {return ({type: "GET_STORE", payload: data}) }

export const asyncFetchStore = (id) => {
	return function(dispatch){
		return ADAPTER.getStore(id).then(
			(response) => dispatch(GET_STORE(response))
		)
	}
}
export const SET_STORE_ID = (store_id) => {return ({type: "SET_STORE_ID", payload: store_id}) }
export const ALL_STORES = () => {return ({type: "ALL_STORES"}) }
export const SELECTED_STORE = () => {return ({type: "SELECTED_STORE"}) }
export const UPDATE_STORE = () => {return ({type: "UPDATE_STORE"})}

export const asyncUpdateStore = (id, name, address, street, state, zip) => {
	return function(dispatch){
		return ADAPTER.updateStore
	}
}