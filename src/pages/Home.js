// src/pages/Home.js
import React from 'react';
import './Home.css';
import { Helmet } from 'react-helmet';
import TechBlog from '../components/TechBlog';
import TypewriterEffect from '../components/TypewriterEffect'; 
import RegularBlog from '../components/RegularBlog';
import RecentProjects from '../components/RecentProjects';
import CallToAction from '../components/CallToAction'; 
 

const Home = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home Page",
    "url": window.location.href,
    "description": "some text",
    "author": {
      "@type": "Organization",
      "name": "My Website"
    }
  }; 

  return (  
   <div>
    <Helmet>
      <meta name="description" content="some text" />
      <meta name="keywords" content="some text" />
      <meta property="og:description" content="some text" />
      <meta property="og:url" content={window.location.href} />
      <title>Home | Example Site</title>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>

    {/* Main homepage content */}
    <section id="welcome-landing">
      <div style={{ padding: '0 50px' }}>
        <img src="/images/brand/profile.png" alt="Welcome" className="welcome-image" />
      </div>
      
      <div className='sec1Box2'>
        <div> 
        <h1 className="landing-h1">Emmanuel Okonkwo</h1>
        <TypewriterEffect />
        <div className='ds-flex'> 
          <button className='sec1-btn1'><i className="fa fa-cogs" aria-hidden="true"></i> My Services</button>
          <button className="brandBtn2 sec1-btn2"><i className="fa fa-briefcase" aria-hidden="true"></i> Past Projects</button>
        </div>
        </div>
      </div>
    </section> 
    <hr></hr>
    
    <section id="tech-blog">
      <TechBlog />
    </section> 
    <hr></hr>
    
    <section id="regular-blog">
      <RegularBlog />
    </section>  
    
    <section id="recent-projects">
      <RecentProjects />
    </section> 

    <section id="call-to-action">
      <CallToAction />
    </section>   
   </div>
  );
};

export default Home;