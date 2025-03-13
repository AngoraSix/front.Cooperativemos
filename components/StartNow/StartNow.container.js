import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import config from '../../../config';
import { ROUTES } from '../../../constants/constants';
import { useLoading, useNotifications } from '../../../hooks/app';
import logger from '../../../utils/logger';
import StartNow from './StartNow.component';
import { LEARN_MORE_CONSTANTS } from './StartNow.properties';

const coopTypeKeys = [
  "startnow.form.fields.cooptype.options.workServices",
  "startnow.form.fields.cooptype.options.workProduction",
  "startnow.form.fields.cooptype.options.housing",
  "startnow.form.fields.cooptype.options.agropecuaria",
  "startnow.form.fields.cooptype.options.servicesProvision",
  "startnow.form.fields.cooptype.options.consumo",
  "startnow.form.fields.cooptype.options.credit",
  "startnow.form.fields.cooptype.options.bank",
  "startnow.form.fields.cooptype.options.insurance",
  "startnow.form.fields.cooptype.options.school",
  "startnow.form.fields.cooptype.options.other",
];


const defaultFeatures = [
  'startnow.form.fields.features.efforttracking',
  'startnow.form.fields.features.transparency',
  'startnow.form.fields.features.memberengagement',
  'startnow.form.fields.features.automatedreporting',
  'startnow.form.fields.features.contributorengagement'
];

const defaultTools = [
  'startnow.form.fields.tools.spreadsheet',
  'startnow.form.fields.tools.whatsapp',
  'startnow.form.fields.tools.traditional',
  'startnow.form.fields.tools.custom',
  'startnow.form.fields.tools.paper',
  'startnow.form.fields.tools.jira',
  'startnow.form.fields.tools.trello',
];

