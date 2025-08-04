import PropTypes from 'prop-types';

const GameCell = ({ value, onClick, isWinningCell, isDisabled }) => {
    const getCellStyle = () => {
      let baseStyle = 'w-full h-24 flex items-center justify-center text-5xl font-bold rounded-lg shadow-sm transition-all duration-200 cursor-pointer aspect-square';
      
      if (isWinningCell) {
        return `${baseStyle} bg-yellow-100 ring-4 ring-yellow-400 transform scale-105 text-yellow-800`;
      }
      
      if (value === 'X') {
        return `${baseStyle} bg-blue-50 text-blue-600 hover:bg-blue-100`;
      }
      
      if (value === 'O') {
        return `${baseStyle} bg-green-50 text-green-600 hover:bg-green-100`;
      }
      
      return `${baseStyle} bg-gray-50 text-gray-400 hover:bg-gray-100 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;
    }; 
    return (
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={getCellStyle()}
      >
        {value}
      </div>
    );
  };
  
  GameCell.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    isWinningCell: PropTypes.bool,
    isDisabled: PropTypes.bool,
  };

  export default GameCell;