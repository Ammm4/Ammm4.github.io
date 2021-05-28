import React from 'react';
import Layout from './Layout';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4'
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
                  <Layout item={cvSections[0]}/>
                  <Layout1 item={cvSections[2]}/>
                  <Layout2 item={cvSections[4]} />  
                  <Layout3 item={cvSections[3]} /> 
                  <Layout3 item={cvSections[5]} />
                  <Layout4 item={cvSections[6]}/>
                  <Layout4 item={cvSections[7]} />
                  <Layout item={cvSections[8]} />
                                      
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