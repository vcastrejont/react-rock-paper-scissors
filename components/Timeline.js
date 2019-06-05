import React from "react";

const Timeline = props => {
  return (
    <div id="timeline" aria-live="assertive">
      {props.results.map((row, i) => (
        <div className="row" key={i}>
          <img
            src={`assets/images/mini-${row[0].substr(0, 1)}.png `}
            alt={row[0]}
          />
          <hr />
          <img
            src={`assets/images/mini-${row[1].substr(0, 1)}.png `}
            alt={row[1]}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
