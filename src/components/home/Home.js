import React from 'react';
import img1 from '../images/home-section/img1.png';
import img2 from '../images/home-section/img2.png';
import img3 from '../images/home-section/img3.png';
import img4 from '../images/home-section/img4.png';

import'./Home.css';



function Home() {
  return(
    <div id="home" className="home">
        <div className="home-cover">
            <div class="home-banner">
                 <div class="home-banner-content">
                   <div>HELLO!</div>
                   <p>I'M AMIT!</p> 
                   <div class="divide-line"></div>
                   <div class="jobs">Front-end Developer</div>
                 </div>
            </div>
            <div className="home-about">
            <p className="">More About me...</p>
              <ul className="aboutList">
                  <li><a href="#" title="Download CV">
                    <span className="fa-stack">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i class="fas fa-file-download fa-stack-1x fa-inverse icon-color"></i>
                    </span>
                    </a>
                    </li>
                  <li><a href="#" title="Github">
                  <span className="fa-stack">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i class="fab fa-github fa-stack-1x fa-inverse icon-color"></i>
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
                  <span className="fa-stack ">
                       <i className="fas fa-circle fa-stack-2x"></i>
                       <i class="fab fa-facebook-f fa-stack-1x fa-inverse icon-color"></i>
                    </span>
                    </a></li>
                  
              </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Home;