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
       <meta name="description" content="some text" />
       <meta name="keywords" content="some text" />
       <meta property="og:description" content="some text" />
       <meta property="og:url" content={window.location.href} />
       <title>About | Example Site</title>
       <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main About page content */}
      <section className='about'>
       <div className='about-main-bg'>
        <div className='about-main'>
          <div className='about-header'>
            <h1>MEET EMMANUEL OKONKWO</h1> 
          </div> 

          <div className='about-contents'>
           <div className='about-contents-header'>
              <img src={`${process.env.PUBLIC_URL}/images/brand/success1.png`} alt='Emmanuel' />
           </div>

           <div className='about-contents-main-wrapper'>
            <div className='about-contents-main'> 
              <h5>Who am I?</h5> 
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>A Software Engineer with hands on experience developing websites, full-stack web applications and APIs.</p>
              </div>

              <div>
                <img src={`${process.env.PUBLIC_URL}/images/core/user.png`} alt='user icon' />
                <p>A Software Engineer with hands on experience developing websites, full-stack web applications and APIs.</p>
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
                <p>Intra-day Forex Trading | Retail Trading</p>
              </div> 
             </div> 
            </div> 
            <p>I'm super excited you're here. Feel free to reach out to me with any project ideas you have or to just say hello!</p>
           </div>
          </div> 
        </div>  
       </div>  
      </section>
    </div>
  );
};

export default About;
