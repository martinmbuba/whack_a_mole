import { useEffect, useState } from "react";
import "../App.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = new Array(9).fill(false); // Only show 1 mole at a time
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1);

    return () => clearInterval(interval); // cleanup
  }, [moles.length]);

  useEffect(() => {
    if (timer <= 0) return;
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
        Time: {timer} s
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
    </>
  );
}

export default Game;
