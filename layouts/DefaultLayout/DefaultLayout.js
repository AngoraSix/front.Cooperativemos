import { Box, Paper } from '@mui/material';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar';
import config from '../../config';

const DefaultLayout = ({ children, headData, contained = true }) => {
  const head = {
    ...config.site.head,
    ...headData,
  };
  const ChildrenContainer = contained ? Paper : 'div';

  return (
    <Box className={`DefaultLayout DefaultLayout__Container DefaultLayout__Page`}>
      <Head>
        <title>{head.title}</title>
        <meta property="og:title" key="og.title" content={head.title} />
        <meta
          property="og:description"
          key="og.description"
          content={head.description}
        />
        <meta
          property="og:image"
          itemProp="image"
          key="og.image"
          content={head.image.logo}
        />
      </Head>
      <Navbar />
      <ChildrenContainer className={`DefaultLayout__Page__Body`}>
        {children}
      </ChildrenContainer>
      <Footer />
    </Box>
  );
};

DefaultLayout.propTypes = {
  className: PropTypes.string,
  headData: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
