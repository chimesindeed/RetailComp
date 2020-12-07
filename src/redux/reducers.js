

const initialState = {week: 5, stores: []}

export const rootReducer = (state = initialState, action)=> {
	switch(action.type){
		case "INCREMENT": return (Object.assign({}, state, {week: state.week + 1}))
		case "TO_ONE": return (Object.assign({}, state, {week: state.week - 4}))
		case "GET_STORES": return (Object.assign({}, state, {stores: action.payload}))
		default: return state
	}
	
	
}