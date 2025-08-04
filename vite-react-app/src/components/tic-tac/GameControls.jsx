import PropTypes from 'prop-types';

const GameControls = ({ onReset, onResetScores, onReturnToMenu }) => {
    return (
      <div className="flex flex-col space-y-3">
        <div className="flex justify-center space-x-3">
          <button
            onClick={onReset}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md flex-1 max-w-xs"
          >
            New Game
          </button>
          <button
            onClick={onReturnToMenu}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md flex-1 max-w-xs"
          >
            Main Menu
          </button>
        </div>
        <button
          onClick={onResetScores}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md mx-auto w-full max-w-xs"
        >
          Reset Scores
        </button>
      </div>
      );
    };
  
  GameControls.propTypes = {
    onReset: PropTypes.func.isRequired,
    onResetScores: PropTypes.func.isRequired,
    onReturnToMenu: PropTypes.func.isRequired,
  };
  
  export default GameControls;
  