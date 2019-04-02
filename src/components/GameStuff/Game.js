import React, { Component } from "react";
import "./Game.css";
import Line from "./Line.js";
import Car from "./Car.js";
import PlayerCar from "./PlayerCar.js";
<<<<<<< HEAD
import GameOver from "./GameOver";
import ReactDOM from 'react-dom';
||||||| merged common ancestors

=======
import ReactDOM from 'react-dom';
>>>>>>> player car moves evrey where and collision func works

class Game extends Component {

  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.myRef = React.createRef();
    this.state = {
      requestAnimationFrameId: undefined,
||||||| merged common ancestors
    this.state = { 
      // container_left: parseInt(container.css('left')),
      // container_width: parseInt(container.width()),
      // container_height: parseInt(container.height()),
      // car_width: parseInt(car.width()),
      // car_height: parseInt(car.height()),

=======
    this.myRef = React.createRef();
    this.state = {
      // container_left: parseInt(container.css('left')),
      // container_width: parseInt(container.width()),
      // container_height: parseInt(container.height()),
      // car_width: parseInt(car.width()),
      // car_height: parseInt(car.height()),

      borderColor: "green",
>>>>>>> player car moves evrey where and collision func works
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
<<<<<<< HEAD

||||||| merged common ancestors
    this.handelKeyDown = this.handelKeyDown.bind(this);
    this.handelKeyUp = this.handelKeyUp.bind(this);
    this.repeat = this.repeat.bind(this);
    this.line_down = this.line_down.bind(this);
    this.car_down = this.car_down.bind(this);

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
=======
    this.handelKeyDown = this.handelKeyDown.bind(this);
    this.handelKeyUp = this.handelKeyUp.bind(this);
    this.repeat = this.repeat.bind(this);
    this.line_down = this.line_down.bind(this);
    this.car_down = this.car_down.bind(this);

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);

    this.collision = this.collision.bind(this);
    this.stop_the_game = this.stop_the_game.bind(this);
>>>>>>> player car moves evrey where and collision func works
  }

<<<<<<< HEAD
  tick = () => {
    if (!this.state.game_over) {
      this.setState(state => ({
        score_counter: state.score_counter + 1
      }));
    }
  }
||||||| merged common ancestors
  
=======

>>>>>>> player car moves evrey where and collision func works

  componentWillMount = () => {
    this.startGame()
    document.addEventListener("keydown", this.handelKeyDown.bind(this));
    document.addEventListener("keyup", this.handelKeyUp.bind(this));
  }
<<<<<<< HEAD

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
||||||| merged common ancestors
  
  handelKeyUp (e) {
    
=======

  handelKeyUp(e) {

>>>>>>> player car moves evrey where and collision func works
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

<<<<<<< HEAD
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
||||||| merged common ancestors
  handelKeyDown (e) {

       if (this.state.game_over === false) {
        var key = e.keyCode;
        if (key === 37 && this.state.move_left === false) {
          var  move_left = requestAnimationFrame(this.left);
          this.setState({ move_left: move_left });
        
        }else if (key === 39 && this.state.move_right === false) {
          var move_right = requestAnimationFrame(this.right);
          this.setState({ move_right: move_right });
          
        } else if (key === 38 && this.state.move_up === false) {
          var move_up = requestAnimationFrame(this.up);
          this.setState({ move_up: move_up });

        } else if (key === 40 && this.state.move_down === false) {
           var move_down = requestAnimationFrame(this.down);
            this.setState({ move_down: move_down });
        }
=======
  handelKeyDown(e) {

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
>>>>>>> player car moves evrey where and collision func works
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

<<<<<<< HEAD
  right = () => {
    let car_left = parseInt(this.state.car.left);
||||||| merged common ancestors
  right() {
    let car_left = parseInt(this.state.car.left);  
=======
  right() {
    let car_left = parseInt(this.state.car.left);
>>>>>>> player car moves evrey where and collision func works
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

<<<<<<< HEAD
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
||||||| merged common ancestors
  up(){
=======
  up() {
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
>>>>>>> player car moves evrey where and collision func works

  }

<<<<<<< HEAD
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
||||||| merged common ancestors
  down(){
=======
  down() {

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
>>>>>>> player car moves evrey where and collision func works

  }
<<<<<<< HEAD

  /* Move the cars and lines */

  repeat = () => {

    if (this.collision('cpu1') && this.collision('cpu2') && this.collision('cpu3')) {
||||||| merged common ancestors
  
    /* Move the cars and lines */
    
    repeat() {
=======

  /* Move the cars and lines */

  repeat() {

    const player_X = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.player)).getPropertyValue("left"))
    const player_Y = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.player)).getPropertyValue("top"))
    var b1 = player_Y + 60;
    var r1 = player_X + 40;

    const cpu1_X = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.cpu1)).getPropertyValue("left"))
    const cpu1_Y = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.cpu1)).getPropertyValue("top"))
    var b2 = cpu1_Y + 60;
    var r2 = cpu1_X + 40;

    if (b1 < cpu1_Y || player_Y > b2 || r1 < cpu1_X || player_X > r2) {
      console.log("\n")
>>>>>>> player car moves evrey where and collision func works

      this.car_down(this.state.car_1, 'car_1');
      this.car_down(this.state.car_2, 'car_2');
      this.car_down(this.state.car_3, 'car_3');

      this.line_down(this.state.line_1, 'line_1');
      this.line_down(this.state.line_2, 'line_2');
      this.line_down(this.state.line_3, 'line_3');
<<<<<<< HEAD
||||||| merged common ancestors
      
      requestAnimationFrame(this.repeat);
=======


      requestAnimationFrame(this.repeat);
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
      this.setState({ requestAnimationFrameId: requestAnimationFrame(this.repeat) });
||||||| merged common ancestors
    }
=======
    } else {
      console.log("GAME FINSH")
      this.stop_the_game();
    }
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
      if (this.state.score_counter % 10 === 0) {
        this.setState({ speed: this.state.speed + 2 });
        this.setState({ speed: this.state.line_speed + 2 });
      }

    } else {
      console.log("GAME FINSH")
      this.stop_the_game();
    }
||||||| merged common ancestors
    line_down(line, lineNum) {
      var line_current_top = parseInt(line.top);
      var container_height = document.body.clientHeight - 38;
      if (line_current_top > container_height) {
          line_current_top = -300;
      }
      this.setState({ [lineNum]: {top: line_current_top + this.state.line_speed} });
    }
=======
  }
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
  }

  line_down = (line, lineNum) => {
    var line_current_top = parseInt(line.top);
    var container_height = document.body.clientHeight - 38;
    if (line_current_top > container_height) {
      line_current_top = -300;
    }
    this.setState({ [lineNum]: { top: line_current_top + this.state.line_speed } });
  }
