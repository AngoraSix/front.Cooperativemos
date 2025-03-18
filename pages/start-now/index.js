import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import StartNow from '../../components/StartNow';
import DefaultLayout from '../../layouts/DefaultLayout';
import logger from '../../utils/logger';

const StartNowPage = ({ }) => {
  const { t } = useTranslation('start-now');

  return (
    <DefaultLayout
      headData={{
        title: t('startnow.page.title'),
        description: t('startnow.page.description'),
      }}
      contained={false}
    >
      <StartNow />
    </DefaultLayout>
  );
};

StartNowPage.propTypes = {
};

export const getServerSideProps = async (ctx) => {
  let props = {
    ...(await serverSideTranslations(ctx.locale, [
      'common',
      'start-now',
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

export default StartNowPage;
