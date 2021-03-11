import React from 'react';

import './Skills.css';

function Skills() {
   return(
     <div id="skills" className="skills">
       <div className="skills-heading">MY SKILLS</div>
          <div className="skills-content">
                       <div className="skillBox">                                   
                                          <div>           
                                              <h3>WEB BASICS</h3>
                                              <div className="hr-line"></div>                                
                                          </div>
                                          <div>                           
                                                  <ul className="skillset">
                                                      <li>HTML</li>
                                                      <li>CSS</li>
                                                      <li>JAVASCRIPT</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        <div className="skillBox">                                
                                          <div>
                                             <h3>FRAMEWORKS</h3>
                                              <div className="hr-line"></div>
                                           </div>                  
                                          <div>                           
                                                  <ul className="skillset">
                                                      <li>REACT</li>
                                                      <li>BOOTSTRAP</li>
                                                      <li>REDUX</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        <div className="skillBox">                
                                          <div>                            
                                              <h3>BACKEND</h3>
                                              <div className="hr-line"></div>
                                           </div>
                        
                                          <div>                           
                                                  <ul className="skillset">
                                                      <li>NODEJS</li>
                                                      <li>EXPRESS</li>
                                                      <li>MONGODB</li>   
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        <div className="skillBox">
                                        
                                          <div>
                                              <h3 className="heading3 dem1">TOOLS</h3>
                                              <div className="hr-line"></div>
                                           </div>
                                          
                                          <div>                           
                                                  <ul className="skillset">                                                   
                                                      <li>GIT & GITHUB</li>
                                                      <li>VS CODE</li>
                                                      <li>BROWSER TOOLS</li>
                                                  </ul>                                        
                                          </div>                                              
                        </div>
                        
                </div>
        </div>
   )
}

export default Skills;