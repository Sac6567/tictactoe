import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          Wins!!
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && 'TIE !!'}
    </div>
  );
};

export default StatusMessage;
