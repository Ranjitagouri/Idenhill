import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faHandshake, faUsers, faShieldAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';

const Icons1Page = () => {
  return (
    <Icons1Styled>
      <div className="services-container">
        <h1>Our HR Services</h1>
        <Grid container spacing={2} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faSearch} /> Recruitment And Talent Acquisition</h2>
              <p>Finding the right talent can be a daunting task. Our team specializes in sourcing, screening, and selecting top-tier candidates who align with your organization’s values, goals, and culture. Whether you are looking for executive leadership or entry-level staff, we have the tools and expertise to streamline your recruitment process and secure the best talent for your team.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faLightbulb} /> HR Strategy and Planning</h2>
              <p>A well-defined HR strategy is essential for driving organizational growth and success. We work closely with your leadership team to develop strategic HR plans that align with your business objectives. From workforce planning and succession planning to organizational design and restructuring, we provide actionable insights and guidance to help you optimize your human capital strategy.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faHandshake} /> Interview Coordination and Candidate Experience</h2>
              <p>We understand that each candidate interaction is an opportunity to showcase your company's values and culture. By meticulously managing every step of the interview process, we ensure that candidates feel valued and respected, leading to increased engagement and a higher likelihood of successful hires. With our comprehensive approach, you can rest assured that your hiring process is in capable hands, allowing you to focus on building strong relationships with potential employees and driving your business forward.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faUsers} /> Employee Relations and Engagement</h2>
              <p>Engaged employees are key to a productive and high-performing workforce. Our consultants specialize in creating tailored employee engagement strategies designed to boost morale, enhance retention, and foster a positive workplace culture. From conducting employee surveys and feedback sessions to implementing recognition programs and wellness initiatives, we help you create an environment where your employees can thrive.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faShieldAlt} /> HR Compliance and Risk Management</h2>
              <p>Navigating the complex landscape of HR regulations and compliance requirements can be challenging. Our experts stay up-to-date on the latest laws and regulations to ensure your organization remains compliant with all applicable employment laws. We conduct thorough audits of your HR policies and practices, identify areas of risk, and provide practical solutions to mitigate potential liabilities.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service">
              <h2><FontAwesomeIcon icon={faChalkboardTeacher} /> Training and Development</h2>
              <p>Investing in employee development is crucial for maintaining a skilled and motivated workforce. We offer a range of training and development solutions designed to enhance the capabilities of your employees and drive performance improvement. From leadership development and soft skills training to technical skills workshops and onboarding programs, we equip your team with the knowledge and skills they need to succeed.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Icons1Styled>
  );
};

const Icons1Styled = styled.div`
overflow-x: hidden;
  background-color: #020A27;
  color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .services-container {
    max-width: 1200px;
    width: 100%;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 2rem;
    text-align: center;
  }

  .service {
    margin-bottom: 1.5rem;
    border: 2px solid #ffffff; /* Border color */
    padding: 1.5rem; /* Adjust padding as needed */
    border-radius: 8px; /* Optional: Rounded corners */
    height: 100%; /* Make each service box take full height */
    display: flex;
    flex-direction: column;
    position: relative; /* Positioning for absolute icon */
    overflow: hidden; /* Prevents overflow from affecting layout */
    transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
    cursor: pointer; /* Change cursor to pointer on hover */

    &:hover {
      transform: translateY(-8px); /* Move box up on hover */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
      color: #00FFFF; 
    border: 2px solid #00FFFF; 

    }

    h2 {
      transition: transform 0.3s ease; /* Slide text animation */
    }

    &:hover h2 {
      color: #ffffff;
      transform: translateY(-5px); /* Slide text up on hover */
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #00FFFF;
    display: flex;
    align-items: center;
    transition: color 0.3s ease, transform 0.3s ease;

    svg {
      margin-right: 0.5rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem; /* Space between icon and content */
  }

  @media (max-width: 600px) {
    .services-container {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      text-align: left;
    }
  }
`;

export default Icons1Page;
