import React, { Component } from "react";
import "./Game.css";

class GameOver extends Component {

    render() {
        return (
            <div id="container">
                <h1>GameOver</h1>
                {/* <button type="submit" className="action-button shadow animate green" onClick={() => this.props.changeActivePage("home")}>البيت</button> */}
                <h3>{this.props.score}</h3>
            </div>
        );
    }
}

export default GameOver;
