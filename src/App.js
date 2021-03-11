
import React from 'react';
import './App.css';

//Import Components
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import CV from './components/cv/cv.js';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Socket from './components/socket/Socket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lastScrollPosition: document.body.scrollTop || document.documentElement.scrollTop,
      showHideCv: false,
      showNavBar: true,
      clicked: false
    }
    this.showHideCv = this.showHideCv.bind(this);
    this.showNavItems = this.showNavItems.bind(this);
    this.showHideNavBar = this.showHideNavBar.bind(this);
    
  }
  showHideCv(){
    this.setState({showHideCv: !this.state.showHideCv})
  }
  
  showNavItems(){
    this.setState({clicked: !this.state.clicked})
  }
  
  showHideNavBar(){
    this.setState({clicked: false})
    var currentScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
      if(this.state.lastScrollPosition > currentScrollPosition){
        this.setState({showNavBar: true})   
      } else {
        this.setState({showNavBar: false})
      }
      this.setState({lastScrollPosition: currentScrollPosition});
      
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.showHideNavBar) 
  }

  render() {
    return (
        <div className="App">
            {this.state.showNavBar && <Nav showNavItems={this.showNavItems} clicked={this.state.clicked}  />}
            <Home showHideCv={this.showHideCv}/>
            {this.state.showHideCv && <CV showHideCv={this.showHideCv} />}
            <Portfolio />
            <Skills />
            <Contact />
            <Socket />
    </div>
    )
  }
}

export default App;
