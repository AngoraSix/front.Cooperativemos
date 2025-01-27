import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ROUTES } from '../../../constants/constants';
import { useNotifications } from '../../../hooks/app';
import CompletedScreen from '../CompletedScreen/CompletedScreen.component';

const CompletedScreenContainer = ({
}) => {
  const { t } = useTranslation('landing');
  const router = useRouter();
  const { onSuccess } = useNotifications();
  const [wantsContact, setWantsContact] = useState(true);
  const [cookiesChecked, setCookiesChecked] = useState(false);

  // 1. On mount, check cookies
  useEffect(() => {
    const completedCookie = Cookies.get('learnMoreCompleted');
    const contactCookie = Cookies.get('learnMoreWantsContact');

    if (completedCookie === 'true') {
      setCookiesChecked(true);
      setWantsContact(contactCookie === 'true');
    } else {
      onSuccess(t('learnmore.completed.notcompleted.message'));
      router.push(ROUTES.learnmore);
    }
  }, []);


  // 3. Provide a function to "refill" the form
  const handleRefillForm = () => {
    // Remove cookies
    Cookies.remove('learnMoreCompleted');
    Cookies.remove('learnMoreWantsContact');
    // Reset local states
    router.push(ROUTES.learnmore);
  };

  return (
    <CompletedScreen
      wantsContact={wantsContact}
      onRefillForm={handleRefillForm}
      cookiesChecked={cookiesChecked}
    />
  );
};

CompletedScreenContainer.propTypes = {
};

export default CompletedScreenContainer;
