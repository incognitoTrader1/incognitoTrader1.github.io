// src/components/CallToAction.js
import React from 'react'; 
import './CallToAction.css';

const CallToAction = () => (
  <div className="call-to-action">
    <div className="cta-transperant">
     <div className="call-to-action-img-wrapper">
        <img class="call-to-action-img meMobile" src="/images/core/meMobile.png" alt="img" />
        <img class="call-to-action-img meDesktop" src="/images/core/meDesktop.png" alt="img" />
     </div>
     <div className="call-to-action-content">
        <div>
          <h2>Let's Brainstorm</h2>
          <p>hit me up let's discuss you new project together or improvement strategy on the exiting one</p>
          <button>Proceed</button>
        </div>
     </div>
    </div>
  </div>
);

export default CallToAction;
