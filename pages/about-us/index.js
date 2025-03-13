import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import AboutUs from '../../components/AboutUs';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

const AboutUsPage = ({ }) => {
  const { t } = useTranslation('aboutus');

  return (
    <DefaultLayout
      headData={{
        title: t('aboutus.page.title'),
        description: t('aboutus.page.description'),
      }}
      contained={false}
    >
      <AboutUs />
    </DefaultLayout>
  );
};

AboutUsPage.propTypes = {
};

export const getServerSideProps = async (ctx) => {
  let props = {
    ...(await serverSideTranslations(ctx.locale, [
      'common',
      'aboutus',
    ])),
  };
  return {
    props,
  };
};

export default AboutUsPage;
