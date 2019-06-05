import React from "react";

const Buttons = props => {
  return (
    <div id="buttons">
      <button
        className="rock"
        aria-label="rock"
        onClick={props.action}
        value="rock"
      />
      <button
        className="papper"
        aria-label="Papper"
        onClick={props.action}
        value="papper"
      />
      <button
        className="scissors"
        aria-label="Scissors"
        onClick={props.action}
        value="scissors"
      />
    </div>
  );
};

export default Buttons;
