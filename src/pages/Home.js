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
      <meta name="description" content="Welcome to the official site of Emmanuel Okonkwo, co-founder and expert in algorithmic forex trading, backend development, API creation, and software engineering. Explore innovative solutions and trading strategies." />
      <meta name="keywords" content="Emmanuel Okonkwo, algorithmic forex trading, backend development, API creation, software engineering, co-founder, trading strategies, innovative solutions, tech expertise" />
      <meta property="og:description" content="Discover the work of Emmanuel Okonkwo, co-founder and expert in algorithmic forex trading, backend development, and API creation. Learn about impactful software solutions and trading strategies." />
      <meta property="og:url" content={window.location.href} />
      <title>Home | Emmanuel Okonkwo</title>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>

    {/* Main homepage content */}
    <section id="welcome-landing">
      <div style={{ padding: '0 50px' }}>
        <img src={`${process.env.PUBLIC_URL}/images/brand/emma-normal.png`} alt="my portrait" className="welcome-image" />
      </div>
      
      <div className='sec1Box2'>
        <div> 
        <h1 className="landing-h1">Emmanuel Okonkwo</h1>
        <TypewriterEffect />
        <div className='ds-flex'>
          <button onClick={() => window.location.href = "#/about"} className='sec1-btn1'><i className="fa fa-cogs" aria-hidden="true"></i> About Me</button>
          <button onClick={() => window.location.href = "#/portfolio"} className="brandBtn2 sec1-btn2"><i className="fa fa-briefcase" aria-hidden="true"></i> Past Projects</button>
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