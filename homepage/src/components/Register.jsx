import React from 'react';

function Register() {
  const handleRegisterClick = () => {
    alert('Navigate to registration page (coming soon)');
  };

  return (
    <button onClick={handleRegisterClick} style={styles.button}>
      Register
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

export default Register;
