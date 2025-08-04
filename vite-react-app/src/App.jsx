import { useState } from "react";
import GameMenu from "./components/tic-tac/GameMenu";
import GameBoard from "./components/tic-tac/GameBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [players, setPlayers] = useState({ playerX: 'Player X', playerO: 'Player O'})

  const handleStartGame = (playerXName, playerOName) => {
    setPlayers({
      playerX: playerXName || 'Player X',
      playerO: playerOName || 'Player O'
    })
    setGameStarted(true);
  }

  return (
    <div className="App min-h-screen bg-gray-100">
      {!gameStarted ? (
        <GameMenu onStartGame ={handleStartGame} />
        ) : (
          <GameBoard
          onReturnToMenu = {() => setGameStarted(false)}
          players={players}
        />
        )}
    </div>
  )
}
export default App;