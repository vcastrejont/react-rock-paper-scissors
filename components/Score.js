import React from "react";

const Score = props => {
  return (
    <div id="score">
      <div>
        <h2>Me</h2>
        <p>{props.score.me}</p>
      </div>
      <div>
        <p>-</p>
      </div>
      <div>
        <h2>CPU</h2>
        <p>{props.score.cpu}</p>
      </div>
    </div>
  );
};

export default Score;
