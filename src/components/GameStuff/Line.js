import React, { Component } from "react";
import "./Game.css";

class Line extends Component {

  render() {
    return <div style={this.props.line_postion} className="line"></div>;
  }
}

export default Line;
