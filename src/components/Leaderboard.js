import React, { Component } from "react";
import "../Leaderboard.scss";
import apiUrl from "../apiConfig"

class Leaderboard extends Component {
    state = {
        easy: { Game_type: {}, User: {} },
        mid: { Game_type: {}, User: {} },
        hard: { Game_type: {}, User: {} }
    }

    // get the url of easy game level from DB
    handleEasyRequest = () => {
        // let allscores = ['easy', 'hard', 'mid']

        let url = `${apiUrl}/game/highest_easy`;

        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log("easy", data);

                this.setState({ easy: data })
                console.log(this.state.easy.game_type)
                console.log("hey", this.state.easy.game_type)


            })

            .catch(e => console.log(e));
    };

    // get the url of mid game level from DB
    handleMidRequest = () => {
        let url = `${apiUrl}/game/highest_mid`;

        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log("easy", data);
                this.setState({ mid: data })

            })

            .catch(e => console.log(e));
    };

    // get the url of hard game level from DB
    handleHardRequest = () => {
        let url = `${apiUrl}/game/highest_hard`;

        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log("hard", data);
                this.setState({ hard: data })

            })

            .catch(e => console.log(e));
    };

    componentDidMount() {
        // this.handleLoginRequest();
        this.handleEasyRequest();
        this.handleMidRequest();
        this.handleHardRequest();
    }

    render() {
        return (
            <div>
                <div className=" mt-5 p-3">
                    <div className="con">
                        <ol>
                            <h1>اقدععععع ناااسسس</h1>
                            <li>
                                <mark>{this.state.easy.User.email}</mark>
                                <small>{this.state.easy.Game_type.game_type} | {this.state.easy.score}</small>
                            </li>
                            <li>
                                <mark>{this.state.mid.User.email}</mark>
                                <small>{this.state.mid.Game_type.game_type} | {this.state.mid.score}</small>
                            </li>
                            <li>
                                <mark>{this.state.hard.User.email}</mark>
                                <small>{this.state.hard.Game_type.game_type} | {this.state.hard.score}</small>
                            </li>
                        </ol>
                    </div>
                </div></div>
        )
    };

}


export default Leaderboard;
