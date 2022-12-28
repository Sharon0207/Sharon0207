import React from 'react';
import './partners.css';

import coinbase from '../../crypt-img/coinbase.png';
import spotify from '../../crypt-img/spotify.png';
import slack from '../../crypt-img/slack.png';
import dropbox from '../../crypt-img/dropbox.png';
import webflow from '../../crypt-img/webflow.png';
import zoom from '../../crypt-img/zoom.png';

const Partner = () => {
  return (
    <div className="partners">
      <h1>Partners</h1>
      <div className="sponsor">
        <ul>
          <li><img src={coinbase} alt=""  className="part-icon"/></li>
          <li><img src={spotify} alt=""  className="part-icon"/></li>
          <li><img src={slack} alt=""  className="part-icon"/></li>
          <li><img src={dropbox} alt=""  className="part-icon"/></li>
          <li><img src={webflow} alt=""  className="part-icon"/></li>
          <li><img src={zoom} alt=""  className="part-icon"/></li>

         
     
      
      
      
      
        </ul>
      
      </div>
    </div>
  )
}

export default Partner