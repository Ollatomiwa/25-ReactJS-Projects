import PropTypes from 'prop-types';

const GameStatus = ({ currentPlayer, winner, gameDraw, players }) => {
  const getStatusMessage = () => {
    if (winner) {
      return (
        <div className="animate-bounce">
          <span className="text-2xl font-bold text-blue-600">
            {winner === 'X' ? players.playerX : players.playerO} wins! 🎉
          </span>
        </div>
      );
    }
    if (gameDraw) {
      return (
        <p className="text-2xl font-bold text-gray-600">
          Its a draw! 🤝
        </p>
      );
    }
    return (
      <p className="text-xl text-gray-700">
        <span className="font-bold text-blue-600">
          {currentPlayer === 'X' ? players.playerX : players.playerO}
        </span>s turn
      </p>
    );
  };

  return (
    <div className="mb-6 text-center min-h-16 flex items-center justify-center">
      {getStatusMessage()}
    </div>
  );
};

GameStatus.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string,
  gameDraw: PropTypes.bool.isRequired,
  players: PropTypes.shape({
    playerX: PropTypes.string.isRequired,
    playerO: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameStatus;