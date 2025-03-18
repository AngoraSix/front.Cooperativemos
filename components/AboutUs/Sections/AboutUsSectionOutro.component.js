import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const AboutUsSectionOutro = ({ }) => {
  const { t } = useTranslation('aboutus');

  return (
    <Box className="AboutUsSectionOutro__Container">
      <Box className="AboutUsSectionOutro__Phrase__Container">
        <Typography variant="overline" color="secondary"
          className="AboutUsSectionOutro__Phrase__Text">{t('aboutus.outro.phrase')}</Typography>
      </Box>
      <Box className="AboutUsSectionOutro__Title__Container">
        <Typography variant="h4"
          className="AboutUsSectionOutro__Title__Text">{t('aboutus.outro.title')}</Typography>
      </Box>
      <Box className="AboutUsSectionOutro__Text__Container">
        <Typography variant="body4"
          className="AboutUsSectionOutro__Text__Text">{t('aboutus.outro.text')}</Typography>
      </Box>
      <Box className="AboutUsSectionOutro__StartNow__Container">
        <Link href={"/start-now"}>
          <Button
            variant="contained"
          >
            <Typography className="AboutUsSectionOutro__StartNow__Button__Text" variant="body2" textTransform={'initial'}>{t('aboutus.outro.startnow.button')}</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

AboutUsSectionOutro.propTypes = {
};

export default AboutUsSectionOutro;
