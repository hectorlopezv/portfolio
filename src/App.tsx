import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return ( 
    <>
    <NavBar/>
    <Home />
    <About />
    <Projects/>
    </>
  
  );
}

export default App;
