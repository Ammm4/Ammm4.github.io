import React from 'react';

function Layout3({item}) {
  return (                              
    <div className="education info">
      <h4 className="info-heading">{item.title}</h4>
      {item.higherEducation.map((item,index) => {
        return(
                <div className="education-row" key={index}>
                  <div><u>{item.year}</u></div>
                  <div>
                    <b>{item.university}</b>
                    {item.faculty}
                    <ul className="cv-list">
                      {item.subjects.map((item,index) => {
                        return <li key={index} className="listItem">
                                 <span className="bullet">&#8226;</span>
                                 <p>{item}</p>
                                </li>
                      })}
                    </ul>                              
                  </div>
              </div>
               )
              })}
              {item.displayStyle === 'style3' && 
                <div className="education-row">
                  <div><u>{item.secondaryEducation.year}</u></div>
                  <div>
                    <strong>{item.secondaryEducation.school}</strong>
                    <p>{item.secondaryEducation.p}</p>                           
                  </div>
                </div>
   }
  </div>
 )
  
}


export default Layout3;