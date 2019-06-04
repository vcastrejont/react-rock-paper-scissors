import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from "../assets/css/styles.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>
            <span>Rock</span>, <span>Papper</span> & <span>Scissors</span>
          </h1>
          <hr />
        </header>
        <div id="buttons">
          <button className="rock" aria-label="rock" />
          <button className="papper" aria-label="Papper" />
          <button className="scissors" aria-label="Scissors" />
        </div>
        <div id="score">
          <div>
            <h2>Me</h2>
            <p>0</p>
          </div>
          <div>
            <p>-</p>
          </div>
          <div>
            <h2>CPU</h2>
            <p>0</p>
          </div>
        </div>
        <div id="timeline">
          <img src="assets/images/mini-r.png" alt="rock" />
          <hr />
          <img src="assets/images/mini-p.png" alt="papper" />
        </div>
      </React.Fragment>
    );
  }
}
let container = document.getElementById("app");
let component = <App />;

ReactDOM.render(component, container);
