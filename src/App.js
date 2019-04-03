import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Game from "./components/GameStuff/Game";
import Profile from "./components/Profile";
import Soundmusic from "./gamesound.mp3"
import GameType from "./components/GameStuff/GameType"
import GameEasy from "./components/GameStuff/GameEasy"
import GameMed from "./components/GameStuff/GameMed"
import GameHard from "./components/GameStuff/GameHard"

//import Sound from 'react-sound';


class App extends Component {
  state = {
    user: null,
    activePage: "home"
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    if (activePage === "game") {
      document.body.classList.add("gamePage");
      document.body.classList.remove("mt-5");
      document.body.classList.remove("p-3");
    } else {
      document.body.classList.remove("gamePage")

    }
    this.setState({ activePage });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("profile");
  };
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (

      <div>
        <audio src={Soundmusic} loop autoPlay />

        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
        <div>
          {activePage === "home" ? <Home changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "game" ? <Game changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "game-type" ? <GameType changeActivePage={this.changeActivePage} user={user} /> : ""}
          {activePage === "game-easy" ? <GameEasy changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "game-med" ? <GameMed changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "game-hard" ? <GameHard changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
              ""
            )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
              ""
            )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
              ""
            )}
          {activePage === "profile" ? <Profile /> : ""}
        </div>
      </div>





    );
  }
}

export default App;
