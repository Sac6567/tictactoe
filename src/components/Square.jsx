import React from 'react';

const Square = ({ value, click, isWinningSquare }) => {
  //console.log('square rerender');
  return (
    <button
      type="button"
      onClick={click}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
