import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TechBlog.css';

const TechBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default on mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet size
        settings: {
          slidesToShow: 2, // Show 2 boxes on tablets
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Desktop size
        settings: {
          slidesToShow: 3, // Show 3 boxes on desktop
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440, // Large desktop size
        settings: {
          slidesToShow: 4, // Show 4 boxes on larger desktops
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const blogs = [
    {
      img: "images/Blog/post-7.jpg",
      title: "Learn PHP The Right Way | 30 Days Extensive PHP Course",
      link: "#",
    },
    {
      img: "images/Blog/post-8.jpg",
      title: "Master React and Build Scalable Applications",
      link: "#",
    },
    {
      img: "images/Blog/post-4.png",
      title: "Understanding JavaScript Closures in Depth",
      link: "#",
    },
    
    // Add more blog data as needed
  ];

  return (
    <div className="tech-blog">
      <div className='tech-blog-box1'>
        <h2>Featured Blogs</h2>
        <p>Explore some of our latest blogs</p>
      </div>

      <div className="featuredBlogsWrapper">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="featuredBlog">
              <img src={`${process.env.PUBLIC_URL}/${blog.img}`} alt="Featured blog" />
              <h5 style={{ display: '-webkit-box',WebkitBoxOrient: 'vertical',
                overflow: 'hidden',WebkitLineClamp: 2,textOverflow: 'ellipsis',   
                height: '60px',margin: '20px 0'}}> {blog.title}
              </h5>
              <button onClick={() => window.location.href = blog.link}>Read More</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechBlog;
