import React from 'react';

import './Skills.css';

function Skills() {
   return(
     <div id="skills" className="skills">
       <div className="skills-heading">MY SKILLS</div>
          <div className="skills-content">
                       <div className="skillBox">
                                        <div className='flip-front'>
                                          <div className="flip-front-inner">
                                              <div className="mt-4 mb-4"> <i className=" fas fa-code fa-4x"></i></div>
                                              <h3 className="heading3 dem1">WEB BASICS</h3>
                                           </div>
                                          </div>
                                          <div className="flip-back">                           
                                                  <ul className="list-group flip-back-inner">
                                                      <li>Html</li>
                                                      <li>Css</li>
                                                      <li>Javascript</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        <div className="skillBox">
                                        
                                          <div>
                                              <div> <i className="fab fa-react fa-4x"></i></div>
                                              <h3>FRAMEWORKS</h3>
                                           </div>
                        
                                          <div>                           
                                                  <ul>
                                                      <li>Html</li>
                                                      <li>Css</li>
                                                      <li>Javascript</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        <div className="skillBox">
                                        <div className='flip-front'>
                                          <div className="flip-front-inner">
                                              <div className="mt-4 mb-4"> <i className=" fas fa-database fa-4x"></i></div>
                                              <h3 className="heading3 dem1">DATABASE & TOOLS</h3>
                                           </div>
                                          </div>
                                          <div className="flip-back">                           
                                                  <ul className="list-group flip-back-inner">
                                                      <li>Html</li>
                                                      <li>Css</li>
                                                      <li>Javascript</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                </div>
        </div>
   )
}

export default Skills;