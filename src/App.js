
import './App.css';

//Import Components
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Socket from './components/socket/Socket';
function App() {
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
}

export default App;
