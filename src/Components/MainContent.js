import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CtaButton from "./CtaButton";
import Navigation from "./Navigation";
import SmallHeading from "./SmallHeading";
import blockchain from "../img/id -01(12).png";

function MainContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Only once animation on scroll
    });
  }, []);

  return (
    <MainContentStyled>
      <Navigation />
      <div className="content">
        <div className="left" data-aos="fade-right">
          <SmallHeading title={"THE IDENHILLS"} identifier={"Before"} />
          <h1>
            " Identify Yourself
            <br />
            Reveal What You Could Be "
          </h1>
          <div className="btns-con" id="who-we-are">
            <CtaButton name={"#who-we-are"} />
          </div>
        </div>
        <div className="right" data-aos="fade-left">
          <img src={blockchain} alt="IDENHILLS Logo" />
        </div>
      </div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 60%;
    width: 100%;

    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 80px;

      h1 {
        padding: 1.8rem 0;
        font-size: 2.5rem; /* Default font size */

        @media (max-width: 810px) {
          padding: 2px;
          margin-right: 50px;
          gap: 2px;
        }

        @media (max-width: 425px) {
          font-size: 1.5rem; /* Adjusted font size for mobile view */
          padding: 0; /* Remove padding for mobile view */
          margin: 0; /* Remove margin for mobile view */
        }
      }

      .btns-con {
        margin-top: 4rem;
        margin-left: -2rem;

        @media (max-width: 425px) {
          margin-top: 1rem; /* Adjusted margin for mobile view */
          margin-left: 0; /* Remove left margin for mobile view */
        }
      }
    }

    .right {
      img {
        position: absolute;
        right: -23%;
        bottom: -32%;
        width: 90%;

        @media (max-width: 810px) {
          width: 90%;
          right: -15%;
          bottom: -2%;
        }

        @media (max-width: 425px) {
          display: none; /* Hide image for mobile view */
        }
      }
    }
  }

  @media (max-width: 425px) {
    .content {
      grid-template-columns: 1fr; /* Single column layout for mobile view */
      height: 70vh; /* Adjust height for mobile view */
      
      .left {
        width: 100%; /* Full width for the left section */
        
        h1 {
          font-size: 1.5rem; /* Adjust font size for mobile view */
        }
      }
    }
  }

  @media (max-width: 810px) {
    .content {
      .left {
        h1 {
          font-size: 2rem; /* Adjust font size for tablet view */
          margin: auto;
        }
        .Before {
          font-size: 2rem;
          margin-top: 74px;
        }
      }
    }
  }
`;

export default MainContent;