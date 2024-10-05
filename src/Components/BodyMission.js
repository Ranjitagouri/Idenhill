import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import MainTitle from './MainTitle';
import IMG1 from '../img/mission.jpg';

import 'aos/dist/aos.css';

const TitleWrapper = styled.div`
  text-align: center; 
  margin-top: 3rem; 
`;

function BodyMission() {
  return (
    <BodyMissionStyled>
      <InnerLayout>
        <TitleWrapper>
          <MainTitle title={'OUR MISSION'} />
        </TitleWrapper>
        <div className="content" data-aos="fade-up">
          <div className="left">
            <p>
              At IDENHILLS, our mission is to revolutionize the way organizations approach human resources, fostering environments where every individual is valued, empowered, and positioned for success. We are committed to delivering innovative solutions that optimize talent management, drive organizational growth, and cultivate a vibrant workplace cultures.
            </p>
          </div>
          <div className="right">
            <img src={IMG1} alt="Team Staff 3" />
          </div>
        </div>
      </InnerLayout>
    </BodyMissionStyled>
  );
}

const BodyMissionStyled = styled.div`
h2{
font-size: 36px;
}
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; 
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 425px) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  .left {
    flex: 1; 
    text-align: left;

    @media (max-width: 425px) {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .right {
    flex: 1; 
    margin-left: 2rem; 
    text-align: right;

    @media (max-width: 425px) {
      margin-left: 0;
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

    @media (max-width: 425px) {
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem; 
    }
      }
       
  
`;

export default BodyMission;











