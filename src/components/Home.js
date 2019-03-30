import React, { Component } from "react";

class Home extends Component {
  

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>HOME</h1>
     <button type="submit" className="btn btn-primary" onClick={() => this.props.changeActivePage("game")}>Game</button>
      </div>
    );
  }
}

export default Home;
