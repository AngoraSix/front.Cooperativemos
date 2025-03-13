import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SECTIONINTRO_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/about-us/section01-logodark-square.png';

const AboutUsSectionIntro = ({ }) => {
  const { t } = useTranslation('aboutus');

  return (
    <Box className="AboutUsSectionIntro__Container">
      <Box className="AboutUsSectionIntro__Image__Container">
        <Image
          className="AboutUsSectionIntro__Image"
          src={SECTIONINTRO_IMAGE}
          alt="Intro"
          title="Intro"
          placeholder="blur"
          blurDataURL={SECTIONINTRO_IMAGE}
          fill
          sizes="(max-width: 600px) 27vh,
          27vh"
        />
      </Box>
      <Box className="AboutUsSectionIntro__Question__Container">
        <Typography variant="overline" color="secondary"
          className="AboutUsSectionIntro__Question__Text">{t('aboutus.intro.question.text')}</Typography>
      </Box>
      <Box className="AboutUsSectionIntro__Response__Container">
        <Typography variant="h4"
          className="AboutUsSectionIntro__Response__Text">{t('aboutus.intro.response.text')}</Typography>
      </Box>
    </Box>
  );
};

AboutUsSectionIntro.propTypes = {
};

export default AboutUsSectionIntro;
