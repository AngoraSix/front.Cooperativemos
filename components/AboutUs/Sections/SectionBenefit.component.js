import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const SECTIONBENEFIT_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section02-benefit.png';

const ImageComponent = () => <Box className="SectionBenefit__Image__Container">
  <Image
    className="SectionBenefit__Image"
    src={SECTIONBENEFIT_IMAGE}
    alt="Benefit"
    title="Benefit"
    placeholder="blur"
    blurDataURL={SECTIONBENEFIT_IMAGE}
    fill
    sizes="(max-width: 600px) 337px 460px,
  337px 460px"
  />
</Box>

const TitleComponent = ({ title, variant }) => <Box className="SectionBenefit__Main__Title__Container">
  <Typography variant={variant}
    className="SectionBenefit__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text, textVariant }) => <Box className="SectionBenefit__Main__Text__Container">
  <Typography variant={textVariant}
    className="SectionBenefit__Main__Text">{text}</Typography>
</Box>

const ValueColaborationComponent = ({ title, text, variantTitle, textVariant }) =>
  <Box className="SectionBenefit__Content__Details__Value__Container Colaboration">
    <Box className="SectionBenefit__Content__Details__Value__Icon__IconWithCircle__Container">
      <Box className="SectionBenefit__Content__Details__Value__Icon__IconWithCircle">
        <Box className="SectionBenefit__Content__Details__Value__Icon__Circle Blue">
        </Box>
        <Box className="SectionBenefit__Content__Details__Value__Icon__Container">
          <LeakAddIcon className="SectionBenefit__Content__Details__Value__Icon__Icon" fontSize="large" />
        </Box>
      </Box>
    </Box>
    <Box className="SectionBenefit__Content__Details__Value__Data__Container">
      <Box className="SectionBenefit__Content__Details__Value__Data__Title">
        <Typography variant={variantTitle}
          className="SectionBenefit__Value__Title">{title}</Typography></Box>
      <Box className="SectionBenefit__Content__Details__Value__Data_Text">
        <Typography variant={textVariant}
          className="SectionBenefit__Value__Text">{text}</Typography></Box>
    </Box>
  </Box>

const ValueTransparencyComponent = ({ title, text, variantTitle, textVariant }) => <Box className="SectionBenefit__Content__Details__Value__Container Transparency">
  <Box className="SectionBenefit__Content__Details__Value__Icon__Container">
    <Box className="SectionBenefit__Content__Details__Value__Icon__IconWithCircle__Container">
      <Box className="SectionBenefit__Content__Details__Value__Icon__IconWithCircle">
        <Box className="SectionBenefit__Content__Details__Value__Icon__Circle Red">
        </Box>
        <Box className="SectionBenefit__Content__Details__Value__Icon__Container">
          <GraphicEqIcon className="SectionBenefit__Content__Details__Value__Icon__Icon" fontSize="large" />
        </Box>
      </Box>
    </Box>
  </Box>
  <Box className="SectionBenefit__Content__Details__Value__Data__Container">
    <Box className="SectionBenefit__Content__Details__Value__Data__Title">
      <Typography variant={variantTitle}
        className="SectionBenefit__Value__Title">{title}</Typography></Box>
    <Box className="SectionBenefit__Content__Details__Value__Data_Text">
      <Typography variant={textVariant}
        className="SectionBenefit__Value__Text">{text}</Typography></Box>
  </Box>
</Box>

const SectionBenefit = ({ }) => {
  const { t } = useTranslation('landing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionBenefit__Container">
      {isMobile ? (<>
        <TitleComponent title={t('landing.benefit.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent text={t('landing.benefit.main.text')} textVariant="body4" />
        <ValueColaborationComponent title={t('landing.benefit.value.colaboration.title')} text={t('landing.benefit.value.colaboration.text')} variantTitle="h6" textVariant="body3" />
        <ValueTransparencyComponent title={t('landing.benefit.value.transparency.title')} text={t('landing.benefit.value.transparency.text')} variantTitle="h6" textVariant="body3" />
      </>) :
        (<>
          <ImageComponent />
          <Box className="SectionBenefit__Content__Container">
            <Box className="SectionBenefit__Content__Main__Container">
              <TitleComponent title={t('landing.benefit.main.title')} variant="h5" />
              <TextComponent text={t('landing.benefit.main.text')} textVariant="body1" />
            </Box>

            <Box className="SectionBenefit__Content__Details__Container">
              <Box className="SectionBenefit__Content__Details__Value__Container Colaboration">
                <ValueColaborationComponent title={t('landing.benefit.value.colaboration.title')} text={t('landing.benefit.value.colaboration.text')} variantTitle="subtitle1B" textVariant="body2B" />
              </Box>

              <Box className="SectionBenefit__Content__Details__Value__Container Transparency">
                <ValueTransparencyComponent title={t('landing.benefit.value.transparency.title')} text={t('landing.benefit.value.transparency.text')} variantTitle="subtitle1B" textVariant="body2B" />
              </Box>
            </Box>
          </Box>
        </>)}
    </Box>
  );
};

SectionBenefit.propTypes = {
};

export default SectionBenefit;
