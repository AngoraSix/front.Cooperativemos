import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import SectionBenefit from './Sections/SectionBenefit.component';
import SectionIntro from './Sections/SectionIntro.component';


const Lanading = ({ }) => {
  const { t } = useTranslation('landing');

  return (
    <Box className="Lanading Lanading__Container">
      <Box className="Landing__Section__Container Section_Intro">
        <SectionIntro />
      </Box>
      <Box className="Landing__Section__Container Section_Benefit">
        <SectionBenefit />
      </Box>
      <Box className="Landing__Section__Container Section_AimedAt">

      </Box>
      <Box className="Landing__Section__Container Section_Hook">

      </Box>
    </Box>
  );
};

Lanading.propTypes = {
};

export default Lanading;
