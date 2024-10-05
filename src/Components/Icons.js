import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandshake, faUsers, faLeaf, faStar, faSmile, faChartLine, faSync } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';

const IconsComponent = () => {
  return (
    <IconsStyled>
      <div className="values-container">
        <h1>Our Values</h1>
        <Grid container spacing={2} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faUser} /> Empowerment</h2>
                <p>We believe in empowering individuals to reach their full potential by providing them with the resources, support and opportunities they need to succeed.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faHandshake} /> Integrity</h2>
                <p>We uphold the highest standards of integrity, honesty, and transparency in all of our interactions, ensuring that our clients and partners can trust us to act with professionalism and fairness at all times.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faUsers} /> Collaboration</h2>
                <p>We believe in the power of collaboration and teamwork, both within our organization and with our clients and partners. By working together, we can leverage our collective expertise and insights to achieve greater success than we could on our own.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faLeaf} /> Social Responsibility</h2>
                <p>We recognize our responsibility to make a positive impact on society and the communities in which we operate. Through our corporate social responsibility initiatives, we strive to give back to society, support environmental sustainability and promote social justice and equality.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faStar} /> Excellence</h2>
                <p>We are committed to excellence in everything we do, striving to deliver the highest quality services and solutions to our clients and partners. We hold ourselves to the highest standards of performance, always seeking to exceed expectations and drive meaningful results.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faSmile} /> Client-Centric</h2>
                <p>With a commitment to excellence, we go the extra mile to anticipate potential hurdles and provide proactive support, ensuring seamless implementation and lasting satisfaction. Our dedication to client-centricity drives every aspect of our service, empowering our clients to achieve their objectives with confidence and clarity.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faChartLine} /> Data-Driven</h2>
                <p>We believe in the power of data and analytics to drive informed decision-making. By leveraging data insights, we provide our clients with actionable recommendations and strategies that are grounded in evidence and proven to deliver results.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="value">
              <div className="value-content">
                <h2><FontAwesomeIcon icon={faSync} /> Continuous Improvement</h2>
                <p>We are committed to ongoing learning and development, both as individuals and as an organization. We continuously seek out opportunities to improve our skills, expand our knowledge and refine our processes to better serve our clients and drive positive change.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </IconsStyled>
  );
};

const IconsStyled = styled.div`
overflow-x: hidden;
  background-color: #020A27;
  color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .values-container {
    max-width: 1200px; /* Adjusted to fit larger screen widths */
    width: 100%;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 2rem;
    text-align: center;
  }

  .value {
    margin-bottom: 1.5rem;
    border: 2px solid #ffffff; /* Border color */
    padding: 1.5rem; /* Adjust padding as needed */
    border-radius: 8px; /* Optional: Rounded corners */
    display: flex;
    flex-direction: column;
    flex: 1; /* Ensure each .value takes equal space */
    height: 100%; /* Make each .value take full height */
    position: relative; /* Positioning for pseudo-element */
    overflow: hidden; /* Prevents overflow from affecting layout */
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transitions for hover effects */
  }

  .value:hover {
    transform: translateY(-8px); /* Move box up on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
    color: #00FFFF; /* Change border color on hover */
     border: 2px solid #00FFFF;
  }

  .value-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color:  #00FFFF ;
    display: flex;
    align-items: center;
    transition: color 0.3s ease, transform 0.3s ease; /* Smooth transitions for text effects */

    svg {
      margin-right: 0.5rem;
    }
  }

  .value:hover h2 {
    color: #ffffff; /* Change text color on hover */
    transform: translateY(-5px); /* Slide text up on hover */
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    transition: transform 0.3s ease; /* Smooth transition for text slide effect */
  }

  .value:hover p {
    transform: translateY(-5px); /* Slide text up on hover */
  }

  @media (max-width: 600px) {
    .values-container {
      padding: 0rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      text-align: left;
     
    }
  }
`;

export default IconsComponent;





