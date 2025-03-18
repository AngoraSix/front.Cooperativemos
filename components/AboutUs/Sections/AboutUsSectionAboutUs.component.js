import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const SECTIONABOUTUS_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/about-us/section02-hands.png';

const ImageComponent = () => <Box className="SectionAboutUs__Image__Container">
  <Image
    className="SectionAboutUs__Image"
    src={SECTIONABOUTUS_IMAGE}
    alt="Benefit"
    title="Benefit"
    placeholder="blur"
    blurDataURL={SECTIONABOUTUS_IMAGE}
    fill
    sizes="(max-width: 600px) 337px 460px,
  337px 460px"
  />
</Box>

const TitleComponent = ({ title, variant }) => <Box className="SectionAboutUs__Main__Title__Container">
  <Typography variant={variant}
    className="SectionAboutUs__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text1, text2, textVariant }) => <Box className="SectionAboutUs__Main__Text__Container">
  <Typography variant={textVariant}
    className="SectionAboutUs__Main__Text">{text1}</Typography>
  <Typography variant={textVariant}
    className="SectionAboutUs__Main__Text">{text2}</Typography>
</Box>

const SectionAboutUs = ({ }) => {
  const { t } = useTranslation('aboutus');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionAboutUs__Container">
      {isMobile ? (<>
        <TitleComponent title={t('aboutus.aboutus.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent text1={t('aboutus.aboutus.main.text1')} text2={t('aboutus.aboutus.main.text2')} textVariant="body4" />
      </>) :
        (<>
          <ImageComponent />
          <Box className="SectionAboutUs__Content__Container">
            <Box className="AboutUsSection__Content__Main__Container Right SectionAboutUs__Content__Main__Container">
              <TitleComponent title={t('aboutus.aboutus.main.title')} variant="h5" />
              <TextComponent text1={t('aboutus.aboutus.main.text1')} text2={t('aboutus.aboutus.main.text2')} textVariant="body1" />
            </Box>
          </Box>
        </>)}
    </Box>
  );
};

SectionAboutUs.propTypes = {
};

export default SectionAboutUs;
