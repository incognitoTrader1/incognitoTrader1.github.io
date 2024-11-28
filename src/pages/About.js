// src/About.js
import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';

const About = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Page",
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
       <meta name="description" content="Learn about Emmanuel Okonkwo, a co-founder skilled in algorithmic forex trading, core engineering, backend development, API creation, and algorithm design. Discover my journey, expertise, and mission to deliver impactful software solutions and trading strategies." />
       <meta name="keywords" content="About Emmanuel Okonkwo, algorithmic forex trading, backend development, API creation, algorithm design, software engineering, co-founder, impactful solutions, trading strategies, tech expertise" />
       <meta property="og:description" content="Get to know Emmanuel Okonkwo, a co-founder, software engineer, and expert in algorithmic forex trading, backend development, APIs, and algorithms. Explore the story and skills behind my innovative solutions and trading strategies." />
       <meta property="og:url" content={window.location.href} />
       <title>About | Emmanuel Okonkwo</title>
       <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main About page content */}
      <section className='about'>
       <div className='about-main-bg'>
        <div className='about-main'>
          <div className='about-header'>
            <h2>MEET EMMANUEL OKONKWO</h2> 
          </div> 

          <div className='about-contents'>
           <div className='about-contents-header'>
              <img src={`${process.env.PUBLIC_URL}/images/brand/emma-laugh.png`} alt='Emmanuel' />
           </div>

           <div className='about-contents-main-wrapper'>
            <div className='about-contents-main'> 
              <h5>Who am I?</h5> 
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>A Software Engineer with practical experience in developing websites, full-stack web & desktop applications, and APIs.</p>
              </div> 
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>An Expert Advisor (FX robot) developer with hands-on experience in creating automated trading solutions and optimizing algorithms for the forex market.</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>An Algo Trader with expertise in developing and implementing algorithmic trading strategies to optimize market performance and maximize returns.</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>I'm skilled in core engineering concepts, leveraging them to design and deliver reliable, impactful software and algorithms. Currently driving innovation as a co-founder at IncognitoTraders.</p>
              </div>
            </div>
            <div className='about-contents-main2'> 
              <h5>What I Do?</h5> 
             <div className='ac-box-wrap'>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/code.png`} alt='code icon' />
                <p>Software/API Development</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/web-link.png`} alt='web-link icon' />
                <p>Full-Stack Web Development</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/forex.png`} alt='forex icon' />
                <p>Intra-day & Algo Forex Trading</p>
              </div> 
             </div> 
            </div>
            <p>I'm thrilled that you're here! Don't hesitate to <b><a href="https://wa.me/+2348127506190?text=Hi,%20am%20reaching%20out%20from%20your%20portfolio%20about%20page." target="_blank" rel="noopener noreferrer">Reach Out</a></b> if you have any project ideas or just want to say hello!</p>
           </div>
          </div> 
        </div>  
       </div>  
      </section>
    </div>
  );
};

export default About;
