import React, { Component } from "react";
import "./Game.css";
import avatar from "../../trophy.png"
class GameOver extends Component {

    render() {
        return (
            <div className="wrapper">
                <div class="mycontainer">
                    <div className="msg">
                        <div className="avatar-wrapper">
                            <img src={avatar} className="avatar" />
                        </div>
                        <br></br>
                        <h3> Score: {this.props.score}</h3>
                        <div className="d-flex justify-content-center">
                            <button type="submit"
                                className="action-button shadow animate green"
                                onClick={() => this.props.changeActivePage("home")}>البيت</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameOver;
