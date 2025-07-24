import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import Menu from './pages/Menu/Menu.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Menu />
            <About />
            <Contact />
          </>
        } />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
