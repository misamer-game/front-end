import React, { Component } from "react";
import Leaderboard from "../components/Leaderboard";
class Home extends Component {


  render() {
    let dirComp = "sign-in";
    if (this.props.user) {
      dirComp = "game-type";
    }
    return (
      <div className=" mt-5 p-3" style={{ paddingBottom: 400 }}>
        <div className="d-flex justify-content-center">
          <Leaderboard />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="action-button shadow animate red" onClick={() => this.props.changeActivePage(dirComp)}>العب يلد</button>
        </div>
      </div>
    );
  }
}

export default Home;
