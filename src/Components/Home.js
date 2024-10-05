import React from 'react';
import BodyContent from './BodyContent';
import BodyMain from './BodyMain';
import BodyMission from './BodyMission';
import BodyVision from './BodyVision';
import ContactSection from './ContactSection';
import MainArea from './MainArea';
import BackToTop from './BackToTop';

const Home = () => {
  return (
    <div>
  <MainArea/>
      <BodyMain />
      <BodyVision />
      <BodyMission />
      <BodyContent />
      <ContactSection />
      <BackToTop/>
    </div>
  );
};

export default Home;
