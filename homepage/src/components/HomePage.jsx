import React from 'react';
import InstructionBar from './InstructionBar';
import Login from './Login';
import Register from './Register';

function HomePage() {
  return (
    <div style={styles.container}>
      <InstructionBar />
      <h1>Welcome to Whack-a-Mole</h1>
      <div style={styles.buttons}>
        <Login />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default HomePage;

