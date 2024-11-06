// src/components/RegularBlog.js
import React from 'react'; 
import './RegularBlog.css';

const RegularBlog = () => (
  <div className="regular-blog">
    <div className='regular-blog-box1'>
      <h2>Regular Blog</h2>
      <p>Read some of our interest articles to get you started.</p>
    </div> 

    <div className='regular-blogWrapper'>
      <div className="regularBlogs boxShadow">
        <img src="/images/Blog/post-7.jpg" alt="post featured image" /> 
        <h4>Learn PHP The Right Way | 30 Days Extensive PHP Course</h4>
        <button>Explore</button>
      </div> 
      <div className="regularBlogs boxShadow">
        <img src="/images/Blog/post-7.jpg" alt="post featured image" /> 
        <h4>Learn PHP The Right Way | 30 Days Extensive PHP Course</h4>
        <button>Explore</button>
      </div> 
      <div className="regularBlogs boxShadow">
        <img src="/images/Blog/post-7.jpg" alt="post featured image" /> 
        <h4>Learn PHP The Right Way | 30 Days Extensive PHP Course</h4>
        <button>Explore</button>
      </div> 
    </div>
  </div>
);

export default RegularBlog;
