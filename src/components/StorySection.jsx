import React from 'react';
import './StorySection.css';
import mascotImage from '../assets/mascot.jpg';

const StorySection = () => (
  <section id="story" className="story">
    <div className="story-heading">
      <h2>OUR STORY</h2>
      <p className="tagline">Get ready to laugh, build, and grow with a memecoin that's impossible to ignore.</p>
    </div>
    <div className="story-content">
      <div className="text-section">
        <p>
          <strong>From Dam Frustration to Beaver Determination</strong><br />
          Let's face it.. the crypto world is a wild river. Too many projects come crashing down, leaving communities flooded with disappointment. 
          Like a determined beaver facing a raging current, we said, "Enough!"
        </p>
        <p>
          We were tired of shady developers abandoning their projects and investors being left high and dry. 
          So, we put our heads together and built a memecoin and a place where trust, resilience, and humor flow freely. 
          Bober Kurwa is more than just a coin; it's a sanctuary where we work together to withstand the storms of the crypto world and build something sustainable.
        </p>
        <p>
          <strong>Why Beavers? Why Us?</strong><br />
          Beavers are nature's symbol of resilience and teamwork. They don't just survive, they thrive by creating ecosystems that support life for generations. 
          That's exactly what we're doing with Bober Kurwa.
        </p>
      </div>
      <div className="image-section">
        <div className="image-container">
          <div className="background-pattern"></div>
          <img src={mascotImage} alt="Bober the Beaver Mascot" className="mascot-image" />
        </div>
      </div>
    </div>
  </section>
);

export default StorySection;
