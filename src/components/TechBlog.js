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
      img: "images/Blog/python-tech1.webp",
      title: "Exploring Python Advanced Data Structures for Efficient Coding",
      link: "blog/exploring-python-s-advanced-data-structures-for-efficient-coding",
    },
    {
      img: "images/Blog/trading1.webp",
      title: "Building Your First Expert Advisor in MQL5: A Beginner’s Guide",
      link: "blog/building-your-first-expert-advisor-in-mql5-a-beginner-s-guide",
    },
    {
      img: "images/Blog/php-tech2.webp",
      title: "PHP Security Best Practices: Safeguarding Your Web Applications",
      link: "blog/php-security-best-practices-safeguarding-your-web-applications",
    },
    {
      img: "images/Blog/mysql-tech2.webp",
      title: "Mastering MySQL Indexing for Better Query Performance",
      link: "blog/mastering-mysql-indexing-for-better-query-performance",
    },
    
    // Add more blog data as needed
  ];

  return (
    <div className="tech-blog">
      <div className='tech-blog-box1'>
        <h2>Featured Blogs</h2>
        <p>Innovative ideas in Software Development and Forex Trading.</p>
      </div>

      <div className="featuredBlogsWrapper">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="featuredBlog">
              <img src={`${process.env.PUBLIC_URL}/${blog.img}`} alt="Featured blog" />
              <h5 style={{ display: '-webkit-box',WebkitBoxOrient: 'vertical',
                overflow: 'hidden',WebkitLineClamp: 2,textOverflow: 'ellipsis',   
                height: '50px',margin: '20px 0', marginTop: '5px'}}> {blog.title}
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
