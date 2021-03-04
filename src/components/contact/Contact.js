import React from 'react';
import './Contact.css';

function Contact(){
  return(
    <div className="contact">
      <div className="contact-heading"> <span>CONTACT ME</span></div>
      {/* <div className="address">
                <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
                     <p>
                        Cwmbran, <br/>
                        Oakfield, <br/>
                        Torfaen, <br/>
                        Wales, UK
                     </p>
               </div> */}
      <div className="contact-content">         
               <div className="telephone">
                  <i className="fas fa-phone-alt fa-2x"></i>
                  <h6>Call Me at</h6>
                  <p className="para">+44 07780335313</p>
                  {/* <i className="fas fa-envelope fa-2x"></i> 
                  <h5>Mail Me</h5>
                  <p>ammm.4amit@gmail.com</p> */}
               </div>
               <div className="address">
               <i className="fas fa-map-marker-alt fa-2x"></i>
                {/* <h5>Address</h5> */}
                     <p>
                        Cwmbran, Oakfield <br/>
                        Wales, UK
                     </p>
               </div>

                <div className="email">  
                  <i className="fas fa-envelope fa-2x"></i>  
                  <h6> Mail Me at</h6>
                  <p>ammm.4amit@gmail.com</p>
               </div>     
               {/* <div className="social-media">
                 <div><i className="fas fa-star fa-2x"></i> </div>
                 <h5>Follow Me</h5>
                 <p>
                    <a href="#"  target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-linkedin"></i></a>
                </p>
               </div> */}
      </div>
      <div className="social-media">
                 <div><i className="fas fa-star fa-2x"></i> </div>
                 <h6>Follow Me</h6>
                 <p>
                    <a href="#"  target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#"  target="_blank"><i className="fab fa-linkedin"></i></a>
                </p>
               </div>
           
    </div>
  )
}

export default Contact;