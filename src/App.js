import "./styles.css";
import React,{Component} from "react"
import Counter from "./Counter"

class App extends Component {

  render(){
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
    </div>
  );
}
}

export default App