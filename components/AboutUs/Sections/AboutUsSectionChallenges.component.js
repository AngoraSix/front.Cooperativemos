import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const AIMEDAT_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/about-us/section03-scenery.png';

const ImageComponent = () => <Box className="SectionChallenges__Image__Container">
  <Image
    className="SectionChallenges__Image"
    src={AIMEDAT_IMAGE}
    alt="Benefit"
    title="Benefit"
    placeholder="blur"
    blurDataURL={AIMEDAT_IMAGE}
    fill
    sizes="(max-width: 600px) 337px 460px,
  337px 460px"
  />
</Box>

const TitleComponent = ({ title, variant }) => <Box className="SectionChallenges__Main__Title__Container">
  <Typography variant={variant}
    className="SectionChallenges__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text, textVariant, bullet1, bullet2, bullet3, bullet4 }) => <Box className="SectionChallenges__Main__Text__Container">
  <ul class="SectionChallenges__Main__Text__Bullet">
    <li><Typography variant={textVariant} component="span"
      className="SectionChallenges__Main__Text">{bullet1}</Typography></li>
    <li><Typography variant={textVariant} component="span"
      className="SectionChallenges__Main__Text">{bullet2}</Typography></li>
    <li><Typography variant={textVariant} component="span"
      className="SectionChallenges__Main__Text">{bullet3}</Typography></li>
    <li><Typography variant={textVariant} component="span"
      className="SectionChallenges__Main__Text">{bullet4}</Typography></li>
  </ul>
  <Typography variant={textVariant}
    className="SectionChallenges__Main__Text">{text}</Typography>
</Box>

const SectionChallenges = ({ }) => {
  const { t } = useTranslation('aboutus');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionChallenges__Container">
      {isMobile ? (<>
        <TitleComponent title={t('aboutus.challenges.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent text={t('aboutus.challenges.main.text')} textVariant="body4" bullet1={t('aboutus.challenges.main.bullet1')}
        bullet2={t('aboutus.challenges.main.bullet2')}
        bullet3={t('aboutus.challenges.main.bullet3')}
        bullet4={t('aboutus.challenges.main.bullet4')} />
      </>) :
        (<>
          <Box className="SectionChallenges__Content__Container">
            <Box className="SectionChallenges__Content__Main__Container">
              <TitleComponent title={t('aboutus.challenges.main.title')} variant="h5" />
              <TextComponent text={t('aboutus.challenges.main.text')} textVariant="body1" />
            </Box>

            <Box className="SectionChallenges__Content__Details__Container">
              <Box className="SectionChallenges__Content__Details__Statement__Container Colaboration">
              </Box>
            </Box>
          </Box>
          <ImageComponent />
        </>)}
    </Box>
  );
};

SectionChallenges.propTypes = {
};

export default SectionChallenges;
