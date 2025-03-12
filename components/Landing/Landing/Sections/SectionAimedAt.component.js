import { Avatar, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

const AIMEDAT_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section03-aimedat.png';
const STATEMENT_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section03-statement.png';

const ImageComponent = () => <Box className="SectionAimedAt__Image__Container">
  <Image
    className="SectionAimedAt__Image"
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

const TitleComponent = ({ title, variant }) => <Box className="SectionAimedAt__Main__Title__Container">
  <Typography variant={variant}
    className="SectionAimedAt__Main__Title">{title}</Typography>
</Box>

const TextComponent = ({ text, textVariant }) => <Box className="SectionAimedAt__Main__Text__Container">
  <Typography variant={textVariant}
    className="SectionAimedAt__Main__Text">{text}</Typography>
</Box>

const StatementColaborationComponent = ({ text, textVariant, name, nameVariant }) =>
  <Box className="SectionAimedAt__Content__Details__Statement__Container Colaboration">
    <Box className="SectionAimedAt__Content__Details__Statement__Avatar__Container">
      <Avatar className='SectionAimedAt__Content__Details__Statement__Avatar'
        alt={name}
        src={STATEMENT_IMAGE}
      // sx={{ width: 56, height: 56 }}
      />
    </Box>
    <Box className="SectionAimedAt__Content__Details__Statement__Data__Container">
      <Box className="SectionAimedAt__Content__Details__Statement__Data__Text">
        <Typography variant={textVariant}
          className="SectionAimedAt__Statement__Text">{text}</Typography>
      </Box>
      <Box className="SectionAimedAt__Content__Details__Statement__Data_Name">
        <Typography variant={nameVariant}
          className="SectionAimedAt__Statement__Name">{name}</Typography>
      </Box>
    </Box>
  </Box>

const SectionAimedAt = ({ }) => {
  const { t } = useTranslation('landing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionAimedAt__Container">
      {isMobile ? (<>
        <TitleComponent title={t('landing.aimedat.main.title')} variant="h5" />
        <ImageComponent />
        <TextComponent text={t('landing.aimedat.main.text')} textVariant="body4" />
        <StatementColaborationComponent text={t('landing.aimedat.statement.text')} textVariant="body1B"
          name={t('landing.aimedat.statement.name')} nameVariant="body3" />
      </>) :
        (<>
          <Box className="SectionAimedAt__Content__Container">
            <Box className="SectionAimedAt__Content__Main__Container">
              <TitleComponent title={t('landing.aimedat.main.title')} variant="h6" />
              <TextComponent text={t('landing.aimedat.main.text')} textVariant="body1" />
            </Box>

            <Box className="SectionAimedAt__Content__Details__Container">
              <Box className="SectionAimedAt__Content__Details__Statement__Container Colaboration">
                <StatementColaborationComponent title={t('landing.aimedat.value.colaboration.title')} text={t('landing.aimedat.value.colaboration.text')} variantTitle="subtitle1B" textVariant="body2B" />
              </Box>
            </Box>
          </Box>
          <ImageComponent />
        </>)}
    </Box>
  );
};

SectionAimedAt.propTypes = {
};

export default SectionAimedAt;
