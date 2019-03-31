import React, { Component } from "react";
import "./Game.css";

class PlayerCar extends Component {

  render() {
    return (

        <div style={this.props.car_postion} className="car">
        <div className="f_glass"></div>
        <div className="b_glass"></div>
        <div className="f_light_l"></div>
        <div className="f_light_r"></div>
        <div className="f_tyre_l"></div>
        <div className="f_tyre_r"></div>
        <div className="b_tyre_l"></div>
        <div className="b_tyre_r"></div>
        </div>
    
    );
  }
}

export default PlayerCar;
