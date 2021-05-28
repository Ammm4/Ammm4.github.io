
import React from 'react';
import './App.css';

//Import Components
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import CV from './components/cv/cv.js';
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
      clicked: false,
      selectedProject: ""
    }
    this.showHideCv = this.showHideCv.bind(this);
    this.showNavItems = this.showNavItems.bind(this);
    this.showHideNavBar = this.showHideNavBar.bind(this);
    this.handleTouchOutside = this.handleTouchOutside.bind(this);
    this.showOverlay = this.showOverlay.bind(this);
    
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
  
  handleTouchOutside(event) {
    if(!event.target.classList.contains('tile-item')){
      console.log(event.target);
      this.setState({selectedProject: ""})
    }
  }
  
  showOverlay(projectNumber) {
    this.setState({selectedProject: projectNumber})
  }

  componentDidMount(){
    window.addEventListener('scroll', this.showHideNavBar);
    document.addEventListener('touchstart', this.handleTouchOutside) 
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.showHideNavBar);
    document.removeEventListener('touchstart', this.handleTouchOutside)
  }

  render() {
    return (
        <div className="App">
            {this.state.showNavBar && <Nav showNavItems={this.showNavItems} clicked={this.state.clicked}  />}
            <Home showHideCv={this.showHideCv}/>
            {this.state.showHideCv && <CV showHideCv={this.showHideCv} />}
            <Portfolio selectedProject={this.state.selectedProject} showOverlay={this.showOverlay} />
            <Skills />
            <Contact />
            <Socket />
    </div>
    )
  }
}

export default App;
