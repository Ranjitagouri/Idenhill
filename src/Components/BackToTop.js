

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import the upward arrow icon

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  };

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <BackToTopButton onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </BackToTopButton>
      )}
    </>
  );
};

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.5rem; 
  border-radius: 20%;

  &:hover {
    background-color: #0056b3;
  }
`;

export default BackToTop;
