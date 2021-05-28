import React from 'react';
import {ProjectList} from './ProjectList';
import './Portfolio.css';
 
function Portfolio(props){
  return (
    <div id="portfolio" className="portfolio">
        <div className="cubes"><span><i className="fas fa-cubes fa-2x"></i></span></div>
        <div className="portfolio-heading"><span>MY PROJECTS</span></div>
        <div className="portfolio-content">        
                         {
                              ProjectList.map((project,index) => {
                                   return (
                                        <div className={project.clName} onTouchStart={() => props.showOverlay(project.num)} key={index}>             
                                           <div className="tile-overlay tile-item">
                                              <div className={props.selectedProject === project.num? "overlay-inner tile-item show":"overlay-inner tile-item" }>
                                                  <div className="angle1 tile-item"></div>
                                                  <div className="tile-text tile-item">
                                                       <h3 className="tile-item">{project.title}</h3>
                                                       <a href={project.url}><i className="fab fa-github tile-item"></i></a> 
                                                       <a href={project.url1} target="_blank" rel="noopener noreferrer"><i className="fab fa-firefox-browser"></i></a>
                                                  </div>
                                             <div className="angle2 tile-item"></div>
                                        </div>
                                  </div>
                               </div>
                                   )                                
                              })
                         }                             
        </div>
        <div className="closing-line"></div>
    </div>
  )
}

export default Portfolio;

