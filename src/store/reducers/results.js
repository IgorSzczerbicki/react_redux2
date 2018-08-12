import * as actionTypes from '../actions/actions'

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: action.result})
			};
		case actionTypes.DELETE_RESULT:
			const newResults = state.results.filter(res=> res.id !== action.resId);
			return {
				...state,
				results: newResults
			}
	}

	return state;
};

export default reducer;