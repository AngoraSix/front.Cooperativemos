import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import AboutUsSectionAboutUs from './Sections/AboutUsSectionAboutUs.component';
import AboutUsSectionChallenges from './Sections/AboutUsSectionChallenges.component';
import AboutUsSectionHook from './Sections/AboutUsSectionHook.component';
import AboutUsSectionIntro from './Sections/AboutUsSectionIntro.component';
import AboutUsSectionWhy from './Sections/AboutUsSectionWhy.component';

const AboutUs = ({ }) => {
  const { t } = useTranslation('aboutus');

  return (
    <Box className="AboutUs AboutUs__Container">
      <Box className="AboutUs__Section__Container Section_Intro">
        <AboutUsSectionIntro />
      </Box>
      <Box className="AboutUs__Section__Container Section_AboutUs">
        <AboutUsSectionAboutUs />
      </Box>
      <Box className="AboutUs__Section__Container Section_Challenges">
        <AboutUsSectionChallenges />
      </Box>
      <Box className="AboutUs__Section__Container Section_Why">
        <AboutUsSectionWhy />
      </Box>
      <Box className="AboutUs__Section__Container Section_Hook">
        <AboutUsSectionHook />
      </Box>
    </Box>
  );
};

AboutUs.propTypes = {
};

export default AboutUs;
