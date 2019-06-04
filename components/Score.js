import React, { Component } from "react";

class Score extends Component {
  render() {
    return (
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
    );
  }
}

export default Score;
