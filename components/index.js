import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from "../assets/css/styles.scss";
import Buttons from "./Buttons";
import Score from "./Score";
import Timeline from "./Timeline";
import Header from "./Header";
import { random } from "lodash";

class App extends Component {
  state = {
    results: [],
    score: { me: 0, cpu: 0 }
  };
  constructor(props) {
    super(props);
  }
  btnClick = e => {
    let result = "";
    let score = "";
    const moves = ["rock", "papper", "scissors"];
    const userPlay = e.currentTarget.value;
    const cpuPlay = moves[random(0, 2)];

    console.log(`User Play: ${userPlay}`);
    console.log(`CPU Play: ${cpuPlay}`);
    const newResult = [userPlay, cpuPlay];
    this.setState(prevState => ({
      results: [...prevState.results, [userPlay, cpuPlay]]
    }));

    if (userPlay === cpuPlay) {
      result = "draw";
    } else {
      switch (userPlay) {
        case "rock":
          result = cpuPlay === "scissors" ? "victory" : "defeat";
          break;
        case "scissors":
          result = cpuPlay === "papper" ? "victory" : "defeat";
          break;
        case "papper":
          result = cpuPlay === "rock" ? "victory" : "defeat";
          break;
        default:
          break;
      }
      if (result === "victory") {
        this.setState(prevState => ({
          score: {
            ...prevState.score,
            me: prevState.score.me + 1
          }
        }));
      } else {
        this.setState(prevState => ({
          score: {
            ...prevState.score,
            cpu: prevState.score.cpu + 1
          }
        }));
      }
    }
    console.log(result);
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Buttons action={this.btnClick} />
        <Score score={this.state.score} />
        <Timeline results={this.state.results} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
