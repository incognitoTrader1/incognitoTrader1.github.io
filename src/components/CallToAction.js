// src/components/CallToAction.js
import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './CallToAction.css';

const handleScrollToSection2 = () => {
  setTimeout(() => {
      const section = document.getElementById('contact-contents');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }, 0); // Delay to ensure the page loads before scrolling
};

const CallToAction = () => (
  <div className="call-to-action">
    <div className="cta-transperant">
     <div className="call-to-action-img-wrapper">
        <img class="call-to-action-img meMobile" src={`${process.env.PUBLIC_URL}/images/core/me-pc.jpg`} alt="img" />
        <img class="call-to-action-img meDesktop" src={`${process.env.PUBLIC_URL}/images/core/meDesktop.png`} alt="img" />
     </div>
     <div className="call-to-action-content">
        <div>
          <h2>Let's Brainstorm</h2>
          <p className='h2_subheading'>Hit me up let's discuss your new project ideas together or improve the exiting one</p> 
          <NavLink to="/contact" onClick={handleScrollToSection2}>
            <button style={{padding: "0 40px"}}>Proceed</button>
          </NavLink> 
        </div>
     </div>
    </div>
  </div>
);

export default CallToAction;
