import React from 'react';
import {linkList} from './linkList';

import'./Home.css';
class Home extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    this.props.showHideCv();
  }
  componentDidMount(){
    document.querySelector('.aboutList .cv-link').addEventListener('click', this.handleClick)
  }
  render(){
    return(
    <div id="home" className="home">
        <div className="home-cover">
            <div className="home-banner">
                 <div className="home-banner-content">
                   <div>HELLO!</div>
                   <p>I'M AMIT!</p> 
                   <div className="divide-line"></div>
                   <div className="jobs">Front-end Developer</div>
                 </div>
            </div>
            <div className="home-about">
            <p className="">More About me...</p>
              <ul className="aboutList">
                {linkList.map((element,index) => {
                        return(
                              <li key={index}>
                                  <a href={element.url} target="_blank" title={element.title} className={element.cName}>
                                    <span className="fa-stack">
                                      <i className="fas fa-circle fa-stack-2x"></i>
                                      <i className={element.clName}></i>
                                    </span>
                                  </a>
                              </li>
                        )
                })}
              </ul>
            </div>            
        </div>
    </div>
  )
  }
}


export default Home;