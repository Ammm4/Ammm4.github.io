import React from 'react';
import './Nav.css';

function Nav (){
  return(
    <div className="navbar">
      <div className="brand">1A.R</div>
      <div className="nav">
        <ul className="navlist">
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Nav;