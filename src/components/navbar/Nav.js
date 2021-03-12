import React from 'react';
import {NavItems} from './NavItems';
import './Nav.css';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
      this.props.showNavItems();
    }
  render() {
    // 
    return (
      <div className={this.props.clicked? "navbar navbar-toggle":"navbar"}>
          <div className="brand"><a href="#home">ar.</a></div>
          <div className={this.props.clicked? 'fas fa-times':'fas fa-bars'} onClick={this.handleClick}></div>
          <div className={this.props.clicked? 'nav nav-toggle':'nav'}>
            <ul className="navlist">          
                 {NavItems.map((item, index) => {
                   return (
                          <li key={index}>
                            <a href={item.url}>
                              {item.title}
                            </a>
                          </li>
                   )                 
                 })}
            </ul>
          </div>

    </div>
  )

    
  }
}

export default Nav;