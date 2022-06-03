import { increment, decrement, fetchUsers, fetchUsersError } from "./actions";

const initialState = {
	count: 0,
	users: [],
	error: "",
};
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_USERS":
			return { ...state, users: action.payload };
		case "FETCH_USERS_ERROR":
			return { ...state, error: action.payload };
		case "increment":
			console.log(state.count);
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		default:
			return { ...state };
	}
};

export default counterReducer;
