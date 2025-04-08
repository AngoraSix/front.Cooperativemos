import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SECTIONHOOK_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/main/section04-logo.png';

const SectionHook = ({ }) => {
  const { t } = useTranslation('landing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  return (
    <Box className="SectionHook__Container">
      <Box className="SectionHook__Image__Container">
        <Image
          className="SectionHook__Image"
          src={SECTIONHOOK_IMAGE}
          alt="Intro"
          title="Intro"
          placeholder="blur"
          blurDataURL={SECTIONHOOK_IMAGE}
          fill
          sizes="(max-width: 600px) 27vh,
          27vh"
        />
      </Box>
      <Box className="SectionHook__MainText__Container">
        <Typography variant={isMobile ? "h4" : "h5"}
          className="SectionHook__MainText">{t('landing.hook.maintext')}</Typography>
      </Box>
      <Box className="SectionHook__SecondaryText__Container">
        <Typography variant={isMobile ? "body1" : "body2"}
          className="SectionHook__SecondaryText">{t('landing.hook.secondarytext')}</Typography>
      </Box>

      <Box className="SectionHook__Button__Container">

        <Button className="SectionHook__Button"
          variant="contained"
          onClick={() =>
            router.push("/start-now")
          }
        >
          <Typography className="SectionHook__Button__Text" variant="body2" textTransform={'initial'}>{t('landing.hook.button')}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

SectionHook.propTypes = {
};

export default SectionHook;
