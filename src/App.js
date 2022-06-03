import "./styles.css";
import React, { Component } from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import counterReducer from "./counterReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import User from "./User";

const store = createStore(
	counterReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<h1>Hello CodeSandbox</h1>
					<h2>Start editing to see some magic happen!</h2>
					<Counter />
					<User />
				</div>
			</Provider>
		);
	}
}

export default App;
