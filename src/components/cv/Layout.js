import React from 'react';

function Layout({item}){
  return (                              
    <div className="info">
      <h4 className="info-heading">{item.title}</h4>
       {item.p.map((item,index) => {
            return <p key={index}>{item}</p>
       })}
    </div>
 ) 
}

export default Layout;