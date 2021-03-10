import React from 'react';
import './cv.css'

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
            <div id="modal" class="modal">
            <div class="modal-content">
                <div class="modal-heading">
                    <h3>AMIT RANA</h3>
                    <button onClick={this.handleClick}>&times;</button>
              </div>
              <div class="modal-body">
                  <div class="contact-info info">
                        <p>65 Fields Road, Oakfield, Cwmbran NP44 3EG</p>
                        <p>Mobile no: 07780335313</p>
                        <p><u>Email: ammm.4amit@gmail.com</u></p>
                  </div>
                  <div class="info">
                        <h4 class="info-heading">PERSONAL PROFILE</h4>
                        <p>I am highly proficient in Python programming language and designing embedded systems. I am also hardworking, enthusiastic, and entrepreneurial by nature. I am looking to develop a career in a technological company where I can start at entry level, help the company to achieve continuous successes while also improving myself and establishing a long relationship with the company.</p>
                  </div>
                  <div class="info">
                        <h4 class="info-heading">TECHNOLOGICAL SUMMARY</h4>
                        <ul class="cv-list">
                            <li>Highly proficient in Python, Matlab, C, and parallel programming in MPI and OpenMP</li>
                            <li>Experienced in working with Linux OS via programming in Raspberry Pi, personal computer and through the usage of Southampton University's Linux cluster (Lyceum)</li>
                            <li>Familiar with programming an Arduino (embedded system); used it successfully to create a custom radiosonde to carry out atmospheric research</li>
                            <li>Currently learning about web development (HTML, CSS, Javascript, PHP and jQuery) and Cyber Security through an online course</li>
                        </ul>
                  </div>
                  <div class="education info">
                        <h4 class="info-heading">EDUCATION</h4>
                        <div class="education-row">
                            <div><u>2015-2016</u></div>
                            <div><strong>University of South Wales:</strong> Msc. Mechanical Engineering
                                    <ul class="cv-list">
                                        <li>Design course accredited by RICS</li>
                                        <li>Surveying, building, and place design</li>
                                        <li>Architectural drafting </li>
                                        <li>CAD and graphical software: Revit, AutoCAD, SketchUP, ArcGIS, Photoshop, Adobe Creative Suite</li>
                                    </ul>                              
                            </div>
                        </div>
                        <div class="education-row">
                                <div><u>2013-2014</u></div>
                                    <div><strong>University of Wales, Newport</strong>: BEng Mechanical Engineering
                                        <ul class="cv-list">
                                            <li>Design course accredited by RICS</li>
                                            <li>Surveying, building, and place design</li>
                                            <li>Architectural drafting </li>
                                            <li>CAD and graphical software: Revit, AutoCAD, SketchUP, ArcGIS, Photoshop, Adobe Creative Suite</li>
                                        </ul>                              
                                    </div>
                                </div>
                        <div class="education-row">
                                <div><u>2007-2009</u></div>
                                    <div><strong>Llantarnam School, Wales</strong>
                                        <p>4 'A' Levels: Mathematics (A), ICT (A), Physics (A), Chemistry (B), 2 GCSEs: Mathematics (A), English (B),</p>                           
                                    </div>
                                </div>
                            </div>
                  <div class="info">
                      <h4 class="info-heading">PROJECTS & EXPERIENCE</h4>
                         <ul class="cv-list">
                              <li>Highly proficient in Python, Matlab, C, and parallel programming in MPI and OpenMP</li>
                              <li>Experienced in working with Linux OS via programming in Raspberry Pi, personal computer and through the usage of Southampton University's Linux cluster (Lyceum)</li>
                              <li>Familiar with programming an Arduino (embedded system); used it successfully to create a custom radiosonde to carry out atmospheric research</li>
                              <li>Currently learning about web development (HTML, CSS, Javascript, PHP and jQuery) and Cyber Security through an online course</li>
                        </ul>
                  </div>
                  <div class="info">
                      <h4 class="info-heading">OTHER WORKS & EXPERIENCE</h4>
                         <ul class="cv-list">
                            <li>Highly proficient in Python, Matlab, C, and parallel programming in MPI and OpenMP</li>
                            <li>Experienced in working with Linux OS via programming in Raspberry Pi, personal computer and through the usage of Southampton University's Linux cluster (Lyceum)</li>
                            <li>Familiar with programming an Arduino (embedded system); used it successfully to create a custom radiosonde to carry out atmospheric research</li>
                            <li>Currently learning about web development (HTML, CSS, Javascript, PHP and jQuery) and Cyber Security through an online course</li>
                            </ul>
                  </div>
                  <div class="info">
                      <h4 class="info-heading">ADDITIONAL SKILLS</h4>
                      <p>Professional standard report writing, Research, Microsoft Office, Driving licence UK</p>
                      <p>Languages: English, Nepali, Indian</p>
                  </div>
                  <div class="info">
                      <h4 class="info-heading">INTERESTS</h4>
                      <ul class="cv-list">
                          <li><p>Android application programming: Recently completed an online course for Android application programming provided by the University of Reading. Learnt about Java and created an entire game that could be played on an Android mobile or tablet.</p></li>
                          <li><p>Football: Played briefly for Pontnewydd football club in Cwmbran. Also took part for Mauritius society in various intra-society football events organised in the university.</p></li>
                      </ul>
                  </div>
                  <div class="info">
                      <h4 class="info-heading">REFERENCES</h4>
                      <p>Dr Atul Bhaskar, Engineering Centre of Excellence, University of Southampton <br/>Email: a.bhaskar@soton.ac.uk</p>
                      <p>More references are available upon request.</p>
                  </div>
              </div>
              <div class="modal-ending">
                  <button onClick={this.handleClick}>Close</button>
              </div>
            </div>
    
        </div>
        )
    }
   
}

export default CV;