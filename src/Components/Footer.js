import React from 'react';
import './Footer.css'
import hublogo from '../assets/hublogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  const styles ={
    margin:"auto"
  }
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-content">
          <div className="footer-logo">
            <h3 className='heading-quick' >PG Hub</h3>
            <img src={hublogo} alt="Logo" />
          </div>

          <div className="footer-contact">
            <h3 className='heading-quick' style={{fontSize:"20px"}}>Contact-Info</h3>
            <ul className='contact-info' >
              <li >
                <FontAwesomeIcon icon={faPhone} />
                <span style={{ marginLeft: '10px' }}>+91 8889994566</span>
              </li>
              <li >
                <FontAwesomeIcon icon={faEnvelope} />
                <span style={{ marginLeft: '10px' }}>IIIT Sri City 517646</span>
              </li>
            </ul>
          </div>


          <div className="footer-links">
            <ul>
              <h3 className='heading-quick'>Quick Links</h3>
              <li><a href="/about">FAQ</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3 className='heading-quick' style={{fontSize:"20px"}}>Social Media</h3>
            <ul className='social-icons'>
              <li ><a href="/"><FontAwesomeIcon icon = {faFacebook} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon  = {faTwitter} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon  = {faInstagram} /></a></li>
            </ul>
          </div>
          
        </div>

      </div>

      <div className='most-footer'> 
            copyright &copy; 2023 PG Hub Team
      </div>
    </footer>
  );
};

export default Footer;