const StartNowContainer = ({
}) => {
  const { t } = useTranslation('landing');
  const router = useRouter();

  const { data: session } = useSession();

  const { onError, onSuccess } = useNotifications();
  const { doLoad } = useLoading();

  // Step logic
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 2; // We’ll have 3 steps

  // Basic form fields
  const [email, setEmail] = useState(session?.user?.email || '');
  const [role, setRole] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [coopType, setCoopType] = useState('');
  const [fairPrice, setFairPrice] = useState(0);
  const priceMarks = [
    { value: 0, labelKey: 'startnow.form.fields.pricerange.marks.na' },
    { value: 1, labelKey: 'startnow.form.fields.pricerange.marks.less15' },
    { value: 2, labelKey: 'startnow.form.fields.pricerange.marks.15to35' },
    { value: 3, labelKey: 'startnow.form.fields.pricerange.marks.35to60' },
    { value: 4, labelKey: 'startnow.form.fields.pricerange.marks.60to100' },
    { value: 5, labelKey: 'startnow.form.fields.pricerange.marks.more100' },
  ];

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  // User can add a custom feature as plain text (not i18n)
  const [newFeature, setNewFeature] = useState('');
  const toggleFeature = (featureKeyOrName) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureKeyOrName)) {
        return prev.filter((f) => f !== featureKeyOrName);
      }
      return [...prev, featureKeyOrName];
    });
  };
  const [selectedTools, setSelectedTools] = useState([]);
  const [newTool, setNewTool] = useState('');
  const toggleTool = (toolKeyOrName) => {
    setSelectedTools((prev) => {
      if (prev.includes(toolKeyOrName)) {
        return prev.filter((f) => f !== toolKeyOrName);
      }
      return [...prev, toolKeyOrName];
    });
  };
  const [cookiesChecked, setCookiesChecked] = useState(false);
  const [wantsContact, setWantsContact] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false);

  const roleOptions = [
    { label: t('startnow.form.fields.roles.manager') },
    { label: t('startnow.form.fields.roles.board') },
    { label: t('startnow.form.fields.roles.member') },
    { label: t('startnow.form.fields.roles.external') },
    { label: t('startnow.form.fields.roles.other') },
  ];

  // 1. On mount, check cookies
  useEffect(() => {
    const completedCookie = Cookies.get('learnMoreCompleted');

    if (completedCookie === 'true') {
      router.push(ROUTES.startnowcompleted);
    } else {
      setCookiesChecked(true);
    }
  }, []);

  const handleNext = async () => {
    if (activeStep === 0 && wantsContact && !email.trim()) {
      // Show the error
      setShowEmailError(true);
      // set some error or show a notification, or do nothing but return
      onError(t(t('startnow.form.steps.1.next.error')));
      return;
    }
    // If not on the last step, simply go to the next
    if (activeStep < totalSteps - 1) {
      try {
        window.gtag('event', `click_next_${activeStep}`, {});
      } catch (err) {
        console.log(err);
      }
      setActiveStep((prev) => prev + 1);
    } else {
      // Last step -> Perform final submission
      await onSubmit();
    }
  };

  const handleBack = () => {
    // Move to the previous step if possible
    setActiveStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddNewFeature = () => {
    if (!newFeature.trim()) return;
    // Add the user-typed feature as a string
    if (!selectedFeatures.includes(newFeature)) {
      setSelectedFeatures((prev) => [...prev, newFeature]);
    }
    setNewFeature('');
  };

  const handleAddNewTool = () => {
    if (!newTool.trim()) return;
    // Add the user-typed tool as a string
    if (!selectedTools.includes(newTool)) {
      setSelectedTools((prev) => [...prev, newTool]);
    }
    setNewTool('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    doLoad(true);
    try {
      await window.gtag('event', 'submit_form', {});
      await window.gtag_report_conversion();
      console.log('gtag_report_conversion');
    } catch (err) {
      console.log(err);
    }
    try {
      const grecaptchaToken = await grecaptcha.execute(
        config.thirdParties.googleRecaptcha.key,
        { action: LEARN_MORE_CONSTANTS.LS1_EXPERIMENT_CAPTCHA_ACTION_KEY }
      );
      // Gather all data
      const formData = {
        grecaptchaToken,
        email,
        role,
        companySize,
        wantsContact,
        selectedFeatures,
        selectedTools,
        fairPrice,
        coopType,
      };

      await api.front.saveSurveyResponse(
        formData,
        LEARN_MORE_CONSTANTS.LS1_EXPERIMENT_KEY
      );

      Cookies.set('learnMoreCompleted', 'true', { expires: 30 }); // expires in 30 days
      Cookies.set('learnMoreWantsContact', wantsContact ? 'true' : 'false', { expires: 30 });

      onSuccess(t('startnow.save.success'));
      router.push(ROUTES.startnowcompleted);
    } catch (err) {
      logger.error(err);
      onError(t('startnow.save.error'));
    }

    doLoad(false);
  };

  return (
    <StartNow
      // Step logic
      activeStep={activeStep}
      totalSteps={totalSteps}
      handleNext={handleNext}
      handleBack={handleBack}

      // Step 1 fields
      email={email}
      setEmail={setEmail}
      roleOptions={roleOptions}
      role={role}
      setRole={setRole}
      companySize={companySize}
      setCompanySize={setCompanySize}
      coopType={coopType}
      setCoopType={setCoopType}
      coopTypeKeys={coopTypeKeys}
      wantsContact={wantsContact}
      setWantsContact={setWantsContact}
      defaultTools={defaultTools}
      selectedTools={selectedTools}
      toggleTool={toggleTool}
      newTool={newTool}
      setNewTool={setNewTool}
      handleAddNewTool={handleAddNewTool}

      // Step 2
      defaultFeatures={defaultFeatures}
      selectedFeatures={selectedFeatures}
      toggleFeature={toggleFeature}
      newFeature={newFeature}
      setNewFeature={setNewFeature}
      handleAddNewFeature={handleAddNewFeature}
      fairPrice={fairPrice}
      setFairPrice={setFairPrice}
      priceMarks={priceMarks}

      // Submission
      onSubmit={onSubmit}
      cookiesChecked={cookiesChecked}

      // others
      showEmailError={showEmailError}
      setShowEmailError={setShowEmailError}
    />
  );
};

StartNowContainer.propTypes = {
};

export default StartNowContainer;
