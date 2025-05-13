import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home';
import ProjectDetails from './components/pages/projectdetail';
import Navbar from './components/ui/navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;