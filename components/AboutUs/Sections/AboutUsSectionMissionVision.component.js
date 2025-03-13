import MissionIcon from '@mui/icons-material/MenuBook';
import VisionIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import React from 'react';

const SectionMissionVision = ({ }) => {
  const { t } = useTranslation('aboutus');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionMissionVision__Container">
      <Box className="SectionMissionVision__Element__Container">

        <Box className="SectionMissionVision__Icon__Container">
          <MissionIcon className="SectionMissionVision__Icon" />
        </Box>
        <Box className="SectionMissionVision__Title__Container">
          <Typography variant={isMobile ? "h5" : "h5"}
            className="SectionMissionVision__Title">{t('aboutus.missionvision.mission.title')}</Typography>
        </Box>
        <Box className="SectionMissionVision__Text__Container">
          <Typography variant={isMobile ? "body1" : "body2"}
            className="SectionMissionVision__Text">{t('aboutus.missionvision.mission.text')}</Typography>
        </Box>
      </Box>
      <Box className="SectionMissionVision__Element__Container">
        <Box className="SectionMissionVision__Icon__Container">
          <VisionIcon className="SectionMissionVision__Icon" />
        </Box>
        <Box className="SectionMissionVision__Title__Container">
          <Typography variant={isMobile ? "h5" : "h5"}
            className="SectionMissionVision__Title">{t('aboutus.missionvision.vision.title')}</Typography>
        </Box>
        <Box className="SectionMissionVision__Text__Container">
          <Typography variant={isMobile ? "body1" : "body2"}
            className="SectionMissionVision__Text">{t('aboutus.missionvision.vision.text')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

SectionMissionVision.propTypes = {
};

export default SectionMissionVision;
