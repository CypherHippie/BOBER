import React from 'react';
import './Navbar.css';
// Import images directly
import boberLogo from '../assets/bober.circular.png'; // Ensure this image exists in the assets folder
import telegramIcon from '../assets/telegram.png';
import twitterIcon from '../assets/x.png'; // Ensure the X logo is here

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-content">
      {/* Left Section: Logo and Brand Name */}
      <div className="nav-left">
        <img src={boberLogo} alt="Bober Logo" className="logo" />
        <span className="brand-name">Bober</span>
      </div>

      {/* Center Section: Links */}
      <div className="nav-center">
        <a href="#story" className="nav-link">Story</a>
        <a href="#tokenomics" className="nav-link">Tokenomics</a>
        <a href="#nft" className="nav-link">NFT</a>
      </div>

      {/* Right Section: Social Icons */}
      <div className="nav-right">
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
