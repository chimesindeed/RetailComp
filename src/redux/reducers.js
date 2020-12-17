

const initialState = {week: 5, stores: [], store: [], toggle: 'allStores'}

export const rootReducer = (state = initialState, action)=> {
	switch(action.type){
		case "INCREMENT": return (Object.assign({}, state, {week: state.week + 1}))
		case "TO_ONE": return (Object.assign({}, state, {week: state.week - 4}))
		
		case "GET_STORES": return (Object.assign({}, state, {stores: action.payload}))
		case "GET_STORE": return (Object.assign({}, state, {store: action.payload}))

		case "SELECTED_STORE": return (Object.assign({}, state, {toggle: 'clickedStore'}))
		case "ALL_STORES": return (Object.assign({}, state, {toggle: 'allStores'}))
		case "UPDATE_STORE": return (Object.assign({}, state, {toggle: 'updateStore'}))

		default: return state
	}
	
	
}