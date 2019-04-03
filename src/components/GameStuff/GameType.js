import React, { Component } from "react";

class GameType extends Component {


    render() {
        return (
            <div className="pt-5 mt-5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="action-button shadow animate green" onClick={() => this.props.changeActivePage("game")} >سهـل</button>
                    <button type="submit" className="action-button shadow animate blue" onClick={() => this.props.changeActivePage("game")} >متوسط</button>
                    <button type="submit" className="action-button shadow animate red" onClick={() => this.props.changeActivePage("game")} >نـار</button>
                </div>
            </div>
        );
    }
}

export default GameType;