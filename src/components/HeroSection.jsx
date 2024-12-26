import React, { useState } from 'react';
import './HeroSection.css';
import beaverImage from '../assets/bober.png';

const HeroSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const contractAddress = "TBA on January";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to</h1>
          <h2>Bober Kurwa $BOBER</h2>
          <p>The Memecoin That's Just as Exciting as Spotting a Beaver!</p>
          <div className="contract-container">
            <span>Contact Address</span>
            <div className="address-box">
              <input 
                type="text" 
                value={contractAddress} 
                readOnly 
              />
              <button onClick={handleCopy}>
                Copy
              </button>
            </div>
            {copySuccess && <p className="copy-success">Copied to clipboard!</p>}
          </div>
        </div>
        
        <div className="beaver-container">
          <img src={beaverImage} alt="Bobber Beaver" />
        </div>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          <span># BOBER # BOBER # BOBER # BOBER # BOBER # BOBER #</span>
          <span># BOBER # BOBER # BOBER # BOBER # BOBER # BOBER #</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
