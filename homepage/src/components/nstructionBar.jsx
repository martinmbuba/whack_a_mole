import React from 'react';

function InstructionBar() {
  return (
    <div style={styles.bar}>
      🛠️ Instructions: Click "Register" to create an account. If you already have one, click "Login" to continue.
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
