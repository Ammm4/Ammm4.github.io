import React from 'react';
import {ProjectList} from './ProjectList';
import './Portfolio.css';


function Portfolio(){
  return (
    <div id="portfolio" className="portfolio">
        <div className="cubes"><span><i className="fas fa-cubes fa-2x"></i></span></div>
        <div className="portfolio-heading"><span>MY PROJECTS</span></div>
        <div className="portfolio-content">
             
               {ProjectList.map((project,index) => {
                    return(
                         <div className={project.clName} key={index}>
                                   <div className="tile-text">
                                        <h3>{project.title}</h3>
                                        <a href={project.url}><i className="fab fa-github"></i> View Code</a>
                                   </div> 
                         </div>
                    )
               })}                
        </div>
        <div className="closing-line"></div>
    </div>
  )
}

export default Portfolio;