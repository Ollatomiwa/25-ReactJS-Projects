import PropTypes from 'prop-types';

const GameScores = ({ scores, players, currentPlayer }) => {
    return (
      <div className="mt-4 flex justify-between items-center px-2">
        <div className={`text-center ${currentPlayer === 'X' ? 'bg-blue-800' : 'bg-blue-500'} rounded-lg p-2 flex-1 mx-1 transition-all duration-300`}>
          <div className="text-white font-semibold truncate">{players.playerX}</div>
          <div className="text-white text-xl font-bold">{scores.X}</div>
        </div>
        
        <div className="text-white font-bold mx-2">VS</div>
        
        <div className={`text-center ${currentPlayer === 'O' ? 'bg-green-800' : 'bg-green-500'} rounded-lg p-2 flex-1 mx-1 transition-all duration-300`}>
          <div className="text-white font-semibold truncate">{players.playerO}</div>
          <div className="text-white text-xl font-bold">{scores.O}</div>
        </div>
      </div>
    );
};

GameScores.propTypes = {
    scores: PropTypes.shape({
        X: PropTypes.number.isRequired,
        O: PropTypes.number.isRequired,
    }).isRequired,
    players: PropTypes.shape({
        playerX: PropTypes.string.isRequired,
        playerO: PropTypes.string.isRequired,
    }).isRequired,
    currentPlayer: PropTypes.string.isRequired,
};

export default GameScores;