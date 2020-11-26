
const initialState = {week: 5}

export const rootReducer = (state = initialState, action)=> {
	switch(action.type){
		case "INCREMENT": return (Object.assign({}, state, {week: state.week + 1}))
		case "TO_ONE": return (Object.assign({}, state, {week: state.week - 4}))
		default: return state
	}
	
	
}