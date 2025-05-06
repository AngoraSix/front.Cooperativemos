import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Pricing from '../../components/Pricing';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

const AboutUsPage = ({ }) => {
  const { t } = useTranslation('pricing');

  return (
    <DefaultLayout
      headData={{
        title: t('pricing.page.title'),
        description: t('pricing.page.description'),
      }}
      contained={false}
    >
      <Pricing />
    </DefaultLayout>
  );
};

AboutUsPage.propTypes = {
};

export const getServerSideProps = async (ctx) => {
  let props = {
    ...(await serverSideTranslations(ctx.locale, [
      'common',
      'pricing',
    ])),
  };
  return {
    props,
  };
};

export default AboutUsPage;
