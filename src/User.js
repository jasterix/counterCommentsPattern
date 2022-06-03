import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchUsersError } from "./actions";

// const initialState = {
// 	users: [],
// 	error: "",
// };

// const userReducer = (state = initialState, action) => {
// 	console.log(action);
// 	switch (action.type) {
// 		case "FETCH_USERS":
// 			return { ...state, users: action.payload };
// 		case "FETCH_USERS_ERROR":
// 			return { ...state, error: action.payload };
// 		default:
// 			return { ...state };
// 	}
// };

// const getUsers = () => {
// 	return function (dispatch) {
// 		axios
// 			.get("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => {
// 				const users = response.data.map((user) => user.id);
// 				console.log(users);
// 				//dispatch({ type: "FETCH_USERS", payload: response.data });
// 			})
// 			.catch((error) => {
// 				dispatch({ type: "FETCH_USERS_ERROR", payload: response.error });
// 			});
// 	};
// };

class User extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		//onClick={() => state.getUsers()}
		// users
		// 				? users.map((user) => {
		// 						return <li key={user.id}>{user.name}</li>;
		// 				  })
		// 				: null}
	}
	render() {
		// users.map((user) => {
		// 	console.log(user);
		// });
		return (
			<div>
				<h1>Users:{this.props.count}</h1>
				<button onClick={() => this.props.fetchUsers()}>Get Users</button>
				<table style={{ textAlign: "left" }}>
					<thead>
						<tr>
							<th style={{ width: "200px" }}>Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users
							? this.props.users.map((user) => {
									return (
										<tr key={user.id}>
											<td>{user.name}</td>
											<td> {user.username}</td>
										</tr>
									);
							  })
							: "Empty"}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.count,
		users: state.users,
		error: state.error,
	};
};

const mapDispatchToProps = (result) => {
	return {
		fetchUsers,
		fetchUsersError,
	};
};

export default connect(mapStateToProps, mapDispatchToProps())(User);
