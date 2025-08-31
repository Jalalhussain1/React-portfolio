import React from 'react';
import Navbar from './component/Navbar';
import SocialSidebar from './component/SocialSidebar';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSidebar />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;

