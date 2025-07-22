import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Game from './Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register onRegister={() => window.location.href = "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;