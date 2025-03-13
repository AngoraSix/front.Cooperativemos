import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const SECTIONABOUTUS_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/about-us/section04-laptop.png';

const ImageComponent = () => <Box className="SectionWhy__Image__Container">
  <Image
    className="SectionWhy__Image"
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

const TitleComponent = ({ title, variant }) => <Box className="SectionWhy__Main__Title__Container">
  <Typography variant={variant}
    className="SectionWhy__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text1, text2, text3, textVariant }) => <Box className="SectionWhy__Main__Text__Container">
  <Box className="SectionWhy__Main__Text__Paragraph">
    <Typography variant={textVariant}
      className="SectionWhy__Main__Text">{text1}</Typography>
  </Box>
  <Box className="SectionWhy__Main__Text__Paragraph">
    <Typography variant={textVariant}
      className="SectionWhy__Main__Text">{text2}</Typography>
  </Box>
  <Box className="SectionWhy__Main__Text__Paragraph">
    <Typography variant={textVariant}
      className="SectionWhy__Main__Text">{text3}</Typography>
  </Box>
</Box>

const SectionWhy = ({ }) => {
  const { t } = useTranslation('aboutus');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionWhy__Container">
      {isMobile ? (<>
        <TitleComponent title={t('aboutus.why.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent textVariant="body4" text1={t('aboutus.why.main.text1')}
          text2={t('aboutus.why.main.text2')}
          text3={t('aboutus.why.main.text3')} />
      </>) :
        (<>
          <ImageComponent />
          <Box className="SectionWhy__Content__Container">
            <Box className="SectionWhy__Content__Main__Container">
              <TitleComponent title={t('aboutus.why.main.title')} variant="h5" />
              <TextComponent textVariant="body1" text1={t('aboutus.why.main.text1')}
                text2={t('aboutus.why.main.text2')}
                text3={t('aboutus.why.main.text3')} />
            </Box>
          </Box>
        </>)}
    </Box>
  );
};

SectionWhy.propTypes = {
};

export default SectionWhy;
