import React from 'react';
import InstructionBar from './nstructionBar';
import Login from './Login';
import Register from './Register';

function HomePage() {
  return (
    <div style={styles.container}>
      <InstructionBar />
      <h1>Welcome to Whack-a-Mole</h1>
    
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },

};

export default HomePage;
