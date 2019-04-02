import React, { Component } from "react";
import Leaderboard from "../components/Leaderboard";

class Home extends Component {


  render() {
    return (
      <div className="pt-5 mt-5">
        <div className="d-flex justify-content-center">
          <Leaderboard />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="action-button shadow animate red" onClick={() => this.props.changeActivePage("game")}>العب يلد</button>
        </div>
      </div>
    );
  }
}

export default Home;
