import React from 'react';
import './Footer.css';
import xIcon from '../assets/x.png';
import telegramIcon from '../assets/telegram.png';
import mascotImage from '../assets/bober.inversed.png';


const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-message">
        Join us, and let's channel that "$BOBER KURWA!" energy to make the crypto world a dam better place!
      </div>
      <div className="social-icons">
        <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={xIcon} alt="X" />
        </a>
      </div>
      <div className="copyright">
        ©Copyright 2024 $BOBER
      </div>
    </div>
    <img src={mascotImage} alt="Mascot" className="footer-mascot" />
  </footer>
);

export default Footer;
