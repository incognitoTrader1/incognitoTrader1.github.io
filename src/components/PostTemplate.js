// src/components/PostTemplate.js
import React from 'react'; 
import './PostTemplate.css'; 
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; 

const PostTemplate = ({ title, content, image, author= 'Admin', datePublished = '2024-09-28', posts}) => {
     
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": [`${window.location.origin}/images/blog/${image}`],
        "author": {
            "@type": "Person",
            "name": author
        },
        "datePublished": datePublished,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        },
        "articleBody": content
    }; 

    // Find the current post category
    const currentPostCategory = posts.find(post => post.title === title)?.category;

    // Get related posts (latest 5) in the same category
    const relatedPosts = posts
        .filter(post => post.category === currentPostCategory && post.title !== title) // Exclude current post
        .slice(0, 5); // Get the latest 5

    return (
        <div> 
            <Helmet> 
              <meta name="description" content={content.substring(0, 150)} />
              <meta name="keywords" content="blog, articles, your key terms here" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={content.substring(0, 150)} />
              <meta property="og:image" content={`${window.location.origin}/images/blog/${image}`} />
              <meta property="og:url" content={window.location.href} />
              <title>{title} | My Blog</title>
              <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            {/* Main homepage content */}
            <section className='spp-content-wrapper'>
              <h1 className='spp-featureH1'>{title}</h1>
              <img src={`${process.env.PUBLIC_URL}/images/blog/${image}`} alt={title} className='spp-featureImg' />
               
              {/* Render the Markdown content */}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </section>

            {/* Related Posts Section */}
            <section className='relatedPost-sec'> 
              <h3>Related Posts</h3>
              <div className="related-posts-list">
                {relatedPosts.map(post => (
                    <div key={post.id} className="related-post-item">
                        <div><img src={`/images/blog/${post.image}`} alt={post.title} /> </div>
                        <h4 style={{ display: '-webkit-box',WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',WebkitLineClamp: 3,textOverflow: 'ellipsis',marginBottom: '20px',height: '100px'}}>
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                    </div>
                ))}
              </div>
            </section>
        </div>
    );
};

export default PostTemplate;
