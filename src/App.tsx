import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return ( 
    <div className="container_all">

          <NavBar/>
          <Home />
          <About />
          <Skills />
          <Projects/>
    </div>

  
  );
}

export default App;
