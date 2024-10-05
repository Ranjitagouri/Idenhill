
 import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import MainTitle from './MainTitle';
import IMG1 from '../img/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

function BodyMain() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Only once animation on scroll
    });
  }, []);

  return (
    <BodyMainStyled id="who-we-are">
      <InnerLayout>
        <TitleWrapper>
          <MainTitle
            title={'WHO WE ARE'}
            subtitle={'Welcome to IDENHILLS The Talent Acquisition Experts'}
          />
        </TitleWrapper>

        <div className="para" data-aos="fade-up">
          <p>
            At IDENHILLS we understand that identifying oneself is the key to
            success. We also believe that the success of any organization hinges
            upon its people. Our tagline, 'Identify Yourself', encapsulates our
            commitment to assisting individuals and organizations to unleash the
            power within themselves. That’s why we are dedicated to providing
            comprehensive talent acquisition consulting services tailored to
            meet the unique needs of your business. With our expertise and
            commitment to excellence, we empower organizations to build strong
            capable teams and foster a thriving workplace culture.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
          <img src={IMG1} alt="Team Staff 3" />
        </div>

        <div className="content" data-aos="fade-up">
          <div className="left">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <strong>Expertise:</strong> Our team of experienced HR
                consultants brings a wealth of knowledge and expertise to every
                project. With backgrounds in diverse industries and specialties,
                we have the insight and skills to address even the most complex
                HR challenges.
              </li>
              <li>
                <strong>Customized Solutions:</strong> We understand that every
                organization is different. That’s why we take a customized
                approach to every project, adapting our services to fit your
                specific goals, challenges,and budgetary constraints.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We prioritize client
                satisfaction above all else.From the initial consultation to
                the implementation of our recommendations, we work closely with
                you every step of the way to ensure our services meet your
                unique needs and exceed your expectations.
              </li>
              <li>
                <strong>Long-Term Partnerships:</strong> We are committed to
                building long-term partnerships with our clients. Whether you
                need ongoing HR support or assistance with a specific project,
                you can count on us to be there for you every step of the way.
              </li>
            </ul>
            <p>
              Get Started Today. Ready to reveal what you could be? Together,
              we’ll develop a customized solution that meets your organization’s
              unique needs and helps you achieve your business objectives. Let
              IDENHILLS Talent Acquisition team be your trusted partner in
              building a stronger, more resilient workforce.
            </p>
          </div>
        </div>
      </InnerLayout>
    </BodyMainStyled>
  );
}

const BodyMainStyled = styled.div`
 overflow-x: hidden;
overflow-y:hidden;
  padding: 0;
  .TitleWrapper {
  padding: 0px;
  }
  .para {     display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: justify; /* Added to justify text in the .para div */
  }
  .content {
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px;
  }

  .left {
    flex: 1; /* Take up all available space in the flex container */
     text-align: left; /* Ensures text is aligned left within its container */
     padding-top: 20px;
     text-align: justify; /* Added to justify text in the .left div */
   }

  .right {
    flex: 1; /* Take up all available space in the flex container */
    margin-left: 2rem; /* Optional spacing between text and image */
    text-align: center; /* Ensures image is aligned center within its container */
    display: flex;   
      justify-content: center;  
       }
    h2{
      font-size:36px;      
       font-weight:bold;   
         }

   img {    
    max-width: 50%;    
     height: auto;
    border-radius: 8px;

     @media (max-width: 425px) {
      display: none;
     }

     @media (max-width: 768px) {
      max-width: 80%; /* Adjusted width for tablet view */
       margin-top: 1rem; /* Optional margin for better spacing */
     }
   }

  h2 {
     text-align: center;     margin-bottom: 2rem;   }

  ul {
    list-style-type: disc;
    margin-left: 20px;   }

   li {
     opacity: 0.7;
     font-size: 1.2rem;
     line-height: 1.6;
    margin-bottom: 0.5rem; /* Increased bottom margin for separation */
     text-align: left; /* Ensures list items are justified */   }

   p {     opacity: 0.7;
    margin-bottom: 1.5rem; /* Increased bottom margin for separation */
    text-align: left; /* Ensures paragraphs are justified */
     padding: 14px;
   }
 `;

export default BodyMain;

