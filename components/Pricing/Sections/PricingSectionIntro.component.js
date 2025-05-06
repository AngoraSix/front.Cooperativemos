import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SECTIONINTRO_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/pricing/section-03-pricing.jpg';

const PricingSectionIntro = ({ }) => {
  const { t } = useTranslation('pricing');

  return (
    <Box className="PricingSectionIntro__Container">
      <Box className="PricingSectionIntro__Image__Container">
        <Image
          className="PricingSectionIntro__Image"
          src={SECTIONINTRO_IMAGE}
          alt="Intro"
          title="Intro"
          placeholder="blur"
          blurDataURL={SECTIONINTRO_IMAGE}
          fill
          sizes="(max-width: 600px) 23vh,
              23vh"
        />
      </Box>
      <Box className="PricingSectionIntro__ForYou__Container">
        <Typography variant="overline" color="secondary"
          className="PricingSectionIntro__ForYou__Text">{t('pricing.intro.foryou.text')}</Typography>
      </Box>
      <Box className="PricingSectionIntro__Value__Container">
        <Typography variant="h4"
          className="PricingSectionIntro__Value__Text">{t('pricing.intro.value.text')}</Typography>
      </Box>
    </Box>
  );
};

PricingSectionIntro.propTypes = {
};

export default PricingSectionIntro;
