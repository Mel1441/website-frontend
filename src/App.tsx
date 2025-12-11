import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Investigatsby from './pages/subpages/investigatsby';
import LoginForm from './pages/subpages/Login';
import Dashboard from './pages/subpages/Dashboard';
import LearnerProfile from './pages/subpages/LearnerProfile'
import PumpProject from './pages/subpages/pump-project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/subpages/investigatsby" element={<Investigatsby />} />
        <Route path="pages/subpages/pump-project" element={<PumpProject />} />
        <Route path="/school/profile" element={<LearnerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
