import React from 'react';  
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
 

function Tester({ posts }) { 

    const content = `
#### Introduction
This is the **first** blog post. It has a picture below:

![An example image](/images/blog/first-post.jpg)

You can read more on [Google](https://www.google.com) ggg.
`;
          

  return (
    <div>
      <Helmet>
        <meta name="description" content="some text" />
        <meta name="keywords" content="some text" />
        <meta property="og:description" content="some text" />
        <meta property="og:url" content={window.location.href} />
        <title>Tester | Example Site</title> 
      </Helmet>

      {/* Main homepage content */}  
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Tester;
