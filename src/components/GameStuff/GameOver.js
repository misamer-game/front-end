import React, { Component } from "react";
import "./Game.css";
import avatar from "../../trophy.png"
import apiUrl from "../../apiConfig"

class GameOver extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            user_id: this.props.user.id,
            score: this.props.score,
            game_type_id: this.props.game_level
        };
    }

    componentDidMount() {

        this.handleAddGameRequest(this.state)

    }

    handleAddGameRequest(data) {
        let url = `${apiUrl}/game`;
        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ data })
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                console.log('handleAddGameRequest: ', data)
            })
            .catch(e => console.log(e));
    };

    render() {
        console.log("hi im from over:", this.state);
        return (
            <div className="wrapper">
                <div class="mycontainer">
                    <div className="msg">
                        <div className="avatar-wrapper">
                            <img src={avatar} className="avatar" />
                        </div>
                        <br></br>
                        <h3> Score: {this.props.score}</h3>
                        <h3> level: {this.props.game_level}</h3>

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
