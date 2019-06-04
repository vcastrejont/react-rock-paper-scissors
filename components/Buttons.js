import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div id="buttons">
        <button className="rock" aria-label="rock" />
        <button className="papper" aria-label="Papper" />
        <button className="scissors" aria-label="Scissors" />
      </div>
    );
  }
}

export default Buttons;
