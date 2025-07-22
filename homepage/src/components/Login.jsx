import React, { useState } from 'react';

function Login() {
  const [characterName, setCharacterName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Character Name: ' + characterName + ', Password: ' + password);
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <div style={styles.inputGroup}>
        <label htmlFor="characterName">Character Name:</label>
        <input
          id="characterName"
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <button style={styles.button} onClick={handleLogin}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Login;

