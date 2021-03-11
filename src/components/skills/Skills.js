import React from 'react';
import {SkillSet}from './SkillSet';
import './Skills.css';

function Skills() {
   return(
     <div id="skills" className="skills">
       <div className="skills-heading">MY SKILLS</div>
          <div className="skills-content">
                     
                      { SkillSet.map((item,index) => {
                           return (
                               <div className="skillBox" key={index}>                                   
                                          <div>           
                                              <h3>{item.title}</h3>
                                              <div className="hr-line"></div>                                
                                          </div>
                                          <div>                           
                                                  <ul className="skillset">
                                                      <li>{item.skill[0]}</li>
                                                      <li>{item.skill[1]}</li>
                                                      <li>{item.skill[2]}</li>
                                                  </ul>                                        
                                          </div>                                              
                              </div>
                           )
                       })
                     }          
                      
                        
                </div>
        </div>
   )
}

export default Skills;