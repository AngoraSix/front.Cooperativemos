import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SECTIONINTRO_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section01-intro.png';

const SectionIntro = ({ }) => {
  const { t } = useTranslation('landing');

  return (
    <Box className="SectionIntro__Container">
      <Box className="SectionIntro__Image__Container">
        <Image
          className="Landing__Feature__Image"
          src={SECTIONINTRO_IMAGE}
          alt="Intro"
          title="Intro"
          placeholder="blur"
          blurDataURL={SECTIONINTRO_IMAGE}
          sx={{ priority: { xs: false, md: true } }}
          fill
          sizes="(max-width: 600px) 337px 460px,
          337px 460px"
        />
      </Box>
      <Box className="SectionIntro__Slogan__Container">
        <Typography variant="overline" color="secondary"
          className="SectionIntro__Slogan__Text">{t('landing.intro.slogan.text')}</Typography>
      </Box>
      <Box className="SectionIntro__CatchPhrase__Container">
        <Typography variant="h4"
          className="SectionIntro__CatchPhrase__Text">{t('landing.intro.catchphrase.text')}</Typography>
      </Box>
      <Box className="SectionIntro__Value__Container">
        <Typography variant="body1"
          className="SectionIntro__Value__Text">{t('landing.intro.value.text')}</Typography>
      </Box>
      <Box className="SectionIntro__StartNow__Container">
        <Link href={"/start-now"}>
          <Button
            variant="contained"
          >
            <Typography className="SectionIntro__StartNow__Button_Text" variant="body2" textTransform={'initial'}>{t('landing.intro.startnow.button')}</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

SectionIntro.propTypes = {
};

export default SectionIntro;
