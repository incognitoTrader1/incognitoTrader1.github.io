import React, { useState, useEffect } from 'react'; // Added useEffect
import './Blog.css';
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';
import PostExcerpt from '../components/PostExcerpt';  
import SearchBar from '../components/SearchBar';  

function Blog({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [visiblePosts, setVisiblePosts] = useState(10); // Start with 10 posts

  // Handle the search logic
  const handleSearch = (searchTerm, category) => {
    let filtered = posts;

    // Filter by category if not 'all'
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }

    // Filter by search term if provided
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered); // Update the filtered posts state
    setVisiblePosts(10); // Reset to initial 10 posts on new search
  };

  // Function to handle loading more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10); // Load 10 more posts
  };

  // Detect when user has scrolled to the bottom and load more posts
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadMorePosts(); // Load more posts when at the bottom of the page
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Clean up listener on unmount
  }, []);

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
    <div className='blog-main'>
      <Helmet>
        <meta name="description" content="some text" />
        <meta name="keywords" content="some text" />
        <meta property="og:description" content="some text" />
        <meta property="og:url" content={window.location.href} />
        <title>Blog | Example Site</title>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main homepage content */}
      <SearchBar posts={posts} onSearch={handleSearch} />

      <div className="posts-list"> 
        {filteredPosts.slice(0, visiblePosts).map((post) => ( // Only show posts up to visiblePosts limit
          <div key={post.id} className="post-item">
           <Link to={`/blog/${post.slug}`} className="read-more-link"> 
            <img className='featuredImg' src={`${process.env.PUBLIC_URL}/images/blog/${post.image}`} alt={post.title} />
            <div className='post-item-content-wrapper'> 
              <h2>{post.title}</h2>
              <PostExcerpt content={post.content} /> 
            </div>
           </Link>
          </div>
        ))}
      </div>

      {/* Load more button, in case user doesn't scroll */}
      {visiblePosts < filteredPosts.length && (
        <button onClick={loadMorePosts} className="load-more-button">Load More</button>
      )}
    </div>
  );
}

export default Blog;
