import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
