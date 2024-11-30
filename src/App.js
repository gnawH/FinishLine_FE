import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro';
import Login from './pages/login';
import Policy from './pages/policy';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
