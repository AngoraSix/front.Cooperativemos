import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const SECTIONINTRO_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section03-aimedat.png';

const ImageComponent = () => <Box className="SectionAimedAt__Image__Container">
  <Image
    className="SectionAimedAt__Image"
    src={SECTIONINTRO_IMAGE}
    alt="Benefit"
    title="Benefit"
    placeholder="blur"
    blurDataURL={SECTIONINTRO_IMAGE}
    fill
    sizes="(max-width: 600px) 337px 460px,
  337px 460px"
  />
</Box>

const TitleComponent = ({ title, variant }) => <Box className="SectionAimedAt__Main__Title__Container">
  <Typography variant={variant}
    className="SectionAimedAt__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text }) => <Box className="SectionAimedAt__Main__Text__Container">
  <Typography variant="body4"
    className="SectionAimedAt__Main__Text">{text}</Typography>
</Box>

const ValueColaborationComponent = ({ title, text }) =>
  <Box className="SectionAimedAt__Content__Details__Value__Container Colaboration">
    <Box className="SectionAimedAt__Content__Details__Value__Icon__IconWithCircle__Container">
      <Box className="SectionAimedAt__Content__Details__Value__Icon__IconWithCircle">
        <Box className="SectionAimedAt__Content__Details__Value__Icon__Circle Blue">
        </Box>
        <Box className="SectionAimedAt__Content__Details__Value__Icon__Container">
          <LeakAddIcon className="SectionAimedAt__Content__Details__Value__Icon__Icon" fontSize="large" />
        </Box>
      </Box>
    </Box>
    <Box className="SectionAimedAt__Content__Details__Value__Data__Container">
      <Box className="SectionAimedAt__Content__Details__Value__Data__Title">
        <Typography variant="h6"
          className="SectionAimedAt__Value__Title">{title}</Typography></Box>
      <Box className="SectionAimedAt__Content__Details__Value__Data_Text">
        <Typography variant="body3"
          className="SectionAimedAt__Value__Text">{text}</Typography></Box>
    </Box>
  </Box>

const ValueTransparencyComponent = ({ title, text }) => <Box className="SectionAimedAt__Content__Details__Value__Container Transparency">
  <Box className="SectionAimedAt__Content__Details__Value__Icon__Container">
    <Box className="SectionAimedAt__Content__Details__Value__Icon__IconWithCircle__Container">
      <Box className="SectionAimedAt__Content__Details__Value__Icon__IconWithCircle">
        <Box className="SectionAimedAt__Content__Details__Value__Icon__Circle Red">
        </Box>
        <Box className="SectionAimedAt__Content__Details__Value__Icon__Container">
          <GraphicEqIcon className="SectionAimedAt__Content__Details__Value__Icon__Icon" fontSize="large" />
        </Box>
      </Box>
    </Box>
  </Box>
  <Box className="SectionAimedAt__Content__Details__Value__Data__Container">
    <Box className="SectionAimedAt__Content__Details__Value__Data__Title">
      <Typography variant="h6"
        className="SectionAimedAt__Value__Title">{title}</Typography></Box>
    <Box className="SectionAimedAt__Content__Details__Value__Data_Text">
      <Typography variant="body3"
        className="SectionAimedAt__Value__Text">{text}</Typography></Box>
  </Box>
</Box>

const SectionAimedAt = ({ }) => {
  const { t } = useTranslation('landing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionAimedAt__Container">
      {isMobile ? (<>
        <TitleComponent title={t('landing.benefit.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent text={t('landing.benefit.main.text')} />
        <ValueColaborationComponent title={t('landing.benefit.value.colaboration.title')} text={t('landing.benefit.value.colaboration.text')} />
        <ValueTransparencyComponent title={t('landing.benefit.value.transparency.title')} text={t('landing.benefit.value.transparency.text')} />
      </>) :
        (<>
          <ImageComponent />
          <Box className="SectionAimedAt__Content__Container">
            <Box className="SectionAimedAt__Content__Main__Container">
              <TitleComponent title={t('landing.benefit.main.title')} variant="h6" />
              <TextComponent text={t('landing.benefit.main.text')} />
            </Box>

            <Box className="SectionAimedAt__Content__Details__Container">

              <Box className="SectionAimedAt__Content__Details__Value__Container Colaboration">
                <ValueColaborationComponent title={t('landing.benefit.value.colaboration.title')} text={t('landing.benefit.value.colaboration.text')} />
              </Box>

              <Box className="SectionAimedAt__Content__Details__Value__Container Transparency">
                <ValueTransparencyComponent title={t('landing.benefit.value.transparency.title')} text={t('landing.benefit.value.transparency.text')} />
              </Box>
            </Box>
          </Box>
        </>)}
    </Box>
  );
};

SectionAimedAt.propTypes = {
};

export default SectionAimedAt;
