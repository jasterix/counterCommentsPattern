import { connect } from "react-redux";
import React, { Component } from "react";
import { increment, decrement } from "./actions";

function Counter(props) {
  const mapStateToProps = (state) => ({});

  const mapDispatchToProps = {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
