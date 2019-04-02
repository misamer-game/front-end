import React, { Component } from "react";
import GameType from "./GameType";

class Game extends Component {


  render() {
    return (
      <div className="pt-5 mt-5">
        <GameType changeActivePage={this.props.changeActivePage} />
      </div>
    );
  }
}

export default Game;
