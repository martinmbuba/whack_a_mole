import React from 'react';

function Game() {
  return (
    <div style={styles.container}>
      <h2>Game Page</h2>
      <p>The game will be here soon...</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
};

export default Game;
