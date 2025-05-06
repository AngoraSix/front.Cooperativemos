import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import PricingSectionIntro from './Sections/PricingSectionIntro.component';
import PricingSectionPrices from './Sections/PricingSectionPrices.component';

const Pricing = ({ }) => {
  const { t } = useTranslation('pricing');

  return (
    <Box className="Pricing Pricing__Container">
      <Box className="Pricing__Section__Container Section_Intro">
        <PricingSectionIntro />
      </Box>
      <Box className="Pricing__Section__Container Section_Prices">
        <PricingSectionPrices />
      </Box>
    </Box>
  );
};

Pricing.propTypes = {
};

export default Pricing;
