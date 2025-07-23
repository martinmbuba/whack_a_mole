import { useEffect, useState } from "react";
import "../App.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Only run mole movement if game is not over
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = new Array(9).fill(false);
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000);

    return () => clearInterval(interval);
  }, [moles.length, gameOver]);

  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      setMoles(new Array(9).fill(false)); // Hide all moles
      return;
    }
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer]);

  const handleMoleClick = (index) => {
    if (moles[index] && !gameOver) {
      setScore((prev) => prev + 20);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  // Reset game state
  const handlePlayAgain = () => {
    setScore(0);
    setTimer(30);
    setGameOver(false);
    setMoles(new Array(9).fill(false));
  };

  return (
    <>
      <div style={{
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '8px 12px',
        backgroundColor: '#d3d3d3',
        borderRadius: '8px',
        position: 'relative',
        display: 'inline-block',
        marginBottom: '10px',
        color: '#333',
        userSelect: 'none'
      }}>
        Time Left: {timer} seconds
      </div>
      <div style={{
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '8px 12px',
        backgroundColor: '#ffd700',
        borderRadius: '8px',
        position: 'relative',
        display: 'inline-block',
        marginBottom: '10px',
        color: '#333',
        userSelect: 'none',
        marginLeft: '20px'
      }}>
        Score: {score}
      </div>
      <div className="grid" style={{ position: 'relative' }}>
        {moles.map((isMole, index) => (
          <img
            key={index}
            src={isMole ? mole : Hole}
            alt={isMole ? "Mole" : "Hole"}
            style={{ cursor: isMole ? 'pointer' : 'default' }}
            onClick={() => handleMoleClick(index)}
          />
        ))}
      </div>
      {gameOver && (
        <div style={{
          position: 'fixed',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 0, 0, 0.85)',
          color: 'white',
          padding: '20px 40px',
          fontSize: '36px',
          fontWeight: 'bold',
          borderRadius: '12px',
          zIndex: 1000,
          userSelect: 'none',
          boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.7)',
          textAlign: 'center'
        }}>
          GAME OVER!
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handlePlayAgain}
              style={{
                fontSize: '20px',
                padding: '10px 24px',
                backgroundColor: '#ffd700',
                color: '#333',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
