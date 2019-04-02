import React, { Component } from "react";
import "./Game.css";

class GameOver extends Component {

    render() {
        return (
            <div id="container">
                <h1>GameOver</h1>
                <h3>{this.props.score}</h3>
            </div>
        );
    }
}

export default GameOver;
