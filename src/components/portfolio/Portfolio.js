import React from 'react';
import './Portfolio.css';
import img1 from '../images/home1.jpg';
import img2 from '../images/home.jpg';
import img3 from '../images/home2.png';
import img4 from '../images/home3.jpg';


function Portfolio(){
  return (
    <div id="portfolio" className="portfolio">
        <div className="portfolio-heading"><span>MY PROJECTS</span></div>
        <div className="portfolio-content">
             <div className="latest-project tile">
                  <div className="latest tile-text">
                     <h3>CryptoAlert</h3>
                     <a href="#"><i class="fab fa-github"></i> View Code</a>
                  </div> 
             </div>
             <div className="project-1 tile">
                <div className="project tile-text">
                     <h3>myWeather</h3>
                     <a href="#"><i class="fab fa-github"></i> View Code</a>
                </div> 
             </div>
              <div className="project-2 tile">
                <div className="project tile-text">
                     <h3>SpotifyPlay</h3>
                     <a href="#"><i class="fab fa-github"></i> View Code</a>
                </div> 
              </div>
              <div className="project-3 tile">
               <div className="project tile-text">
                     <h3>myToDo</h3>
                     <a href="#"><i class="fab fa-github"></i> View Code</a>
               </div> 
             </div>
             <div className="project-4 tile">
                <div className="project tile-text">
                     <h3>LightPlate</h3>
                     <p>Work In Progress..</p>
                </div>
             </div>
             
        </div>
    </div>
  )
}

export default Portfolio;