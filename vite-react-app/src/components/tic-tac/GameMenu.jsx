import { useState } from "react";
import PropTypes from "prop-types";

const GameMenu = ({onStartGame}) => {
    const [playerXName, setPlayerXName] = useState('')
    const [playerOName, setPlayerOName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onStartGame(playerXName, playerOName);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Tic Tac Toe</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="PlayerX" className="block text-gray-700 font-medium">
                            Player X name:
                        </label>
                            <input
                            id="playerX"
                            type="text"
                            value={playerXName}
                            onChange={(e) => setPlayerXName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter name for Player X"
                            maxLength= "12"
                            />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="PlayerO" className="block text-gray-700 font-medium">
                            Player O name:
                        </label>
                            <input
                            id="playerO"
                            type="text"
                            value={playerOName}
                            onChange={(e) => setPlayerOName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter name for Player O"
                            maxLength= "12"
                        />
                    </div>

                    <button type="submit"className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg">
                        Start Game 
                    </button>
                </form>
            </div>
        </div>
    )
}
GameMenu.propTypes = {
    onStartGame: PropTypes.func.isRequired,
};

export default GameMenu;