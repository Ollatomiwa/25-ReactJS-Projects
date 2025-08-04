import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import GameStatus from './GameStatus';
import GameCell from './GameCell';
import GameControls from './GameControls';
import GameScores from './GameScores';

const GameBoard = ({ onReturnToMenu, players }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameDraw, setGameDraw] = useState(false);
  const [winningCells, setWinningCells] = useState([]);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [gameHistory, setGameHistory] = useState([]);

  // Check for winner after each move
  useEffect(() => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    let newWinner = null;
    let newWinningCells = [];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        newWinner = board[a];
        newWinningCells = combination;
        break;
      }
    }

    if (newWinner) {
      setWinner(newWinner);
      setWinningCells(newWinningCells);
      setScores(prev => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1
      }));
      setGameHistory(prev => [...prev, `${players[`player${newWinner}`]} won`]);
    } else if (!board.includes(null)) {
      setGameDraw(true);
      setGameHistory(prev => [...prev, "Game ended in draw"]);
    }
  }, [board, players]);

  const handleCellClick = (index) => {
    if (board[index] || winner || gameDraw) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameDraw(false);
    setWinningCells([]);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0 });
    setGameHistory([]);
    resetGame();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="bg-blue-600 p-4 text-center">
          <h1 className="text-2xl font-bold text-white">Tic Tac Toe</h1>
          <GameScores 
            scores={scores} 
            players={players} 
            currentPlayer={currentPlayer}
          />
        </div>

        <div className="p-6">
          <GameStatus 
            currentPlayer={currentPlayer}
            winner={winner}
            gameDraw={gameDraw}
            players={players}
          />

          <div className="grid grid-cols-3 gap-3 mb-6">
            {board.map((cell, index) => (
              <GameCell
                key={index}
                value={cell}
                onClick={() => handleCellClick(index)}
                isWinningCell={winningCells.includes(index)}
                isDisabled={winner || gameDraw}
              />
            ))}
          </div>

          <GameControls 
            onReset={resetGame}
            onResetScores={resetScores}
            onReturnToMenu={onReturnToMenu}
          />

          {gameHistory.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">Game History:</h3>
              <ul className="text-sm text-gray-600 space-y-1 max-h-24 overflow-y-auto">
                {gameHistory.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
GameBoard.propTypes = {
  onReturnToMenu: PropTypes.func.isRequired,
  players: PropTypes.func.isRequired,
};

export default GameBoard;