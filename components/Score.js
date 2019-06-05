import React from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const Score = props => {
  return (
    <div id="score">
      <div className="col">
        <h2>Me</h2>
        <div>
          <ReactTextTransition
            text={props.score.me}
            order={props.score.me}
            spring={presets.wobbly}
            overflow="true"
          />
        </div>
      </div>
      <div className="col">
        <div>-</div>
      </div>
      <div className="col">
        <h2>CPU</h2>
        <div>
          <ReactTextTransition
            text={props.score.cpu}
            order={props.score.cpu}
            spring={presets.wobbly}
            overflow="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Score;
