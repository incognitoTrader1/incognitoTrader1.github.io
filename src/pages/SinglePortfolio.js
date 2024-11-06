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
      title: 'WhatsApp project one',
      body: 'Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode. Recreated the current WhatsApp Web UI. Best part? It handles both dark mode and light mode.',
      image: 'demo.gif', 
      link: 'https://www.google.com', 
    },
    {
      id: '2',
      title: 'Twitter Clone',
      body: 'Built a Twitter clone with full tweet functionality.',
      image: 'demo.gif', 
      link: 'https://www.example.com', 
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
            <div>
                <img className='rps-featured-img' src={`/images/portfolio/${project.image}`} alt={project.title} />
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
