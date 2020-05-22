import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar> </Navbar>
        {/* add exact path */}
        <Route exact path = "/home" component = { Home }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/skills" component = { Skills }/>
        <Route path = "/projects" component = { Projects }/>
        <Route path = "/contact" component = { Contact }/>
      </div>
    </Router>
  );
}

export default App;
