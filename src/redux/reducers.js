
const initialState = {week: 0}

export const rootReducer = (state = initialState, action)=> {
	if(action.type==="INCREMENT"){
		return Object.assign({}, state, {week: state.week + 1})
	}
	
	else {return state}
}