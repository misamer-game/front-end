import React, { Component } from "react";
import "../Leaderboard.scss";
import apiUrl from "../apiConfig"

class Leaderboard extends Component {
    state = {
        easy: [],
        mid: [],
        hard: []
    }

    // handleLoginRequest = () => {
    //     let url = `${apiUrl}/games`;

    //     fetch(url, {
    //         mode: "cors",
    //         credentials: "include",
    //         method: "GET",
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.game)
    //             this.setState({ levels: data.game })
    //         })

    //         .catch(e => console.log(e));
    // };

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
                console.log("me", data);

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
                this.setState({ mid: data })
                console.log(this.state.mid.game_type)
                console.log(this.state.mid.game_type)


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
                this.setState({ hard: data })
                console.log(this.state.hard.game_type)
                // console.log(this.state.levels.game_type)


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
                                {/* return the highest score of the easy level */}
                                <mark>{this.state.easy.score}</mark>
                                {/* return the game type */}
                                <small>{this.state.easy.game_type}</small>
                            </li>
                            <li>
                                {/* return the highest score of the mid level */}
                                <mark>{this.state.mid.score}</mark>
                                {/* return the game type */}
                                <small>{this.state.mid.game_type}</small>
                            </li>
                            <li>
                                {/* return the highest score of the hard level */}
                                <mark>{this.state.hard.score}</mark>
                                {/* return the game type */}
                                <small>{this.state.hard.game_type}</small>
                            </li>

                        </ol>
                    </div>
                </div></div>
        )
    };

}


export default Leaderboard;
