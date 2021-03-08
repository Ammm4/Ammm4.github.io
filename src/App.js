
import React from 'react';
import './App.css';

//Import Components
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Socket from './components/socket/Socket';

class App extends React.Component {
  constructor() {
    super();
    this.showNav = this.showNav.bind(this);
  }
  showNav() {
    document.querySelector('.navbar .fa-bars').classList.toggle('fa-times');
    document.querySelector('.navbar .nav').classList.toggle('nav-toggle');
  }
  render() {
    return (
        <div className="App">
            <Nav showNav={this.showNav} />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
            <Socket />
    </div>
    )
  }
}



/* function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
     <About />
     <Portfolio />
     <Skills />
     <Contact />
     <Socket />
    </div>
  );
} */

export default App;
