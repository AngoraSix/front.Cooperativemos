import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Cookies from 'js-cookie';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import config from '../../config';

const Navbar = () => {
  const { data: session } = useSession();
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query, locale, locales } = router;
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);

  const handleChange = async (selectedLocale) => {
    if (selectedLocale != locale) {
      Cookies.set('NEXT_LOCALE', selectedLocale);
      await router.push({ pathname, query }, asPath, {
        locale: selectedLocale,
      });
    }
    setAnchorElLanguage(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const otherLocales = locales.filter((l) => l != locale);

  return (
    <React.Fragment>
      <LinearProgress className="Navbar__ProgressBar" color="primary" />

      <AppBar className="Navbar Navbar__Container" position="fixed">
        <Container className='Navbar__Container__Internal' maxWidth="xl">
          <Toolbar className='Navbar__Toolbar'>

            <Box
              className="Navbar__Element Navbar__Logo__Desktop"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Link href="/">
                <Box
                  className="Navbar__Logo__Container"
                >
                  <Image
                    className="Navbar__Logo"
                    src={config.site.head.image.full}
                    alt="Cooperativemos!"
                    title="Cooperativemos!"
                    placeholder="blur"
                    blurDataURL={config.site.head.image.fullSmall}
                    sx={{ priority: { xs: false, md: true } }}
                    fill
                    sizes="(max-width: 600px) 9.5rem,
                    13.5rem"
                  />
                </Box>
              </Link>
            </Box>

            <Box
              className="Navbar__Element Navbar__Logo__Mobile"
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <Link
                href="/"
              >
                <Box
                  className="Navbar__Logo__Container"
                >
                  <Image
                    className="Navbar__Logo"
                    src={config.site.head.image.full}
                    alt="Cooperativemos!"
                    title="Cooperativemos!"
                    placeholder="blur"
                    blurDataURL={config.site.head.image.fullSmall}
                    sx={{ priority: { xs: false, md: true } }}
                    fill
                    sizes="(max-width: 600px) 9.5rem,
                    13.5rem"
                  />
                </Box>
              </Link>
            </Box>
            {/* LANGUAGE */}
            <Box className="Navbar__Element Navbar__Language" sx={{ flexGrow: 0 }}>
              <Tooltip title={t('navbar.language.tooltip')}>
                <Button
                  onClick={handleOpenLanguageMenu}
                  sx={{ p: 0, color: 'primary.contrastText' }}
                  size="large"
                  variant="text"
                  startIcon={<LanguageIcon />}
                >
                  <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='body1'>
                    {locale.toUpperCase()}
                  </Typography>
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-lang"
                anchorEl={anchorElLanguage}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguageMenu}
              >
                {otherLocales.map((l) => (
                  <MenuItem
                    key={l}
                    value={l}
                    onClick={async () => await handleChange(l)}
                  >
                    {l.toUpperCase()}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* NOTIFICATIONS */}
            {/* PROFILE ICON */}
            {session ? (
              <Box className="Navbar__Element Navbar__Session__Data" sx={{ flexGrow: 0 }}>
                <Tooltip title={t('navbar.settings.tooltip')}>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    size="large"
                  >
                    <Avatar
                      alt={t('navbar.settings.avatar.alt')}
                      src={session.user?.imageThumbnail || session.user?.image}
                      sx={{ width: 50, height: 50 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key="logout" onClick={() => signOut()}>
                    <Typography textAlign="center">
                      {t('navbar.settings.menu.logout')}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box className="Navbar__Element Navbar__Session__Login" sx={{ flexGrow: 0 }}>
                <Button
                  onClick={() => signIn('angorasixspring')}
                  variant="contained"
                  color="secondary"
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                  }}
                  startIcon={<LoginIcon />}
                  alt="login"
                >
                  {t('navbar.settings.menu.login')}
                </Button>
                <IconButton
                  className="Navbar__Login__Icon"
                  onClick={() => signIn('angorasixspring')}
                  aria-label="login"
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  <LoginIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Another Toolbar just to fit the fixed position of Navbar */}
      <Toolbar />
    </React.Fragment >
  );
};

Navbar.propTypes = {};

export default Navbar;
