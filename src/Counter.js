import { connect } from "react-redux";
import React from "react";
import { increment, decrement } from "./actions";

class Counter extends React.Component {
  render() {
    return (
      <>
        <h1>count: {this.props.count}</h1>
        <button onClick={() => this.props.increment()}> increment +1</button>
        <button onClick={() => this.props.decrement()}> decrement -1</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = () => {
  return {
    increment,
    decrement
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
