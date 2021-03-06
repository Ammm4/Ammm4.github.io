import React from 'react';
import './Portfolio.css';
import img1 from '../images/home1.jpg';
import img2 from '../images/home.jpg';
import img3 from '../images/home2.png';
import img4 from '../images/home3.jpg';


function Portfolio(){
  return (
    <div className="portfolio">
        <div className="portfolio-heading"><span>MY PROJECTS</span></div>
        <div className="portfolio-content">
             <div className="latest-project">
                  <div className="latest"></div> 
             </div>
             <div className="project-1">
                <div className="project"></div> 
             </div>
              <div className="project-2">
                <div className="project"></div> 
              </div>
              <div className="project-3">
               <div className="project"></div> 
             </div>
             <div className="project-4">
                <div className="project"></div>
             </div>
             
        </div>
    </div>
  )
}

export default Portfolio;