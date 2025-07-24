import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setPlayerName(user.name);
    } else {
      alert('You must be logged in to play!');
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = new Array(9).fill(false);
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      setMoles(new Array(9).fill(false));
      return;
    }
    const timerId = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer]);

  const handleMoleClick = (index) => {
    if (moles[index] && !gameOver) {
      setScore(prev => prev + 20);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setTimer(30);
    setGameOver(false);
    setMoles(new Array(9).fill(false));
  };

  return (
    <div className="game-container">
      {/* 🎮 Player info centered with black background and neon green text */}
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '12px',
        backgroundColor: '#111',
        color: '#00ff90',
        padding: '10px 14px',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0, 255, 100, 0.5)',
        display: 'inline-block',
        marginBottom: '10px',
        marginTop: '10px'
      }}>
        🎮 Player: {playerName}
      </div>

      <div className="status-bar">
        <div className="timer">⏳ Time Left: {timer}s</div>
        <div className="score">🏆 Score: {score}</div>
      </div>

      <div className="grid">
        {moles.map((isMole, index) => (
          <img
            key={index}
            src={isMole ? mole : Hole}
            alt={isMole ? "Mole" : "Hole"}
            className="grid-cell"
            onClick={() => handleMoleClick(index)}
          />
        ))}
      </div>
      
      {gameOver && (
        <div className="game-over-modal">
          GAME OVER!
          <div>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
