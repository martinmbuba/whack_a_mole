import React, { useState } from 'react';

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    onRegister(); // navigate to login
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Your Character</h2>
      <input placeholder="Character Name" required value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

