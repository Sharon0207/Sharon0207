import React from 'react';
import './footer.css';
import SiteLogo from '../../crypt-img/SiteLogo.png';
import {FiFacebook} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import {FiYoutube} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-text">
        <ul>
          <li className="site__sec">
          <img src={SiteLogo} alt=""  className='site'/>
           <h5>High level experience in web design and development knowledge, producing quality work.</h5>
           <FiFacebook className='foot-icon'/>
           <FaInstagram className='foot-icon'/>
           <FiYoutube className='foot-icon'/>
           <FiLinkedin className='foot-icon'/>
          </li>

          <li>
           <h3>Product</h3>
           <p>Landing Page</p>
           <p>Popup Builder</p>
           <p>Web-design</p>
           <p>Content</p>
           <p>Integrations</p>
          </li>

          <li className='comp'>
           <h3>Use Cases</h3>
           <p>Web-Designers</p>
           <p>Markerters</p>
           <p>Small Business</p>
           <p>Website Builder</p>
           <p>Sales Manager</p>
           
          </li>

          <li className='comp'>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Teams</p>
            <p>Contact Us</p>
          </li>
        

        </ul>
      </div>
      
    </div>
  )
}

export default Footer