import React from 'react';
import {contactLists,socialProfiles} from './contactList'
import './Contact.css';

function Contact(){
  return(
    <div id="contact" className="contact">
      <div className="contact-heading"> <span>CONTACT ME</span></div>
      <div className="contact-content">
                {contactLists.map((item,index) => {
                   return(
                        <div className="contact-detail" key={index}>
                            <i className={item.iconName}></i>
                            <span> <b>{item.title}</b></span>
                            {item.p.map((para) => {
                              return(<p>{para}</p>)
                            })}
                        </div>
                   )
                })}
                 <div className="social-media">
                  <p>
                    {socialProfiles.map((item,index) => {
                         return(
                          <a href={item.url} target="_blank" key={index}>
                            <i className={item.cName}></i>
                          </a>
                         ) 
                    })}
                 </p>
               </div>                                         
      </div>         
    </div>
  )
}

export default Contact;