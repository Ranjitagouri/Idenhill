
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import MainTitle from './MainTitle';
import IMG2 from '../img/office2.jpg';
import IMG1 from '../img/teamstaff.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;

`;

function BodyHead() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <BodyHeadStyled id='what-we-do'>
      <InnerLayout>
        <TitleWrapper data-aos="fade-up">
          <MainTitle title={'WHAT WE DO'} />
        </TitleWrapper>
        <p data-aos="fade-up">At Idenhills Pvt Ltd, we don't just identify talent; we empower success.</p>
        <div className="content" data-aos="fade-up">
          <div className="left" data-aos="fade-right">
            <img src={IMG1} alt="Team Staff 1" />
          </div>
          <div className="right" data-aos="fade-left">
            <img src={IMG2} alt="office" />
          </div>
        </div>
      </InnerLayout>
    </BodyHeadStyled>
  );
}

const BodyHeadStyled = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 425px) {
      flex-direction: column;
    }
  }

  .left,
  .right {
    flex: 1;
    text-align: center;
    padding: 0 1rem;

    @media (max-width: 425px) {
      padding: 0;
    }
  }

  img {
    width: 600px;
    height: 400px;
    border-radius: 8px;
    object-fit: cover;

    @media (max-width: 425px) {
      max-width: 100%;
      height: auto;
    }
  }

  p {
    font-size: 1.4rem; /* Adjusted font size for desktop view */
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: justify;
    justify-content: center;
    position: relative;
    display: flex;

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Optional: Adjust font size for tablets */
    }
  }

`;

export default BodyHead;
