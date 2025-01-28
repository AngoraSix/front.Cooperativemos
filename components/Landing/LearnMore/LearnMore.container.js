import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { ROUTES } from '../../../constants/constants';
import { useLoading, useNotifications } from '../../../hooks/app';
import logger from '../../../utils/logger';
import LearnMore from './LearnMore.component';
import { LEARN_MORE_CONSTANTS } from './LearnMore.properties';

const coopTypeKeys = [
  "learnmore.form.fields.cooptype.options.workServices",
  "learnmore.form.fields.cooptype.options.workProduction",
  "learnmore.form.fields.cooptype.options.housing",
  "learnmore.form.fields.cooptype.options.agropecuaria",
  "learnmore.form.fields.cooptype.options.servicesProvision",
  "learnmore.form.fields.cooptype.options.consumo",
  "learnmore.form.fields.cooptype.options.credit",
  "learnmore.form.fields.cooptype.options.bank",
  "learnmore.form.fields.cooptype.options.insurance",
  "learnmore.form.fields.cooptype.options.school",
  "learnmore.form.fields.cooptype.options.other",
];


const defaultFeatures = [
  'learnmore.form.fields.features.efforttracking',
  'learnmore.form.fields.features.transparency',
  'learnmore.form.fields.features.memberengagement',
  'learnmore.form.fields.features.automatedreporting',
  'learnmore.form.fields.features.contributorengagement'
];

const defaultTools = [
  'learnmore.form.fields.tools.spreadsheet',
  'learnmore.form.fields.tools.whatsapp',
  'learnmore.form.fields.tools.traditional',
  'learnmore.form.fields.tools.custom',
  'learnmore.form.fields.tools.paper',
  'learnmore.form.fields.tools.jira',
  'learnmore.form.fields.tools.trello',
];

const LearnMoreContainer = ({
}) => {
  const { t } = useTranslation('landing');
  const router = useRouter();
  
  const recaptchaId = process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_ID;

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
    { value: 0, labelKey: 'learnmore.form.fields.pricerange.marks.na' },
    { value: 1, labelKey: 'learnmore.form.fields.pricerange.marks.less15' },
    { value: 2, labelKey: 'learnmore.form.fields.pricerange.marks.15to35' },
    { value: 3, labelKey: 'learnmore.form.fields.pricerange.marks.35to60' },
    { value: 4, labelKey: 'learnmore.form.fields.pricerange.marks.60to100' },
    { value: 5, labelKey: 'learnmore.form.fields.pricerange.marks.more100' },
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
    { label: t('learnmore.form.fields.roles.manager') },
    { label: t('learnmore.form.fields.roles.board') },
    { label: t('learnmore.form.fields.roles.member') },
    { label: t('learnmore.form.fields.roles.external') },
    { label: t('learnmore.form.fields.roles.other') },
  ];

  // 1. On mount, check cookies
  useEffect(() => {
    const completedCookie = Cookies.get('learnMoreCompleted');

    if (completedCookie === 'true') {
      router.push(ROUTES.learnmorecompleted);
    } else {
      setCookiesChecked(true);
    }
  }, []);

  const handleNext = async () => {
    if (activeStep === 0 && wantsContact && !email.trim()) {
      // Show the error
      setShowEmailError(true);
      // set some error or show a notification, or do nothing but return
      onError(t(t('learnmore.form.steps.1.next.error')));
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
      window.gtag('event', 'submit_form', {});
    } catch (err) {
      console.log(err);
    }
    try {
      const grecaptchaToken = await grecaptcha.execute(
        recaptchaId,
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

      onSuccess(t('learnmore.save.success'));
      router.push(ROUTES.learnmorecompleted);
    } catch (err) {
      logger.error(err);
      onError(t('learnmore.save.error'));
    }

    doLoad(false);
  };

  return (
    <LearnMore
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

LearnMoreContainer.propTypes = {
};

export default LearnMoreContainer;
