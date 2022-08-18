import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `'${winner}' Wins!!`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'TIE !!'}
    </h2>
  );
};

export default StatusMessage;