||||||| merged common ancestors
    updateCar(carNum, key, car_left) {
=======
  line_down(line, lineNum) {
    var line_current_top = parseInt(line.top);
    var container_height = document.body.clientHeight - 38;
    if (line_current_top > container_height) {
      line_current_top = -300;
    }
    this.setState({ [lineNum]: { top: line_current_top + this.state.line_speed } });
  }
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
  updateCar = (carNum, key, car_left) => {
    const originalState = this.state[carNum]
    const copy = Object.assign({}, originalState);
    copy[key] = car_left
    this.setState({ [carNum]: copy })
  }
||||||| merged common ancestors
      const originalState = this.state[carNum]
      const copy = Object.assign({}, originalState); 
      copy[key] = car_left
      this.setState({ [carNum]: copy })
=======
  updateCar(carNum, key, car_left) {
    const originalState = this.state[carNum]
    const copy = Object.assign({}, originalState);
    copy[key] = car_left
    this.setState({ [carNum]: copy })
  }
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
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
||||||| merged common ancestors
=======
  // random needs fixe
  car_down(car, carNum) {
    var car_current_top = parseInt(car.top);
    var container_height = document.body.clientHeight - 38;
    var container_width = document.body.clientWidth * 0.25;
    var car_width = parseInt(car.width);
    if (car_current_top > container_height) {
      car_current_top = -200;
      var car_left = parseInt(Math.random() * (container_width - car_width));
      this.updateCar(carNum, 'left', car_left);
>>>>>>> player car moves evrey where and collision func works
    }
    this.updateCar(carNum, 'top', car_current_top + this.state.speed);
  }

<<<<<<< HEAD
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
||||||| merged common ancestors
    // random needs fixe
    car_down(car, carNum) {
      var car_current_top = parseInt(car.top);
      var container_height = document.body.clientHeight - 38;
      var container_width = document.body.clientWidth * 0.25;
      var car_width = parseInt(car.width);
      if (car_current_top > container_height) {
          car_current_top = -200;
          var car_left = parseInt(Math.random() * (container_width - car_width));
          this.updateCar(carNum , 'left', car_left);
      }
      this.updateCar(carNum , 'top', car_current_top + this.state.speed);
    }
=======
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
  }
