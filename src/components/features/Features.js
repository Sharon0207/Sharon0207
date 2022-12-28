import React from 'react';
import './features.css';
import Swap from '../../crypt-img/Swap.png';
import Pool from '../../crypt-img/Pool.png';
import Farm from '../../crypt-img/Farm.png';
import Stake from '../../crypt-img/Stake.png';

const Features = () => {
  return (
    <div className="features">
      <h1>Features of it's cross-chain DeFi</h1>

      <div className="chain">

       <div className="chain-card">
       <img src={Swap} alt=""  className="card-icon"/>
        <h5>Trade</h5>
        <p>Swap or Trade and quickly</p>
        <button className="feat-btn">Enter Exchange</button>
       </div>

       <div className="chain-card1">
       <img src={Pool} alt=""  className="card-icon"/>
        <h5>Pool</h5>
        <p>Provide liquidity for any token</p>
        <button className="feat-btn">Add liquidity</button>
       </div>
        </div>


        <div className="chain2">
       <div className="chain2-card">
       <img src={Farm} alt=""  className="card-icon"/>
        <h5>Farm</h5>
        <p>Earn yield through farming</p>
        <button className="feat-btn">Enter Farm</button>
       </div>

       <div className="chain2-card1">
       <img src={Stake} alt=""  className="card-icon"/>
        <h5>Stake</h5>
        <p>Stake your coin and earn reward</p>
        <button className="feat-btn">Stake now</button>
       </div>




      </div>
    </div>
  )
}

export default Features