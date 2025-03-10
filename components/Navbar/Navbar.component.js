import {
  Box,
  Button,
  Toolbar,
  Typography
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import config from '../../config';

const Navbar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath } = router;

  return (
    <React.Fragment>
      <Box className='Navbar__Container' maxWidth="xl">
        <Toolbar className='Navbar__Toolbar'>
          <Box className="Navbar__Element Navbar__Logo">
            <Link href="/">
              <Box
                className="Navbar__Logo__Container"
              >
                <Image
                  className="Navbar__Logo"
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
            </Link>
          </Box>
          <Box className="Navbar__Element Navbar__Menu">
            <Box className="Navbar__Menu__Item__Container First">
              <Link href={"/"}>
                <Typography variant="body2" className="Navbar__Menu__Item" sx={{ fontWeight: pathname === "/" ? 'bold' : 'normal' }}>{t('navbar.menu.index.text')}</Typography>
              </Link>
            </Box>
            <Box className="Navbar__Menu__Item__Container Second">
              <Link href={"/about-us"}>
                <Typography variant="body2" className="Navbar__Menu__Item" sx={{ fontWeight: pathname === "/about-us" ? 'bold' : 'normal' }}>{t('navbar.menu.aboutus.text')}</Typography>
              </Link>
            </Box>
          </Box>
          <Box className="Navbar__Element Navbar__Action">
            <Link href={"/start-now"}>
              <Button className="Navbar__Connect__Button"
                variant="contained"
              >
                <Typography className="Navbar__Connect__Button__Text" variant="body2" textTransform={'initial'}>{t('navbar.startnow.button')}</Typography>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Box>
    </React.Fragment >
  );
};

Navbar.propTypes = {};

export default Navbar;
