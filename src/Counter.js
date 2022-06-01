import { connect } from "react-redux";
import React from "react";
import { increment, decrement } from "./actions";

function Counter(props) {
  return (
    <>
      <h1>count: {props.count}</h1>
      <button onClick={() => props.increment()}> increment +1</button>
      <button onClick={() => props.decrement()}> decrement -1</button>
    </>
  );
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
