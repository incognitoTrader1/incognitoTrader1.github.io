// src/components/RegularBlog.js
import React from 'react'; 
import './RegularBlog.css';

const RegularBlog = () => (
  <div className="regular-blog">
    <div className='regular-blog-box1'>
      <h2>Recent Articles</h2>
      <p className='h2_subheading'>Your Daily Dose of Knowledge and Strategies.</p>
    </div> 

    <div className='regular-blogWrapper'>
      <div className="regularBlogs boxShadow">
        <img src={`${process.env.PUBLIC_URL}/images/Blog/php-tech1.webp`} alt="featured" /> 
        <h4>Enhancing Performance in PHP with Caching Techniques</h4>
        <button onClick={() => window.location.href = "blog/enhancing-performance-in-php-with-caching-techniques"}>Explore</button>
      </div> 
      <div className="regularBlogs boxShadow">
        <img src={`${process.env.PUBLIC_URL}/images/Blog/mysql-tech1.webp`} alt="featured" /> 
        <h4>Optimizing MySQL Queries: Techniques for Faster Data Retrieval</h4>
        <button onClick={() => window.location.href = "blog/optimizing-mysql-queries-techniques-for-faster-data-retrieval"}>Explore</button>
      </div> 
      <div className="regularBlogs boxShadow">
        <img src={`${process.env.PUBLIC_URL}/images/Blog/mql5-tech.webp`} alt="featured" /> 
        <h4>Backtesting in MQL5: How to Test and Improve Your Trading Strategies</h4>
        <button onClick={() => window.location.href = "blog/backtesting-in-mql5-how-to-test-and-improve-your-trading-strategies"}>Explore</button>
      </div> 
    </div>
  </div>
);

export default RegularBlog;
