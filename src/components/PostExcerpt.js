import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostExcerpt = ({ content }) => {
    // Safely extract part of the content
    const excerpt = content.split(' ').slice(0, 15).join(' ') + '...'; // Extract the first 30 words
  
    return (
      <div>
        {/* Render the shortened Markdown content */}
        <ReactMarkdown>{excerpt}</ReactMarkdown>
      </div>
    );
  };
  
  export default PostExcerpt;