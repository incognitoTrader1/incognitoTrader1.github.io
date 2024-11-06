// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import SinglePortfolio from './pages/SinglePortfolio';
import Tester from './pages/Tester';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost'; // for individual posts
import Header from './components/Header';  
import Footer from './components/Footer';
import { generateSlug } from './utils/slugify'; 

const posts = [
  // Post 1
  {
  id: '1',
  title: 'First Blog Post First Blog Post First Blog Post',
  content: 
`This is the **first** blog post, This is the **first** blog post,This is the **first** blog post.

This is the **first** blog post, This is the **first** blog post.

It has a picture below
![An example image](/images/blog/post-7.jpg)
You can read more on [Google](https://www.google.com).`,
  image: 'post-4.png',
  category: 'health',
  },
  
  // Post 2
  {
  id: '2',
  title: 'Second Blog Post',
  content: 
`This is the **first** blog post. It has a picture below: 
This is the **first** blog post. It has a picture below: 
This is the **first** blog post. It has a picture below:

# This is heading text

![An example image](/images/blog/t1.jpg)

You can read more on [Google](https://www.google.com).
`,
  image: 't1.jpg',
  category: 'health',
  },
  // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
    // Post 2
  {
    id: '2',
    title: 'Second Blog Post',
    content: 
  `This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below: 
  This is the **first** blog post. It has a picture below:
  
  # This is heading text
  
  ![An example image](/images/blog/t1.jpg)
  
  You can read more on [Google](https://www.google.com).
  `,
    image: 't1.jpg',
    category: 'health',
    },
  // More posts...

].map(post => ({
  ...post,
  slug: generateSlug(post.title), // Dynamically generate the slug from the title
})); 

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />   
        
        <Routes>
          <Route path="/" element={<Home />} />  {/* "/" maps to Home */}
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/resume" element={<Resume />} />  
          <Route path="/portfolio" element={<Portfolio />} />  
          <Route path="/portfolio/:slug" element={<SinglePortfolio />} />  
          <Route path="/tester" element={<Tester />} />  
          <Route path="/blog" element={<Blog posts={posts} />} />
          <Route path="/blog/:slug" element={<SinglePost posts={posts} />} />
        </Routes>
        
        <Footer />   
      </div>
    </Router>
  );
} 

export default App;
