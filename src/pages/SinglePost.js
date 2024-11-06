import React from 'react'; 
import { useParams } from 'react-router-dom';
import PostTemplate from '../components/PostTemplate';

function SinglePost({ posts }) {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2 style={{textAlign: "center", padding: "50px 0", height: "100vh"}}>Post not found</h2>;
  } 
  
  return (
    <PostTemplate 
      title={post.title} 
      content={post.content} 
      image={post.image} 
      author={post.author}  
      datePublished={post.datePublished}
      posts={posts} 
    />
  );
};

export default SinglePost;