import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from "../assets/css/styles.scss";
import Buttons from "./Buttons";
import Score from "./Score";
import Timeline from "./Timeline";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Buttons />
        <Score />
        <Timeline />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
