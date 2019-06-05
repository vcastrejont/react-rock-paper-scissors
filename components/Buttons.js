import React from "react";

const Buttons = props => {
  return (
    <div id="buttons">
      <button
        className="rock"
        aria-label="rock"
        onClick={props.action}
        value="rock"
        accessKey="r"
      />
      <button
        className="paper"
        aria-label="Paper"
        onClick={props.action}
        value="paper"
        accessKey="p"
      />
      <button
        className="scissors"
        aria-label="Scissors"
        onClick={props.action}
        value="scissors"
        accessKey="s"
      />
    </div>
  );
};

export default Buttons;
