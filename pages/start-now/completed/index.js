import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import CompletedScreen from '../../../components/Landing/CompletedScreen';
import DefaultLayout from '../../../layouts/DefaultLayout';
import logger from '../../../utils/logger';

const LearnMoreCompletedPage = ({ }) => {
  const { t } = useTranslation('landing');

  return (
    <DefaultLayout
      headData={{
        title: t('learnmore.page.title'),
        description: t('learnmore.page.description'),
      }}
      contained={true}
    >
      <CompletedScreen />
    </DefaultLayout>
  );
};

LearnMoreCompletedPage.propTypes = {
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

export default LearnMoreCompletedPage;
