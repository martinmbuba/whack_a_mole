import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import Hole from '../assets/Hole.jpeg';
import mole from '../assets/mole.png';
import whackMusic from '../assets/whack.mp3';
import Hammer from './Hammer';

function Game() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [hammerPos, setHammerPos] = useState({ x: 0, y: 0 });
  const [showHammer, setShowHammer] = useState(false);

  const navigate = useNavigate();
  const audioRef = useRef(null);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      gameOver ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [gameOver]);

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

  const handleMoleClick = (index, e) => {
    triggerHammer(e);

    if (moles[index] && !gameOver) {
      setScore(prev => prev + 20);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  const triggerHammer = (e) => {
    const rect = gameContainerRef.current.getBoundingClientRect();
    setHammerPos({
      x: e.clientX - rect.left - 32.5, // center for 65px hammer
      y: e.clientY - rect.top - 32.5,
    });

    setShowHammer(true);
    setTimeout(() => setShowHammer(false), 400); // Show hammer longer
  };

  const handlePlayAgain = () => {
    setScore(0);
    setTimer(30);
    setGameOver(false);
    setMoles(new Array(9).fill(false));
  };

  return (
    <div className="game-container" ref={gameContainerRef} style={{ position: 'relative' }}>
      <audio ref={audioRef} src={whackMusic} loop autoPlay />

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
            onClick={(e) => handleMoleClick(index, e)}
          />
        ))}
      </div>

      {gameOver && (
        <div className="game-over-modal">
          GAME OVER!
          <div>
            <button onClick={handlePlayAgain}>Play Again</button>
            <button onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>Home</button>
          </div>
        </div>
      )}

      <Hammer show={showHammer} x={hammerPos.x} y={hammerPos.y} />
    </div>
  );
}

export default Game;
