import React from 'react';
import './TokenomicsSection.css';

const TokenomicsSection = () => (
  <section id="tokenomics" className="tokenomics">
    <h2>Tokenomics</h2>
    <div className="metrics">
      <div className="metric">
        <span className="value">100%</span>
        <span className="label">Community Owned</span>
      </div>
      <div className="metric">
        <span className="value">1BN</span>
        <span className="label">Supply</span>
      </div>
      <div className="metric">
        <span className="value">0%</span>
        <span className="label">Buy / Sell Tax</span>
      </div>
      <div className="metric">
        <span className="value">0%</span>
        <span className="label">Buy / Sell Tax</span>
      </div>
    </div>
  </section>
);

export default TokenomicsSection;
