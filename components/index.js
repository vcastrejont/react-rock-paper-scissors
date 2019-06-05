import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from "../assets/css/styles.scss";
import Buttons from "./Buttons";
import Score from "./Score";
import Timeline from "./Timeline";
import Header from "./Header";
import * as util from "../utils/lib";

class App extends Component {
  state = {
    results: [],
    score: { me: 0, cpu: 0 }
  };

  btnClick = e => {
    const userPlay = e.currentTarget.value;
    const cpuPlay = util.cpuPlay();
    const result = util.gameResult(userPlay, cpuPlay);
    this.setState(prevState => ({
      results: [[userPlay, cpuPlay], ...prevState.results]
    }));
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
