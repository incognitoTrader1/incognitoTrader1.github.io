import React, { useState, useEffect } from 'react';
import './TypewriterEffect.css'; // Optional for styling the cursor

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const messages = ["Software Engineer.", "Full-stack Web Developer.", "Tech Content Creator."];
  const [typingSpeed, setTypingSpeed] = useState(150); // Control typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentMessage = messages[index];
      if (!deleting) {
        // Typing phase: add one letter at a time
        setText((prev) => currentMessage.substring(0, prev.length + 1));
        setTypingSpeed(150); // Speed for typing

        if (text === currentMessage) {
          setTimeout(() => setDeleting(true), 1500); // Wait before starting to delete
        }
      } else {
        // Deleting phase: remove one letter at a time
        setText((prev) => currentMessage.substring(0, prev.length - 1));
        setTypingSpeed(50); // Speed for deleting

        if (text === '') {
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Clean up the timer
  }, [text, deleting, index, typingSpeed]);

  return (
    <p className='dynaTypeProp h1_subheading'> 
      {text}
      <span className="cursor">|</span>
    </p>
  );
};

export default TypewriterEffect;
