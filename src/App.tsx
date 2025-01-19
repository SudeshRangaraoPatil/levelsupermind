import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BirthDetails from './pages/BirthDetails';
import BirthChart from './pages/BirthChart';
import Recommendations from './pages/Recommendations';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birth-details" element={<BirthDetails />} />
        <Route path="/birth-chart" element={<BirthChart />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;