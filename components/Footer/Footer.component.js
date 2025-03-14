import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import config from '../../config';

const Footer = ({ }) => {
  const { t } = useTranslation('common');

  return (
    <Box className="Footer Footer__Container">
      <Box className="Footer__Element Footer__Logo">
        <Box className="Footer__Logo__Container" >
          <Image
            className="Footer__Logo"
            src={config.site.head.image.full}
            alt="Cooperativemos"
            title="Cooperativemos"
            placeholder="blur"
            blurDataURL={config.site.head.image.full}
            sx={{ priority: { xs: false, md: true } }}
            fill
            sizes="(max-width: 600px) 175px,
                    175px"
          />
        </Box>
      </Box>
      <Box className="Footer__Element Footer__Contact__Container" >
        <Typography variant="body2" className="Footer__Contact">
          {t('common.footer.contactintro')}
          <Typography variant="body2" component="span" className="Footer__Contact__Mail">
            {t('common.footer.contact')}
          </Typography>
        </Typography>

      </Box>
      <Box className="Footer__Element Footer__PoweredBy__Container" >
        <Typography variant="body2" className="Footer__PoweredBy">
          {t('common.footer.poweredby')}
        </Typography>
      </Box>
    </Box>
  );
};

Footer.propTypes = {
};

export default Footer;
