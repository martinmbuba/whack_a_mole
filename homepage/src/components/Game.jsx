import { useEffect, useState } from "react";
import "../App.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = new Array(9).fill(false); // Only show 1 mole at a time
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [moles.length]);

  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      return;
    }
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer]);

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
      <div className="grid" style={{ position: 'relative' }}>
        {moles.map((isMole, index) => (
          <img
            key={index}
            src={isMole ? mole : Hole}
            alt={isMole ? "Mole" : "Hole"}
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
          boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.7)'
        }}>
          GAME OVER!
        </div>
      )}
    </>
  );
}

export default Game;
