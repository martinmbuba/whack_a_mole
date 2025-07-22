// src/components/InstructionBar.js
import React from 'react';

function InstructionBar() {
  return (
    <div style={styles.bar}>
      🛠️ Instructions: Click "Register" to create an account. If you already have one, click "Login" to continue. How to Play: Whack the mole as they pop up randomly as you try to beat the clock
    </div>
  );
}

const styles = {
  bar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
  },
};

export default InstructionBar;

