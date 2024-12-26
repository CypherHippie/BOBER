import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TokenomicsSection from './components/TokenomicsSection';
import NFTCollection from './components/NFTCollection';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <StorySection />
    <TokenomicsSection />
    <NFTCollection />
    <Footer />
  </>
);

export default App;
