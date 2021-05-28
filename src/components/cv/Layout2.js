import React from 'react';

function Layout2({item}){
  return (                              
    <div className="info">
      <h4 className="info-heading">{item.title}</h4>               
       <ul className="cv-list">
          {item.listItems.map((item,index) => {
            return (<li key={index} className="listItem">
                      <span className="bullet">&#8226;</span> 
                      <div><b>{item[0]}</b>{item[1]} <p><a href={item[2]}>CodeLink</a> <a href={item[3]}>WebLink</a></p></div>
                      
                    </li>)
                  })}               
      </ul>   
   
    </div>
 ) 
}

export default Layout2;