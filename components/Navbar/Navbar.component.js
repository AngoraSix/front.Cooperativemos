import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import config from '../../config';

const Navbar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { pathname, asPath } = router;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <Box className='Navbar__Container'>
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
          {isMobile ? (<><IconButton
            className='Navbar__Menu__Icon'
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem
                key="index"
                onClick={() =>
                  router.push("/")
                }
              >
                <Typography variant="body2" className="Navbar__Menu__Item" sx={{ fontWeight: pathname === "/" ? 'bold' : 'normal' }}>{t('navbar.menu.index.text')}</Typography>
              </MenuItem>
              <MenuItem
                key="aboutUs"
                onClick={() =>
                  router.push("/about-us")
                }
              >
                <Typography variant="body2" className="Navbar__Menu__Item" sx={{ fontWeight: pathname === "/about-us" ? 'bold' : 'normal' }}>{t('navbar.menu.aboutus.text')}</Typography>
              </MenuItem>
              <MenuItem
                key="startNow"
                onClick={() =>
                  router.push("/start-now")
                }
              >
                <Button className="Navbar__Connect__Button"
                  variant="contained"
                >
                  <Typography className="Navbar__Connect__Button__Text" variant="body2" textTransform={'initial'}>{t('navbar.startnow.button')}</Typography>
                </Button>
                {/* <Typography variant="body2" className="Navbar__Menu__Item" sx={{ fontWeight: pathname === "/start-now" ? 'bold' : 'normal' }}>{t('navbar.menu.startnow.text')}</Typography> */}
              </MenuItem>
            </Menu></>) : (<><Box className="Navbar__Element Navbar__Menu-Desktop">
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
              </Box></>)}
        </Toolbar>
      </Box>
    </React.Fragment >
  );
};

Navbar.propTypes = {};

export default Navbar;
