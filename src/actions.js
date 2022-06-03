import thunk from "redux-thunk";
import axios from "axios";

export const increment = () => ({
	type: "increment",
});

export const decrement = () => ({
	type: "decrement",
});

export const fetchUsers = (users) => {
	return function (dispatch) {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data.map((user) => user.id);

				dispatch({ type: "FETCH_USERS", payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_USERS_ERROR", payload: response.error });
			});
	};
};

export const fetchUsersError = (error) => {
	return {
		type: "FETCH_USERS_ERROR",
		payload: error,
	};
};
