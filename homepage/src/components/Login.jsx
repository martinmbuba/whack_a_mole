import React from 'react';

function Login() {
  const handleLogin = () => {
    alert('Logged in!');
    // Optional: navigate to /game after login
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <button style={styles.button} onClick={handleLogin}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Login;

