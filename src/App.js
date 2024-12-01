import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro';
import Login from './pages/login';
import Policy from './pages/policy';
import Register from './pages/register';
import CompleteLecture from './pages/completeLecture';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeLecture" element={<CompleteLecture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
