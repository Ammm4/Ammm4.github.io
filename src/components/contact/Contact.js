import React from 'react';
import './Contact.css';

function Contact(){
  return(
    <div id="contact" className="contact">
      <div className="contact-heading"> <span>CONTACT ME</span></div>
      <div className="contact-content">                       
               <div className="address">
               <i className="fas fa-map-marker-alt"> </i>
               <span> <b>My Address</b></span>
                     <p>
                        Cwmbran, Oakfield <br/>
                        Torfaen, Gwent <br/>
                        Wales, UK
                     </p>
               </div>
               
               <div className="telephone">
                   <div className="icon-container"><i className="fas fa-phone-alt"></i><span><b> Call me</b></span></div>       
                   <p className="para">+44 07780335313</p>                 
               </div>
                
               <div className="email">  
                  <i className="fas fa-envelope"> </i><span> <b>Mail me</b></span>  
                  <p>ammm.4amit@gmail.com</p>
               </div>    
               <div className="social-media">
                  <p>
                    <a href="#"  target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-linkedin"></i></a>
                 </p>
               </div>
      </div>
      
           
    </div>
  )
}

export default Contact;