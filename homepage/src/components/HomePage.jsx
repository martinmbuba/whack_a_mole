import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionBar from './InstructionBar';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <InstructionBar />
        <h1>Welcome to Whack-a-Mole</h1>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => navigate('/login')}>Login</button>
          <button style={styles.button} onClick={() => navigate('/register')}>Register</button>
          <button style={styles.button} onClick={() => navigate('/game')}>Play Game</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '600px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default HomePage;
