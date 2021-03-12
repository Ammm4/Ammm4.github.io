import React from 'react';
import img1 from '../images/home-section/img1.png';
import img2 from '../images/home-section/img2.png';
import img3 from '../images/home-section/img3.png';
import img4 from '../images/home-section/img4.png';

import'./Home.css';
class Home extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    this.props.showHideCv();
  }
  render(){
    return(
    <div id="home" className="home">
        <div className="home-cover">
            <div className="home-banner">
                 <div className="home-banner-content">
                   <div>HELLO!</div>
                   <p>I'M AMIT!</p> 
                   <div className="divide-line"></div>
                   <div className="jobs">Front-end Developer</div>
                 </div>
            </div>
            <div className="home-about">
            <p className="">More About me...</p>
              <ul className="aboutList">
                  <li><a href='#' title="Download CV" onClick={this.handleClick}>
                    <span className="fa-stack fa-1x">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i className="fas fa-file-download fa-stack-1x fa-inverse icon-color"></i>
                    </span>
                    </a>
                    </li>
                  <li><a href="https://github.com/Ammm4" target="_blank" title="Github">
                     <span className="fa-stack">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i className="fab fa-github fa-stack-1x fa-inverse icon-color"></i>
                     </span>
                     </a>
                    </li>
                  <li><a href="#" title="Linkedin">
                      <span className="fa-stack">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse icon-color"></i>
                        </span>
                    </a></li>
                  <li><a href="#" title="Facebook">
                  <span className="fa-stack">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i className="fab fa-facebook-f fa-stack-1x fa-inverse icon-color"></i>
                    </span>
                    </a></li>
                  
              </ul>
            </div>
            
        </div>
    </div>
  )
  }
}



export default Home;