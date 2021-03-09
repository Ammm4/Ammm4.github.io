import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
      this.props.showNav();
    }
  render() {
    return (
      <div className="navbar">
          <div className="brand"><a href="#home">ar.</a></div>
          <div className="fas fa-bars" onClick={this.handleClick}></div>
          <div className="nav">
            <ul className="navlist">
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

    </div>
  )

    
  }
}




/* function Nav (){
  return(
    <div className="navbar">
      <div className="brand">1A.R</div>
      <div className="fas fa-bars"></div>
      <div className="nav">
        <ul className="navlist">
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>

    </div>
  )
} */

export default Nav;