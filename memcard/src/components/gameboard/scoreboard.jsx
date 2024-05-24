// A way to calculate the current score, and your high score:


// Need to re-render the state on each click (event handler) that checks and updates score

// If you lose it will print lose in middle of screen and reset the gameboard with new pictures


import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div>
      <h2>Score: {score}/10</h2>
    </div>
  );
};

export default Scoreboard;