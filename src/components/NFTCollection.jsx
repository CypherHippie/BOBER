import React from 'react';
import './NFTCollection.css';
import nft1 from '../assets/nft1.jpg';
import nft2 from '../assets/nft2.jpg';
import nft3 from '../assets/nft3.jpg';

const NFTCollection = () => (
  <section id="nft" className="nft-collection">
    <h2>NFT Collection</h2>
    <div className="nft-background">
      <div className="nft-cards">
        <div className="nft-item">
          <img src={nft1} alt="NFT 1" />
        </div>
        <div className="nft-item">
          <img src={nft2} alt="NFT 2" />
        </div>
        <div className="nft-item">
          <img src={nft3} alt="NFT 3" />
        </div>
      </div>
    </div>
    <p className="coming-soon">More Coming Soon...</p>
  </section>
);

export default NFTCollection;
