import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faIndustry, faUserCog, faCogs } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Icons2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <Icons2Styled id='features'>
      <div className="services-container">

        <h1>FEATURES</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <ServiceCard icon={faGavel} title="Ethical Practices">
              Integrity is at the core of everything we do. We adhere to the highest ethical standards in all our interactions, fostering trust and long-term relationships with both clients and candidates.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <ServiceCard icon={faIndustry} title="Industry Expertise">
              With years of experience in various industries, our team of recruitment specialists possesses in-depth knowledge and understanding of market trends, enabling us to provide strategic insights and guidance.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <ServiceCard icon={faUserCog} title="Personalized Approach">
              We understand that every client and candidate is unique. That's why we take the time to listen and understand their individual needs, ensuring a customized experience tailored to their requirements.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <ServiceCard icon={faCogs} title="Innovative Solutions">
              We leverage cutting-edge technology and innovative recruitment methodologies to streamline the hiring process and deliver optimal results promptly or on time.
            </ServiceCard>
          </Grid>
        </Grid>
      </div>
    </Icons2Styled>
  );
};

const ServiceCard = ({ icon, title, children }) => (
  <div className="service">
    <h2><FontAwesomeIcon icon={icon} /> {title}</h2>
    <p>{children}</p>
  </div>
);

const Icons2Styled = styled.div`
overflow-x: hidden;
overflow-y: hidden;
  background-color: #f0f0f0;
  color: #333;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .services-container {
    max-width: 800px;
    width: 100%;
    text-align: left;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 2rem;
    text-align: center;
  }

  .service {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: #333;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      color: #00FFFF; /* Adjust icon color */
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
  }
    @media (max-width: 600px) {
    p {
      font-size: 0.9rem;
      text-align: left;
}
       h2 {
    font-size: 1.5rem;
}
`;

export default Icons2;
