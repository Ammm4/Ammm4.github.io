import React from 'react';
import {cvSections} from './cvSections';
import './cv.css';

class CV extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.showHideCv();
    }
    render(){
        return(
            <div id="modal" className="modal">
            <div className="modal-content">
                <div className="modal-heading">
                    <h3>AMIT RANA</h3>
                    <button onClick={this.handleClick}>&times;</button>
              </div>
              <div className="modal-body">
                  <div className="contact-info info">
                        <p>65 Fields Road, Oakfield, Cwmbran NP44 3EG</p>
                        <p>Mobile no: 07780335313</p>
                        <p><u>Email: ammm.4amit@gmail.com</u></p>
                  </div>         
                    {
                        cvSections.map((item,index) => {
                           if(item.displayStyle === 'style1') {
                               return (                              
                                        <div className="info" key={index}>
                                          <h4 className="info-heading">{item.title}</h4>
                                           {item.p.map((item,index) => {
                                                return <p key={index}>{item}</p>
                                           })}
                                        </div>
                                     )
                           } else if(item.displayStyle === 'style2') {
                               return (
                                          <div className="info">
                                             <h4 className="info-heading">{item.title}</h4>
                                                <ul className="cv-list">
                                                    {item.listItems.map((item, index) => {
                                                        return <li className="listItem" key={index}><span className="bullet">&#8226;</span> {item}</li>
                                                    })
                                                   }
                                                </ul>
                                         </div>
                                    )
                           } else {
                               return (
                                     <div className="education info">
                                        <h4 className="info-heading">{item.title}</h4>
                                        {item.higherEducation.map((item,index) => {
                                            return(
                                                <div className="education-row" key={index}>
                                                    <div><u>{item.year}</u></div>
                                                    <div><b>{item.university}</b> {item.faculty}
                                                         <ul className="cv-list">
                                                            {item.subjects.map((item,index) => {
                                                                return <li key={index} className="listItem"><span className="bullet">&#8226;</span> <p>{item}</p></li>
                                                            })}
                                                         </ul>                              
                                                    </div>
                                                </div>
                                            )
                                        })}
                                       <div className="education-row">
                                            <div><u>{item.secondaryEducation.year}</u></div>
                                                <div><strong>{item.secondaryEducation.school}</strong>
                                                    <p>{item.secondaryEducation.p}</p>                           
                                                </div>
                                            </div>
                                     </div>
                                 
                               )
                           }

                    })
                    }                      
             </div>
              <div className="modal-ending">
                  <button onClick={this.handleClick}>Close</button>
              </div>
        </div>
    
        </div>
        )
    }
   
}

export default CV;