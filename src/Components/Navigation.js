


import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from '../img/id -01.png';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled isOpen={isOpen}>
      <div className="logo">
        <img src={logo} alt="IDENHILLS Logo" />
      </div>
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onMouseEnter={() => setIsOpen(true)}
      >
        {isOpen ? <AiOutlineClose onClick={toggleMenu} /> : <HamburgerLines />}
      </div>
      <ul className={`nav-items ${isOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
        <li>
          <a href="#who-we-are">WHO WE ARE</a>
        </li>
        <li>
          <a href="#what-we-do">WHAT WE DO</a>
        </li>
        <li>
          <a href="#features">FEATURES</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <Link to="/login">ADMIN</Link>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const HamburgerLines = () => (
  <>
    <span></span>
    <span></span>
    <span></span>
  </>
);

const NavigationStyled = styled.nav`
  height: 81px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  margin-top: 1.2rem;

  .nav-items {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin: 0 1rem;
    }
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      transition: background 0.3s ease;

      &:hover {
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    @media (max-width: 810px) {
      flex-direction: row;
      position: static;
      background: none;
      box-shadow: none;
      padding: 0;
      width: auto;

      li {
        margin: 0 0.5rem; /* Adjusted margin */
        text-align: center;
        font-size: 12px; /* Reduced font size for smaller screens */
      }

      a {
        display: block;
        padding: 1rem 0;
      font-size: 12px;
        
      }
    }

    @media (max-width: 425px) {
      display: ${(props) => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      color: black;
      height: 40vh;
      padding-top: 0px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      z-index: 10;
      width: 57vw;
      line-height: 0px;
      margin-left: 130px;
      top: -25px;

      li {
        margin: 1rem 0;
        text-align: center;
      }

      a {
        width: 100%;
        display: block;
        padding: 1rem 0;
        color: black;
      }
    }

    &.open {
      display: flex;
    }
  }

  .logo {
    img {
      width: 120px;
      margin-left: -60px;
      margin-top: 10px;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 20;
    margin-right: -35px;

    span {
      height: 3px;
      width: 25px;
      background: white;
      margin: 4px 0;
      transition: all 0.3s ease;
    }

    @media (max-width: 425px) {
      display: flex;

      &:hover + .nav-items {
        display: flex;
      }
    }

    &.open {
      svg {
        height: 28px;
        width: 28px;
        color: black;
        margin-right: -28px;
        margin-bottom: 75px;
        z-index: 25;
      }
    }
  }
`;

export default Navigation;
