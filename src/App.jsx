import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './component/Navbar'; // Adjust the path if necessary
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work'
import Contact from './component/Contact';
import Skills from './component/Skills';

function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      <About />
      <Skills />
      <Work />
      <Contact />

      {/* Add other components here */}
    </div>
  );
}

export default App;

