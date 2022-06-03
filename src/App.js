import "./styles.css";
import React, { Component } from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import counterReducer from "./counterReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(counterReducer, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
