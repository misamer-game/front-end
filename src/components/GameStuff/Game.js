import React, { Component } from "react";
import "./Game.css";
import Line from "./Line.js";
import Car from "./Car.js";
import PlayerCar from "./PlayerCar.js";
import GameOver from "./GameOver";
import ReactDOM from 'react-dom';

class Game extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      requestAnimationFrameId: undefined,
      game_over: false,
      score_counter: 0,
      speed: 4,
      line_speed: 9,
      move_right: false,
      move_left: false,
      move_up: false,
      move_down: false,

      car: {
        height: '60px',
        width: '40px',
        bottom: '30px',
        left: '60%',
        backgroundColor: '#ffdf5a'
      },

      car_1: {
        height: '60px',
        width: '40px',
        top: '-100px',
        left: '60%',
        backgroundColor: '#26c5ff'
      },

      car_2: {
        height: '60px',
        width: '40px',
        top: '-200px',
        left: '40%',
        backgroundColor: '#26c5ff'
      },

      car_3: {
        height: '60px',
        width: '40px',
        top: '-350px',
        left: '50%',
        backgroundColor: '#26c5ff'
      },

      line_1: {
        top: '-150px'
      },

      line_2: {
        top: '150px'
      },

      line_3: {
        top: '450px'
      }
    };

  }

  tick = () => {
    if (!this.state.game_over) {
      this.setState(state => ({
        score_counter: state.score_counter + 1
      }));
    }
  }

  componentWillMount = () => {
    this.startGame()
    document.addEventListener("keydown", this.handelKeyDown.bind(this));
    document.addEventListener("keyup", this.handelKeyUp.bind(this));
  }

  componentWillUnmount = () => {
    this.stop_the_game();
    cancelAnimationFrame(this.state.requestAnimationFrameId);
    document.removeEventListener("keydown", this.handelKeyDown.bind(this));
    document.removeEventListener("keyup", this.handelKeyUp.bind(this));
  }

  startGame = () => {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({ requestAnimationFrameId: requestAnimationFrame(this.repeat) });
  }

  handelKeyUp = (e) => {
    if (this.state.game_over === false) {
      var key = e.keyCode;
      if (key === 37) {
        cancelAnimationFrame(this.state.move_left);
        this.setState({ move_left: false });
      } else if (key === 39) {
        cancelAnimationFrame(this.state.move_right);
        this.setState({ move_right: false });
      } else if (key === 38) {
        cancelAnimationFrame(this.state.move_up);
        this.setState({ move_up: false });
      } else if (key === 40) {
        cancelAnimationFrame(this.state.move_down);
        this.setState({ move_down: false });
      }
    }
  }

  handelKeyDown = (e) => {
    if (this.state.game_over === false) {
      var key = e.keyCode;
      if (key === 37 && this.state.move_left === false) {
        var move_left = requestAnimationFrame(this.left);
        this.setState({ move_left: move_left });

      } else if (key === 39 && this.state.move_right === false) {
        var move_right = requestAnimationFrame(this.right);
        this.setState({ move_right: move_right });

      } else if (key === 38 && this.state.move_up === false) {
        var move_up = requestAnimationFrame(this.up);
        this.setState({ move_up: move_up });

      } else if (key === 40 && this.state.move_down === false) {
        var move_down = requestAnimationFrame(this.down);
        this.setState({ move_down: move_down });
      }
    }
  }

  left = () => {
    let car_left = parseInt(this.state.car.left);
    var container_width = document.body.clientWidth * 0.25;
    car_left = container_width * (car_left / 100);

    if (this.state.game_over === false && car_left > 0) {
      let originalState = this.state.car;
      let copy = Object.assign({}, originalState);
      car_left = ((car_left - 5) / container_width) * 100;
      copy['left'] = `${Math.trunc(car_left)}%`;
      this.setState({ car: copy })
      this.setState({ move_left: requestAnimationFrame(this.left) })
    }
  }

  right = () => {
    let car_left = parseInt(this.state.car.left);
    var container_width = document.body.clientWidth * 0.25;
    car_left = container_width * (car_left / 100);

    if (this.state.game_over === false && car_left < container_width - parseInt(this.state.car.width)) {
      let originalState = this.state.car;
      let copy = Object.assign({}, originalState);
      car_left = ((car_left + 5) / container_width) * 100;
      copy['left'] = `${Math.trunc(car_left)}%`;
      this.setState({ car: copy })
      this.setState({ move_right: requestAnimationFrame(this.right) })
    }
  }

  up = () => {
    let container_height = document.body.clientHeight - 38;
    let car_top = container_height - (parseInt(this.state.car.bottom) + 60);

    if (this.state.game_over === false && car_top > 0) {
      car_top = car_top - 3;
      let originalState = this.state.car;
      let copy = Object.assign({}, originalState);
      let bottom = (container_height - car_top) - 60;
      copy['bottom'] = `${bottom}px`;
      this.setState({ car: copy })
      this.setState({ move_up: requestAnimationFrame(this.up) })
    }

  }

  down = () => {

    let container_height = document.body.clientHeight - 38;
    let car_top = container_height - (parseInt(this.state.car.bottom) + 60);

    if (this.state.game_over === false && car_top < container_height - 60) {
      car_top = car_top + 3;
      let originalState = this.state.car;
      let copy = Object.assign({}, originalState);
      let bottom = (container_height - car_top) - 60;
      copy['bottom'] = `${bottom}px`;
      this.setState({ car: copy })
      this.setState({ move_down: requestAnimationFrame(this.down) })
    }

  }

  /* Move the cars and lines */

  repeat = () => {

    if (this.collision('cpu1') && this.collision('cpu2') && this.collision('cpu3')) {

      this.car_down(this.state.car_1, 'car_1');
      this.car_down(this.state.car_2, 'car_2');
      this.car_down(this.state.car_3, 'car_3');

      this.line_down(this.state.line_1, 'line_1');
      this.line_down(this.state.line_2, 'line_2');
      this.line_down(this.state.line_3, 'line_3');

      this.setState({ requestAnimationFrameId: requestAnimationFrame(this.repeat) });

      if (this.state.score_counter % 10 === 0) {
        this.setState({ speed: this.state.speed + 2 });
        this.setState({ speed: this.state.line_speed + 2 });
      }

    } else {
      console.log("GAME FINSH")
      this.stop_the_game();
    }

  }

  line_down = (line, lineNum) => {
    var line_current_top = parseInt(line.top);
    var container_height = document.body.clientHeight - 38;
    if (line_current_top > container_height) {
      line_current_top = -300;
    }
    this.setState({ [lineNum]: { top: line_current_top + this.state.line_speed } });
  }

  updateCar = (carNum, key, car_left) => {
    const originalState = this.state[carNum]
    const copy = Object.assign({}, originalState);
    copy[key] = car_left
    this.setState({ [carNum]: copy })
  }

  // random needs fixe
  car_down = (car, carNum) => {
    var car_current_top = parseInt(car.top);
    var container_height = document.body.clientHeight - 38;
    var container_width = document.body.clientWidth * 0.25;
    var car_width = parseInt(car.width);
    if (car_current_top > container_height) {
      car_current_top = -200;
      var car_left = parseInt(Math.random() * (container_width - car_width));
      this.updateCar(carNum, 'left', car_left);
    }
    this.updateCar(carNum, 'top', car_current_top + this.state.speed);
  }

  collision = (cpu) => {

    const player_X = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.player)).getPropertyValue("left"))
    const player_Y = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.player)).getPropertyValue("top"))
    var b1 = player_Y + 60;
    var r1 = player_X + 40;

    const cpu1_X = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs[cpu])).getPropertyValue("left"))
    const cpu1_Y = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs[cpu])).getPropertyValue("top"))
    var b2 = cpu1_Y + 60;
    var r2 = cpu1_X + 40;

    if (b1 < cpu1_Y || player_Y > b2 || r1 < cpu1_X || player_X > r2) {
      return true;
    } else {
      return false;
    }

  }

  stop_the_game = () => {

    cancelAnimationFrame(this.state.requestAnimationFrameId);

    //this.setState({ game_over: true })

    cancelAnimationFrame(this.state.move_right);
    this.setState({ move_right: false })

    cancelAnimationFrame(this.state.move_left);
    this.setState({ move_left: false })

    cancelAnimationFrame(this.state.move_up);
    this.setState({ move_up: false });

    cancelAnimationFrame(this.state.move_down);
    this.setState({ move_down: false });

    document.removeEventListener("keydown", this.handelKeyDown.bind(this));
    document.removeEventListener("keyup", this.handelKeyUp.bind(this));

    clearInterval(this.interval);

    setTimeout(
      function () {
        this.setState({ game_over: true });
      }
        .bind(this),
      3000
    );

  }

  render = () => {
    let gamee = (
      <div>
        <div id="score_div">
          Score: <span id="score">{this.state.score_counter}</span>
        </div>
        <div id="container" ref={"game"} >
          <Line line_postion={this.state.line_1} />
          <Line line_postion={this.state.line_2} />
          <Line line_postion={this.state.line_3} />

          <PlayerCar car_postion={this.state.car} ref={"player"} />

          <Car car_postion={this.state.car_1} ref={"cpu1"} />
          <Car car_postion={this.state.car_2} ref={"cpu2"} />
          <Car car_postion={this.state.car_3} ref={"cpu3"} />
        </div>

      </div>
    );

    if (this.state.game_over) {
      return <GameOver changeActivePage={this.props.changeActivePage}
        score={this.state.score_counter} />;
    } else {
      return (gamee);
    }
    // return (gamee);

  }
}

export default Game;
