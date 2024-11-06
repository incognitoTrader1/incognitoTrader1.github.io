import React from 'react';
import './Portfolio.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { generateSlug } from '../utils/slugify';

const Portfolio = () => {

  // Example project data
  const projects = [
    {
      id: '1',
      title: 'WhatsApp project one',
      image: 'project1.png', 
    },
    {
      id: '2',
      title: 'Twitter Clone',
      image: 'project1.png', 
    },
    {
      id: '2',
      title: 'Twitter Clone',
      image: 'project1.png', 
    },
    {
      id: '2',
      title: 'Twitter Clone',
      image: 'project1.png', 
    },
    // Add more projects...
  ];

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
        <title>Portfolio | Example Site</title>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Portfolio page content */}
      <section className='recent-projects-trans-bg'>
       <div className='recent-projects-list'>
        <div className='recent-projects-header'>
          <h1>My Recent Projects</h1>
          <p>Portfolio showcase of some of my work.</p>
        </div>

        <div style={{padding:"0 20px"}}>
        <div className='recent-projects-box-wrapper'>
          {projects.map(project => (
            <Link
              key={project.id}
              className="recent-projects-box"
              to={`/portfolio/${generateSlug(project.title)}`}
             > 
              <img className="recent-projects-box-img" src={`/images/portfolio/${project.image}`} alt={project.title} />
              <div class="recent-projects-box-content">
                <h3>{project.title}</h3>
                <div class="portfolio-page__actions">
                  <button class="recent-projects-box-img-btn" aria-label="View details" title="View details"> 
                    <svg role="img" aria-label="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1186 1024" class="portfolio-page__img-icon" width="40" fill="currentColor" height="30"><path d="M925.1 338.9c-22.5-53.3-54.8-101.2-95.9-142.3-41.1-41.1-89-73.4-142.3-95.9-55.2-23.4-113.8-35.2-174.2-35.2-60.4 0-119 11.8-174.2 35.2-53.3 22.5-101.2 54.8-142.3 95.9-41.1 41.1-73.4 89-95.9 142.3C76.9 394.1 65 452.8 65 513.2s11.8 119 35.2 174.2c22.5 53.3 54.8 101.2 95.9 142.3s89 73.4 142.3 95.9c55.2 23.4 113.8 35.2 174.2 35.2 60.4 0 119-11.8 174.2-35.2 53.3-22.5 101.2-54.8 142.3-95.9s73.4-89 95.9-142.3c23.4-55.2 35.2-113.8 35.2-174.2s-11.8-119.1-35.1-174.3zM778.3 778.8c-70.9 70.9-165.3 110-265.6 110S318 849.7 247 778.8c-70.9-70.9-110-165.3-110-265.6 0-100.3 39.1-194.7 110-265.6 70.9-70.9 165.3-110 265.6-110s194.7 39.1 265.6 110c70.9 70.9 110 165.3 110 265.6 0.1 100.3-39 194.6-109.9 265.6z"></path><path d="M512.6 436.5c-19.8 0-36 16.2-36 36V730c0 19.8 16.2 36 36 36s36-16.2 36-36V472.5c0-19.8-16.2-36-36-36z"></path><path d="M512.6 310.8m-63.5 0a63.5 63.5 0 1 0 127 0 63.5 63.5 0 1 0-127 0Z"></path></svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>  
        </div>  
       </div>  
      </section> 
    </div>
  );
};

export default Portfolio;