import React from 'react';
import './nav.css';
import Vector from '../../crypt-img/Vector.png'
import solicon from '../../crypt-img/solicon.png';
import solana from '../../crypt-img/solana.png';


const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-content">
          <img src={Vector} alt=""  className="moon"/>
          <img src={solicon} alt=""  className="solicon"/>
          <img src={solana} alt=""  className="solana"/>
        <button className="sol-btn">Launch App</button>
    </div>
    </div>
  )
}

export default Nav;