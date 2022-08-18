import React from 'react';

const Square = ({ value, click, isWinningSquare }) => {
  //console.log('square rerender');
  return (
    <button
      type="button"
      className="square"
      onClick={click}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
