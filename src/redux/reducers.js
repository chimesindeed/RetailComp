
const initialState = {	week: 5,

												stores: [], store: [], store_id: null,
												
												notes: [],

												toggle: 'allStores'
											}

export const rootReducer = (state = initialState, action)=> {
	switch(action.type){
		case "INCREMENT": return (Object.assign({}, state, {week: state.week + 1}))
		case "TO_ONE": return (Object.assign({}, state, {week: state.week - 4}))
		
		case "GET_STORES": return (Object.assign({}, state, {stores: action.payload}))
		case "GET_STORE": return (Object.assign({}, state, {store: action.payload}))

		case "SELECTED_STORE": return (Object.assign({}, state, {toggle: 'clickedStore'}))
		case "ALL_STORES": return (Object.assign({}, state, {toggle: 'allStores'}))
		case "UPDATE_STORE": return (Object.assign({}, state, {toggle: 'updateStore'}))

		case "SET_STORE_ID": return (Object.assign({}, state, {store_id: action.payload})
		)
		
		default: return state
	}
		
}