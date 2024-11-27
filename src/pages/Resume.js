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
            <p className='h1_subheading'>Discover my skills, expertise and experiences.</p>
          </div> 

          <div className='resume-contents'>
           <div className='resume-contents-header'>
              <h2>Work Experience</h2>
              <p className='h2_subheading'>PRESENT & PREVIOUS JOBS</p>
           </div>
           <div className='resume-contents-main-wrapper'>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>October 2021 - May 2022</span>
              <h4>Software Engineer</h4> 
              <span className='rcm-span2'>DafriBank Limited</span>
              <p>• Developed dynamic email templates for transactional emails and newsletter publications for both Dafribank and DafriXchange Pro.</p>
              <p>• Developed an enhanced version of the DafriBank blog system, incorporating both frontend and backend components.</p>
              <p>• Led the publication team of content writers and editors to effectively deliver weekly newsletters and blog posts, while independently managing the integrations and complexities of the SendGrid dashboard.</p>
            </div> 
            <div className='resume-contents-main'>
              <span className='rcm-span1'>May 2023 - June 2023</span>
              <h4>Frontend Web Developer</h4> 
              <span className='rcm-span2'><a href="https://nextgearng.com" target="_blank" rel="noopener noreferrer">NextGear Homes</a></span>
              <p>• Redesigned and enhanced the existing real estate company's website using secure and modern technologies.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>July 2024 - September 2024</span>
              <h4>Software Developer</h4> 
              <span className='rcm-span2'><a href="https://youtu.be/HVYgy0YhlGo?si=bYccP7t0tLQ9UoQU" target="_blank" rel="noopener noreferrer">MinerX</a></span>
              <p>• Developed a Telegram mini-game featuring crypto cloud mining, tap-to-earn mechanics, a micro-task system, a referral program, and other engaging features.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>August 2022 - October 2022</span>
              <h4>Full-stack Web Developer</h4> 
              <span className='rcm-span2'>Ancestor Robotics</span>
              <p>• Developed a fully functional dynamic website from scratch, incorporating both frontend and backend components, for the forex robot company.</p>
              <p>• Developed all trading robots (Expert Advisors) and indicators using MQL4 and MQL5, along with other supporting technologies.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>July 2023 - August 2023</span>
              <h4>Frontend Web Developer</h4> 
              <span className='rcm-span2'><a href="https://ninetech.ca/" target="_blank" rel="noopener noreferrer">NineTech</a></span>
              <p>• Redesigned and enhanced the existing business and data analys school company's website using secure and modern technologies.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>Febuary 2024 - PRESENT</span>
              <h4>Full-stack Web Developer</h4> 
              <span className='rcm-span2'><a href="https://edey.net/" target="_blank" rel="noopener noreferrer">Edey</a></span>
              <p>• Designed and developed an e-commerce system from scratch, incorporating unique features such as P2P trading and ads placement, among others.</p>
              <p>• Developed an escrow system to enable users to buy and sell securely, ensuring trust and safety in peer-to-peer transactions.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>Febuary 2020 - May 2020</span>
              <h4>Software Engineer</h4> 
              <span className='rcm-span2'>Bitem</span>
              <p>• Developed a desktop application for crypto trading and investing, streaming live market data via the Binance API to execute and manage trades. The application includes essential tools for effective day trading and long-term investing on Binance.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>September 2024 - October 2024</span>
              <h4>Full-stack Web Developer</h4> 
              <span className='rcm-span2'><a href="https://payd.ng/" target="_blank" rel="noopener noreferrer">Payd</a></span>
              <p>• Designed a robust and elegant user interface for crypto trading and integrated third-party APIs for full functionality.</p>
              <p>• This project encompasses both front-end and back-end components and was built from the ground up using appropriate technologies.</p>
            </div>
            <div className='resume-contents-main'>
              <span className='rcm-span1'>September 2019 - PRESENT</span>
              <h4>Full-stack Web Developer, Software Engineer</h4> 
              <span className='rcm-span2'>Freelance - contract roles</span>
              <p>• Providing comprehensive services with a strong focus on backend development, API design, and algorithm implementation. This includes creating efficient, scalable architectures, developing robust APIs, and implementing advanced algorithms to power responsive and functional applications for diverse clients using a wide range of tools and technologies.</p>
              <p>• <b>Additional Freelance Projects</b>: Getbusyhub, Paybetter, Jenn, Korrok, Beyourboss, Interlink, IBTWeb, a Facebook clone, as well as numerous APIs and desktop applications.</p>
            </div>
           </div>
          </div>

          <div className='resume-contents'>
           <div className='resume-contents-header'>
              <h2>Education</h2>
              <p className='h2_subheading'>ACADEMIC CAREER</p>
           </div>
           <div className='resume-contents-main-wrapper'>
            <div className='resume-contents-main ed-main'>  
              <div className='ed-main-header-wrap'>
                <p><span></span></p>
                <h3>Full-Stack Developer Nanodegree</h3> 
              </div> 
              <span style={{color:"gray"}}>Udemy, Inc.</span><br></br><br></br>
              <span className='edu-small-box'>Jun 2019 - Nov 2019</span>
              <p style={{marginTop: "15px"}}>This course thought in-demand skills in both frontend and backend development, leveraging the latest frameworks, tools, and best practices.</p>
              <div className='edu-bullet-box'>
                <p>• Advanced JavaScript concepts, ES6+, and DOM manipulation.</p>
                <p>• Building dynamic user interfaces with React.js.</p>
                <p>• Testing and debugging frontend applications.</p>
                <p>• Setting up and managing servers with Node.js.</p>
                <p>• Working with databases: SQL and NoSQL (MySQL, MongoDB).</p>
                <p>• Authentication and security best practices.</p>
                <p>• Real-time applications with WebSockets.</p>
                <p>• Deployment strategies using cloud platforms like AWS, Heroku, or Vercel.</p>
                <p>• Understanding CI/CD pipelines and version control (Git/GitHub).</p>
              </div> 
            </div> 

            <div className='resume-contents-main ed-main'>  
              <div className='ed-main-header-wrap'>
                <p className='ed-main-header-wrap-span2'><span></span></p>
                <h3>Software Engineering Programme</h3> 
              </div> 
              <span style={{color:"gray"}}>ALX Africa - Holberton Inc.</span><br></br><br></br>
              <span className='edu-small-box'>Aug 2022 - July 2023</span>
              <p style={{marginTop: "15px"}}>This programme taught various technical skills needed to build database-backed APIs and web applications including:</p>
              <div className='edu-bullet-box'>
                <p>• Proficiency in C, Python, and Shell scripting for software development.</p>
                <p>• Experience with Linux systems, version control (Git), and collaborative coding practices.</p>
                <p>• Frontend and backend web development using HTML, CSS, JavaScript, and API integration.</p>
                <p>• Database design and management with SQL and NoSQL systems.</p>
                <p>• Low-level programming, including memory management and system calls.</p>
                <p>• DevOps basics: Docker, CI/CD pipelines, and cloud deployment.</p>
              </div> 
            </div>
           </div>
          </div> 

          <div className='resume-contents' style={{margin: "50px 0"}}>
           <div className='resume-contents-header'>
              <h2>Tech Stack</h2>
              <p className='h2_subheading'>TOOLS & TECHNOLOGIES</p>
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
