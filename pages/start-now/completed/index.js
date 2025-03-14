import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import CompletedScreen from '../../../components/CompletedScreen';
import DefaultLayout from '../../../layouts/DefaultLayout';
import logger from '../../../utils/logger';

const StartNowCompletedPage = ({ }) => {
  const { t } = useTranslation('completed');

  return (
    <DefaultLayout
      headData={{
        title: t('startnow.completed.page.title'),
        description: t('startnow.completed.page.description'),
      }}
      contained={true}
    >
      <CompletedScreen />
    </DefaultLayout>
  );
};

StartNowCompletedPage.propTypes = {
};

export const getServerSideProps = async (ctx) => {
  let props = {
    ...(await serverSideTranslations(ctx.locale, [
      'common',
      'completed',
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

export default StartNowCompletedPage;
