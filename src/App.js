import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Adventure from './components/Adventure';
import Treasures from './components/Treasures';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Hero/>
      <About/>
      <Adventure/>
      <Treasures/>
      <Footer/>
    </div>
  );
}

export default App;
