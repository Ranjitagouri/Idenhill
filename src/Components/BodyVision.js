import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import MainTitle from "./MainTitle";
import IMG from "../img/vission.jpg";

import "aos/dist/aos.css";

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 0;
`;

function BodyVision() {
  return (
    <BodyVisionStyled>
      <InnerLayout>
        <TitleWrapper>
          <MainTitle title={"OUR VISION"} />
        </TitleWrapper>
        <div className="Content" data-aos="fade-up">
          <div className="left">
            <img src={IMG} alt="Team Staff 2" />
          </div>
          <div className="right">
            <p>
              Our vision is to inspire positive change in every facet of human
              interaction. The power of the human mind and talent is
              immeasurable, representing the pinnacle of creative potential and
              ingenuity. We aspire to be the beacon of progress, identifying the
              true potential in oneself, and unwavering commitment to excellence
              to empower individuals and organizations worldwide. Through our
              relentless pursuit of insight and integrity, we aim to redefine
              the possibilities, shaping a future where boundless opportunities
              flourish and humanity thrives.
            </p>
          </div>
        </div>
      </InnerLayout>
    </BodyVisionStyled>
  );
}

const BodyVisionStyled = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  h2 {
    font-size: 36px;
  }

  .Content {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 425px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .left {
    flex: 1;
    margin-right: 2rem;

    @media (max-width: 425px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .right {
    flex: 1;
    text-align: justify;

    @media (max-width: 425px) {
      text-align: left;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: justify;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      text-align: center;
    }
  }
`;

export default BodyVision;
