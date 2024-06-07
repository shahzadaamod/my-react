// src/App.js
import React from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/index';
import About from './pages/Home/About';
import ServiceCategory from './pages/ServiceCategory';
import Blog from './pages/Home/Blog';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-category" element={<ServiceCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      </Router>
      </div>
      </div>

 
  );
}


export default App;