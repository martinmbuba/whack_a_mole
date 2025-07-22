import React from 'react';

function Login() {
  const handleLoginClick = () => {
    alert('Navigate to login page (coming soon)');
  };

  return (
    <button onClick={handleLoginClick} style={styles.button}>
      Login
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