||||||| merged common ancestors
=======
  collision() {



  }

  stop_the_game() {

    this.setState({ game_over: true })

    cancelAnimationFrame(this.state.move_right);
    this.setState({ move_right: false })

    cancelAnimationFrame(this.state.move_left);
    this.setState({ move_left: false })
>>>>>>> player car moves evrey where and collision func works

<<<<<<< HEAD
  stop_the_game = () => {
||||||| merged common ancestors
=======
    cancelAnimationFrame(this.state.move_up);
    this.setState({ move_up: false });

    cancelAnimationFrame(this.state.move_down);
    this.setState({ move_down: false });

    cancelAnimationFrame(this.repeat);
    // restart_div.slideDown();
    // restart_btn.focus();
  }
>>>>>>> player car moves evrey where and collision func works

    cancelAnimationFrame(this.state.requestAnimationFrameId);

    this.setState({ game_over: true })

    cancelAnimationFrame(this.state.move_right);
    this.setState({ move_right: false })

    cancelAnimationFrame(this.state.move_left);
    this.setState({ move_left: false })

    cancelAnimationFrame(this.state.move_up);
    this.setState({ move_up: false });

    cancelAnimationFrame(this.state.move_down);
    this.setState({ move_down: false });

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
      return <GameOver score={this.state.score_counter} />
    } else {
      return (gamee);
    }

<<<<<<< HEAD
||||||| merged common ancestors
    let con = (
    <div id="container" onKeyUp={this.handelKeyUp} onKeyDown={this.handelKeyDown} style={{ color: 'red' }} >
      
      <h1 className="styles.majd">hi</h1>
      
      <Line line_postion={this.state.line_1} />
      <Line line_postion={this.state.line_2} />
      <Line line_postion={this.state.line_3} />
      
      <PlayerCar car_postion={this.state.car}/>
  
      <Car car_postion={this.state.car_1}/>
      <Car car_postion={this.state.car_2}/>
      <Car car_postion={this.state.car_3}/>

    <div id="restart_div">
    <button id="restart">
            Restart<br/>
            <small className="small_text">(press Enter)</small>
        </button>
    </div>
    
    </div>);
    
    return (con);
=======
    let con = (

      <div>


        <div id="score_div">
          Score: <span id="score">0</span>
        </div>

        <div id="container" onKeyUp={this.handelKeyUp} onKeyDown={this.handelKeyDown} style={{ color: 'red' }} >

          <h1 className="styles.majd">hi</h1>

          <Line line_postion={this.state.line_1} />
          <Line line_postion={this.state.line_2} />
          <Line line_postion={this.state.line_3} />

          <PlayerCar car_postion={this.state.car} ref={"player"} />

          <Car car_postion={this.state.car_1} ref={"cpu1"} borderColor={this.state.borderColor} />


          <div id="restart_div">
            <button id="restart">
              Restart<br />
              <small className="small_text">(press Enter)</small>
            </button>
          </div>

        </div>

      </div>);

    return (con);
>>>>>>> player car moves evrey where and collision func works
  }
}

export default Game;


import React, { Component } from "react";
import "./Game.css";

class GameOver extends Component {

  render() {
    return (
      <div id="container">
        <h1>GameOver</h1>
        <h3>{this.props.score}</h3>
      </div>
    );
  }
}

export default GameOver;
