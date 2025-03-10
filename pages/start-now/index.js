import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import LearnMore from '../../components/Landing/LearnMore';
import LandingLayout from '../../layouts/LandingLayout';
import logger from '../../utils/logger';

const LearnMorePage = ({ }) => {
  const { t } = useTranslation('landing');

  return (
    <LandingLayout
      headData={{
        title: t('learnmore.page.title'),
        description: t('learnmore.page.description'),
      }}
      contained={true}
    >
      <LearnMore />
    </LandingLayout>
  );
};

LearnMorePage.propTypes = {
};

export const getServerSideProps = async (ctx) => {
  let props = {
    ...(await serverSideTranslations(ctx.locale, [
      'common',
      'landing',
    ])),
  };

  try {
    props = {
      ...props,
    };
  } catch (err) {
    logger.error('err', err);
  }
  return {
    props,
  };
};

export default LearnMorePage;
