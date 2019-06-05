import React from "react";

const Header = () => {
  return (
    <header aria-labelledby="title" aria-describedby="info">
      <h1 id="title">
        <span>Rock</span>, <span>Paper</span> & <span>Scissors</span>
        <p id="info">Press one of the following buttons to start playing</p>
      </h1>
      <hr />
    </header>
  );
};

export default Header;
