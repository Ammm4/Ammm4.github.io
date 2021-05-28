import React from 'react';

function Layout4({item}) {
  return (<div className="info">
    <h4 className="info-heading">{item.title}</h4>
     <ul className="cv-list">
         {item.listItems.map((item, index) => {
             return <li className="listItem" key={index}><span className="bullet">&#8226;</span> {item}</li>
         })
        }
     </ul>
</div>)
}


export default Layout4;