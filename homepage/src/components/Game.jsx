import { useEffect, useState } from "react";
import "../App.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = new Array(9).fill(false); // Only show 1 mole at a time
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1);

    return () => clearInterval(interval); // cleanup
  }, [moles.length]);

  return (
    <div className="grid">
      {moles.map((isMole, index) => (
        <img
          key={index}
          src={isMole ? mole : Hole}
          alt={isMole ? "Mole" : "Hole"}
        />
      ))}
    </div>
  );
}

export default Game;
