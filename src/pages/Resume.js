// src/Resume.js
import React from 'react';
import './Resume.css';
import { Helmet } from 'react-helmet';

const Resume = () => {

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
       <title>Resume | Example Site</title>
       <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Resume page content */}
      <section className='resume'>
       <div className='resume-main-bg'>
        <div className='resume-main'>
          <div className='resume-header'>
            <h1>Resume</h1>
            <p>Learn more about my skills, qualifications and experiences.</p>
          </div> 

          <div className='resume-contents'>
           <div className='resume-contents-header'>
              <h2>Work Experience</h2>
              <p>PRESENT & PREVIOUS JOBS</p>
           </div>
           <div className='resume-contents-main-wrapper'>
            <div className='resume-contents-main'>
              <span style={{color:"red"}}>August 2021 - Present</span>
              <h3>Software Engineer</h3> 
              <span style={{color:"gray"}}>Bloomberg L.P.</span>
              <p>• Creating the tools that allow Bloomberg’s 3000+ editorial staff worldwide to publish market-moving financial news.</p>
            </div>
            <div className='resume-contents-main'>
              <span style={{color:"red"}}>August 2021 - Present</span>
              <h3>Software Engineer</h3> 
              <span style={{color:"gray"}}>Bloomberg L.P.</span>
              <p>• Creating the tools that allow Bloomberg’s 3000+ editorial staff worldwide to publish market-moving financial news.</p>
            </div>
           </div>
          </div>

          <div className='resume-contents'>
           <div className='resume-contents-header'>
              <h2>Education</h2>
              <p>ACADEMIC CAREER</p>
           </div>
           <div className='resume-contents-main-wrapper'>
            <div className='resume-contents-main ed-main'>  
              <div className='ed-main-header-wrap'>
                <p className='ed-main-header-wrap-span2'><span></span></p>
                <h3 style={{color:"red"}}>Full-Stack Developer Nanodegree</h3> 
              </div> 
              <span style={{color:"gray"}}>Udacity, Inc.</span><br></br><br></br>
              <span className='edu-small-box'>May 2020 - Sept 2020</span>
              <p style={{marginTop: "15px"}}>This nanodegree course extensively taught various technical skills needed to build database-backed APIs and web applications including:</p>
              <div className='edu-bullet-box'>
                <p>• SQL and Data Modelling for the Web</p>
                <p>• API Development and Documentation</p>
                <p>• Identity and Access Management</p>
                <p>• Server Deployment, Containerization and Testing</p>
              </div> 
            </div> 

            <div className='resume-contents-main ed-main'>  
              <div className='ed-main-header-wrap'>
                <p className='ed-main-header-wrap-span2'><span></span></p>
                <h3 style={{color:"red"}}>Full-Stack Developer Nanodegree</h3> 
              </div> 
              <span style={{color:"gray"}}>Udacity, Inc.</span><br></br><br></br>
              <span className='edu-small-box'>May 2020 - Sept 2020</span>
              <p style={{marginTop: "15px"}}>This nanodegree course extensively taught various technical skills needed to build database-backed APIs and web applications including:</p>
              <div className='edu-bullet-box'>
                <p>• SQL and Data Modelling for the Web</p>
                <p>• API Development and Documentation</p>
                <p>• Identity and Access Management</p>
                <p>• Server Deployment, Containerization and Testing</p>
              </div> 
            </div>
           </div>
          </div> 

          <div className='resume-contents' style={{margin: "50px 0"}}>
           <div className='resume-contents-header'>
              <h2>Tech Stack</h2>
              <p>TOOLS & TECHNOLOGIES</p>
           </div>
           <div className='resume-contents-main-wrapper'>
            <div className='resume-contents-main tech-stack-wrap'> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='Python icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt='PHP icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt='java icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='AWS icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt='React icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt='MySQL icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='HTML5 icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt='CSS icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github icon' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt='bash icon' />
            </div> 
           </div>
          </div>
        </div>  
       </div>  
      </section>
    </div>
  );
};

export default Resume;
