import React from 'react';
import InstructionBar from './InstructionBar';
import Login from './Login';
import Register from './Register';
import Game from './Game';

function HomePage() {
  return (
    <div style={styles.page}>
      {/* <InstructionBar /> */}
      <div style={styles.container}>
         <InstructionBar />
        <h1>Welcome to Whack-a-Mole</h1>
        <div style={styles.buttonGroup}>
          <Login />
          <Register />
          <button style={styles.playButton}>Play Game</button>
        </div>
        <div style={styles.gameContainer}>
          <Game />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    marginLeft:'450px',
    display: 'flex',
    justifyContent: 'center',
    padding: '60px',
  },
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    marginLeft: '120px',
    marginRight: 'auto',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  playButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  gameContainer: {
    marginTop: '40px',
  },
};

export default HomePage;
