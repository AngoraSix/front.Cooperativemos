import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import SectionAimedAt from './Sections/SectionAimedAt.component';
import SectionBenefit from './Sections/SectionBenefit.component';
import SectionHook from './Sections/SectionHook.component';
import SectionIntro from './Sections/SectionIntro.component';

const AboutUs = ({ }) => {
  const { t } = useTranslation('landing');

  return (
    <Box className="AboutUs AboutUs__Container">
      <Box className="AboutUs__Section__Container Section_Intro">
        <SectionIntro />
      </Box>
      <Box className="AboutUs__Section__Container Section_Benefit">
        <SectionBenefit />
      </Box>
      <Box className="AboutUs__Section__Container Section_AimedAt">
        <SectionAimedAt />
      </Box>
      <Box className="AboutUs__Section__Container Section_Hook">
        <SectionHook />
      </Box>
    </Box>
  );
};

AboutUs.propTypes = {
};

export default AboutUs;
