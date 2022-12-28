import React from 'react';
import './content.css';

const Content = () => {
  return (
    <div className="content">
      <div className="text">
      <h1>The Decentralized & Autonomous Cross-Chain Liquidity Network</h1>
      <p>Light Speed Swap, Next Level Liquidity Frictionless Yield</p>
      <button className='button'>Connect wallet</button>
      <button className='button'>Read docs</button>
      </div>


      <div className="value">
        <div className="cards">
          <h3>TOTAL VALUE LOCKED</h3>
          <p>$ 242,520,400</p>
        </div>
        <div className="cards">
          <h3>TOTAL TRADING VOLUME</h3>
          <p>$ 242,520,400</p>
        </div>

      </div>
      <p className='par'>built on solana</p>
    </div>
  )
}

export default Content