// src/SinglePortfolio.js
import React from 'react';
import './SinglePortfolio.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { generateSlug } from '../utils/slugify';

const SinglePortfolio = () => {
    const { slug } = useParams();  

  // Project data
  const projects = [
    {
      id: '1',
      title: 'NextGear',
      body: 'This project involved an existing real estate website, and my task was to upgrade its design to give it a more professional look while also improving certain functionalities. The upgrade was achieved using WordPress and other supporting technologies.',
      video: 'assets/videos/nextgear.mp4', 
      link: 'https://nextgearng.com/', 
    }, 
    {
      id: '2',
      title: 'MinerX',
      body: 'This project is a Telegram Mini App with complex and dynamic features, including crypto cloud mining, a tap-to-earn game, micro tasks for earning rewards, a complex referral system, and much more. I achieved this amazing result using React, PHP, MySQL, CSS, Node.js, Redis, Socket.IO, Telegram Bot API, and JWT (JSON Web Tokens).',
      video: 'assets/videos/minerX.mp4', 
      link: 'https://youtu.be/HVYgy0YhlGo?si=bYccP7t0tLQ9UoQU', 
    },
    {
      id: '3',
      title: 'NineTech',
      body: 'This project involved fully upgrading an existing Data and Business Analysis school website. I achieved the stunning result using WordPress.',
      video: 'assets/videos/NineTech.mp4', 
      link: 'https://ninetech.ca/', 
    },
    {
      id: '4',
      title: 'Payd',
      body: 'This project involved developing a full-stack crypto trading web app, seamlessly integrated with the WhatsApp Business API to deliver a robust and user-friendly trading experience. I built the entire application from scratch using HTML, CSS, JavaScript, MySQL and PHP.',
      video: 'assets/videos/Payd.mp4', 
      link: 'https://Payd.ng/', 
    },
    {
      id: '5',
      title: 'Bitem',
      body: 'This desktop app streams live market data from Binance, allowing users to trade without logging in. It includes trading tools and calculators to help traders make informed decisions and focus on a single pair’s performance. Built entirely with Python.',
      video: 'assets/videos/Bitem.mp4', 
      link: '#', 
    },
    {
      id: '6',
      title: 'Edey',
      body: 'This project is a feature-rich eCommerce web app, featuring a peer-to-peer marketplace for goods and services. Built from the ground up with PHP, HTML, CSS, and MySQL, it integrates seamlessly with SendGrid, WhatsApp Business, and other key technologies to enhance functionality.',
      link: 'https://edey.net/', 
      video: 'assets/videos/edey.mp4', 
    },
    {
      id: '7',
      title: 'Efalcon Forex Robot',
      body: 'This project is a Forex trading robot (Expert Advisor) with a user-friendly interface. It helps users trade based on fundamental news events, automatically adapting to the market’s dynamic nature during these events to maximize profits. Built entirely with MQL5.',
      link: '#', 
      video: 'assets/videos/Efalconrobot.mp4', 
    },
    {
      id: '8',
      title: 'GetBusyHub',
      body: 'This project is a comprehensive online learning platform that includes a blog and a robust Learning Management System (LMS). It was developed from scratch using PHP, HTML, CSS, JavaScript, MySQL, and other supporting technologies. The platform allows users to access courses, track progress, and engage with educational content, while the integrated blog provides updates and resources. The LMS system offers features such as course management, quizzes, and certifications, ensuring a seamless and interactive learning experience for students.',
      link: '#', 
      video: 'assets/videos/getbusy.mp4', 
    },
    // Add more projects...
  ].map(project => ({
    ...project,
    slug: generateSlug(project.title), 
  }));

  // Find the project based on the slug
  const project = projects.find(project => project.slug === slug); 

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Portfolio Page",
    "url": window.location.href,
    "description": "some text",
    "author": {
      "@type": "Organization",
      "name": "My Website"
    }
  }; 
   
     
  return (  
    <div className='portfolio-page'>
      <Helmet>
        <meta name="description" content="some text" />
        <meta name="keywords" content="some text" />
        <meta property="og:description" content="some text" />
        <meta property="og:url" content={window.location.href} />
        <title>{project ? project.title : "Project Not Found"} | Example Site</title>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Portfolio page content */}  
      <section className='recent-projects-single'>
        <div className='rps-trans-bg'>
        <div className='rps-wrapper'>
        <div className='rps-header'>
          <p><a href="/portfolio">Portfolio</a> &gt; {project ? project.title : "Not Found"}</p> 
        </div>

        <div className='rps-content-wrapper'>
            {project ? (
            <>
            <div className='rps-video-box'>
              <video autoPlay loop muted className='rps-video'>
                <source src={`${process.env.PUBLIC_URL}/${project.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video> 
            </div>   
            <div className='rps-contents-box'>
                <h2>{project.title}</h2>
                <p>{project.body}</p>
                <div>
                    <a href={project.link} className='liveDemoBtn' target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            </>
            ) : (
            <h2>Project not found</h2>
            )}
        </div>

        </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePortfolio;
