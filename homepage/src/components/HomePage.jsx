import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionBar from './InstructionBar';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <InstructionBar />
      <div className="homepage-content">
        <h1>Welcome to Whack-a-Mole</h1>
        <div className="homepage-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/game')}>Play Game</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
