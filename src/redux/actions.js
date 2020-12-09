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