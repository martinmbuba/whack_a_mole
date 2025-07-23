import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [characterName, setCharacterName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!characterName || !password) {
      alert('Please enter both character name and password.');
      return;
    }
    // Check stored user credentials
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('No registered user found. Please register first.');
      return;
    }
    const user = JSON.parse(storedUser);
    if (user.name === characterName && user.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setLoggedInUser(user);
      alert('Logged in successfully!');
      navigate('/game');
    } else {
      alert('Invalid character name or password.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      {loggedInUser ? (
        <div>
          <p>Welcome back, {loggedInUser.name}!</p>
          <button style={styles.button} onClick={() => navigate('/game')}>Go to Game</button>
          <button style={styles.button} onClick={handleBack}>Back</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Character Name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.button}>Login</button>
            <button type="button" style={styles.button} onClick={handleBack}>Back</button>
          </div>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '250px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
export default Login;